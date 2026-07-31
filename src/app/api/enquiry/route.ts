import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_RECIPIENT = "contact@platinummanpowerservices.com";
const MAX_REQUEST_BYTES = 16_000;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

type EnquiryPayload = {
  name: string;
  company: string;
  phone: string;
  email: string;
  industry: string;
  service: string;
  quantity: string;
  location: string;
  message: string;
  website: string;
  startedAt: number;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.replace(/\0/g, "").trim().slice(0, maxLength)
    : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function readPayload(value: unknown): EnquiryPayload {
  const body =
    typeof value === "object" && value !== null
      ? (value as Record<string, unknown>)
      : {};

  return {
    name: cleanText(body.name, 100),
    company: cleanText(body.company, 150),
    phone: cleanText(body.phone, 30),
    email: cleanText(body.email, 160).toLowerCase(),
    industry: cleanText(body.industry, 100),
    service: cleanText(body.service, 120),
    quantity: cleanText(body.quantity, 20),
    location: cleanText(body.location, 160),
    message: cleanText(body.message, 2_000),
    website: cleanText(body.website, 200),
    startedAt:
      typeof body.startedAt === "number" && Number.isFinite(body.startedAt)
        ? body.startedAt
        : 0,
  };
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json(
          { message: "Cross-site submissions are not allowed." },
          { status: 403 },
        );
      }
    } catch {
      return NextResponse.json(
        { message: "Invalid request origin." },
        { status: 403 },
      );
    }
  }

  const contentLength = Number(request.headers.get("content-length") || "0");

  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      { message: "The enquiry is too large." },
      { status: 413 },
    );
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { message: "Too many enquiries. Please try again later." },
      { status: 429 },
    );
  }

  let payload: EnquiryPayload;

  try {
    const rawBody = await request.text();

    if (rawBody.length > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { message: "The enquiry is too large." },
        { status: 413 },
      );
    }

    payload = readPayload(JSON.parse(rawBody));
  } catch {
    return NextResponse.json(
      { message: "Invalid enquiry data." },
      { status: 400 },
    );
  }

  // Silently accept automated submissions that fill the hidden honeypot.
  if (payload.website) {
    return NextResponse.json({ message: "Enquiry received." });
  }

  if (
    payload.startedAt > 0 &&
    Date.now() - payload.startedAt < 1_000
  ) {
    return NextResponse.json(
      { message: "Please review the form and try again." },
      { status: 400 },
    );
  }

  if (!payload.name || !payload.phone || !payload.service) {
    return NextResponse.json(
      { message: "Name, phone number, and service are required." },
      { status: 400 },
    );
  }

  if (!/^[+\d][\d\s()-]{6,24}$/.test(payload.phone)) {
    return NextResponse.json(
      { message: "Please enter a valid phone number." },
      { status: 400 },
    );
  }

  if (
    payload.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
  ) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = Number(process.env.SMTP_PORT || "465");
  const smtpSecure =
    process.env.SMTP_SECURE?.toLowerCase() === "true" || smtpPort === 465;
  const sender = process.env.SMTP_FROM || smtpUser;
  const recipient = process.env.ENQUIRY_TO || DEFAULT_RECIPIENT;

  if (!smtpHost || !smtpUser || !smtpPass || !sender) {
    console.error("Enquiry email is not configured. SMTP variables are missing.");
    return NextResponse.json(
      {
        message:
          "Email service is temporarily unavailable. Please call or WhatsApp us.",
      },
      { status: 503 },
    );
  }

  const fields = [
    ["Name", payload.name],
    ["Company / Organisation", payload.company || "Not provided"],
    ["Phone", payload.phone],
    ["Email", payload.email || "Not provided"],
    ["Industry", payload.industry || "Not selected"],
    ["Required Service", payload.service],
    ["Required Staff", payload.quantity || "Not provided"],
    ["Work Location", payload.location || "Not provided"],
    ["Additional Details", payload.message || "Not provided"],
  ];

  const text = [
    "New workforce enquiry from the Platinum Manpower website",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  const htmlRows = fields
    .map(
      ([label, value]) => `
        <tr>
          <th style="padding:10px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #e5e7eb;color:#104b9c;width:190px">
            ${escapeHtml(label)}
          </th>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#1f2937;white-space:pre-wrap">
            ${escapeHtml(value)}
          </td>
        </tr>`,
    )
    .join("");

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Platinum Manpower Website" <${sender}>`,
      to: recipient,
      replyTo: payload.email || undefined,
      subject: `New workforce enquiry: ${payload.service.replace(/[\r\n]+/g, " ")}`,
      text,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:720px;margin:0 auto;color:#1f2937">
          <div style="background:#104b9c;color:#fff;padding:22px 24px">
            <h1 style="font-size:22px;margin:0">New workforce enquiry</h1>
            <p style="margin:8px 0 0;color:#d6eaff">Submitted through platinummanpowerservices.com</p>
          </div>
          <table style="width:100%;border-collapse:collapse;background:#fff">
            <tbody>${htmlRows}</tbody>
          </table>
        </div>`,
    });

    return NextResponse.json({ message: "Enquiry sent successfully." });
  } catch (error) {
    console.error(
      "Failed to send enquiry email:",
      error instanceof Error ? error.message : "Unknown SMTP error",
    );

    return NextResponse.json(
      {
        message:
          "We could not send the enquiry right now. Please call or WhatsApp us.",
      },
      { status: 502 },
    );
  }
}
