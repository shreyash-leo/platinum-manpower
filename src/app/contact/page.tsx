"use client";

/* eslint-disable @next/next/no-img-element */

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ClipReveal,
  FloatingShape,
  Magnetic,
  ParallaxMedia,
  Reveal,
  ScaleReveal,
  ScrollProgress,
  StaggerGroup,
  StaggerItem,
  StretchCard,
} from "@/components/motion/MotionEffects";

const assets = {
  hero: "/images/contact/hero-contact.webp",
  workforce: "/images/contact/workforce-team.webp",
};

const contactMethods = [
  {
    number: "01",
    label: "Call Our Team",
    value: "+91 93251 58710",
    note: "Speak directly with our manpower coordination team.",
    href: "tel:+919325158710",
  },
  {
    number: "02",
    label: "WhatsApp",
    value: "+91 93251 58710",
    note: "Share your staffing requirement for a faster response.",
    href: "https://wa.me/919325158710",
  },
  {
    number: "03",
    label: "Email Us",
    value: "contact@platinummanpowerservices.com",
    note: "Send detailed role, quantity, shift, and location requirements.",
    href: "mailto:contact@platinummanpowerservices.com",
  },
];

const industryOptions = [
  "Hospital / Healthcare",
  "Hotel / Hospitality",
  "Shopping Mall / Retail",
  "Airport / Transit Facility",
  "Corporate Office",
  "Commercial Space",
  "Other",
];

const serviceOptions = [
  "Skilled Manpower",
  "Unskilled Manpower",
  "Nurses & Healthcare Staff",
  "Hotel & Hospitality Staff",
  "Housekeeping Staff",
  "Facility Support Staff",
  "Temporary / Contract Workforce",
  "Not Sure Yet",
];

const requirementSteps = [
  {
    step: "01",
    title: "Share Your Requirement",
    text: "Tell us the industry, job roles, workforce quantity, shift timing, and location.",
  },
  {
    step: "02",
    title: "Requirement Review",
    text: "Our team studies the operational need and identifies the most suitable staffing approach.",
  },
  {
    step: "03",
    title: "Manpower Coordination",
    text: "Suitable workers are screened, shortlisted, and coordinated according to your requirement.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    text: "Selected manpower is deployed with ongoing coordination and replacement support when required.",
  },
];

const supportPoints = [
  "Requirement-based workforce planning",
  "Skilled and unskilled manpower support",
  "Basic screening and staff verification",
  "Shift and location-based coordination",
  "Quick replacement assistance",
  "Ongoing client communication",
];

const team = [
  {
    name: "Shalu Sansare",
    role: "Proprietor",
    phone: "93251 58710",
    call: "9325158710",
    email: "contact@platinummanpowerservices.com",
    initials: "SS",
  },
  {
    name: "Sonali Pagare",
    role: "HR Manager",
    phone: "91463 81803",
    call: "9146381803",
    email: "platinummanpower.sonali@gmail.com",
    initials: "SP",
  },
  {
    name: "Vishal Kardak",
    role: "Business Development Head",
    phone: "98674 52693",
    call: "9867452693",
    email: "contact@platinummanpowerservices.com",
    initials: "VK",
  },
];

const faqs = [
  {
    question: "What details should I share for a manpower requirement?",
    answer:
      "Please share the required job roles, number of workers, work location, shift timing, expected joining date, contract duration, and any experience or skill expectations.",
  },
  {
    question: "Which locations do you currently support?",
    answer:
      "Our office is based in Nashik. Service availability for other locations depends on the role, workforce quantity, deployment timeline, and operational requirement.",
  },
  {
    question: "Can I request urgent or replacement manpower?",
    answer:
      "Yes. You can contact our team for urgent staffing or replacement support. Availability depends on the required role, location, shift, and number of workers.",
  },
  {
    question: "Do you provide both skilled and unskilled workers?",
    answer:
      "Yes. We provide skilled and unskilled manpower, healthcare support staff, hospitality staff, housekeeping personnel, and general facility support workers.",
  },
];

type EnquiryForm = {
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
};

const initialForm: EnquiryForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  industry: "",
  service: "",
  quantity: "",
  location: "",
  message: "",
  website: "",
};

type SubmitState = "idle" | "sending" | "success" | "error";

function SectionHeading({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-[42px] font-light leading-[0.98] tracking-[-0.065em] md:text-[58px] xl:text-[76px] ${
        light ? "text-white" : "text-black"
      }`}
    >
      {children}
    </h2>
  );
}

function ArrowButton({
  children,
  href,
  dark = false,
  external = false,
}: {
  children: ReactNode;
  href: string;
  dark?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-stretch font-semibold outline-none transition-all duration-300 ${
        dark ? "text-white" : "text-black"
      }`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#d6eaff] text-black transition-transform duration-300 group-hover:translate-x-1">
        ↳
      </span>
      <span
        className={`ml-1 flex h-12 items-center rounded-[4px] border px-5 transition-colors duration-300 ${
          dark
            ? "border-white/35 hover:border-white/70"
            : "border-black/20 hover:border-black/55"
        }`}
      >
        {children}
      </span>
    </a>
  );
}

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <label className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.1em] text-[#104B9C]">
      {children}
    </label>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-black/10">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-8 py-7 text-left text-[19px] font-medium text-black transition-colors duration-300 hover:text-[#104B9C]"
      >
        <span>{question}</span>
        <span className="text-[28px] font-light text-[#104B9C]">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[780px] pb-8 text-[18px] leading-[1.5] text-[#565656]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<EnquiryForm>(initialForm);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const formStartedAt = useRef(Date.now());

  function updateField(field: keyof EnquiryForm, value: string) {
    setSubmitState("idle");
    setSubmitMessage("");
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      setSubmitState("error");
      setSubmitMessage("Please complete all required fields.");
      return;
    }

    setSubmitState("sending");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          startedAt: formStartedAt.current,
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your enquiry.");
      }

      setSubmitState("success");
      setSubmitMessage(
        "Thank you. Your enquiry has been emailed to our coordination team.",
      );
      setForm(initialForm);
      formStartedAt.current = Date.now();
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry. Please try again.",
      );
    }
  }

  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-[#082d5c] font-sans text-[#524f4b]">
      <Navbar />
      <ScrollProgress />

      {/* Fixed navy canvas. Rounded section cards scroll above this layer. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#082d5c]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(214,234,255,0.18),transparent_28%),radial-gradient(circle_at_88%_34%,rgba(255,255,255,0.10),transparent_24%),linear-gradient(145deg,#082d5c_0%,#0b3c78_48%,#061f43_100%)]" />
        <div className="absolute -left-40 top-[12%] h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="absolute -right-44 top-[48%] h-[620px] w-[620px] rounded-full border border-white/[0.08]" />
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative z-10 pb-2 pt-2 sm:pb-3 sm:pt-3 lg:pb-5 lg:pt-5">
        {/* Hero Section */}
        <section className="relative mx-2 overflow-hidden rounded-[26px] bg-[#D9EAFD] px-[9vw] pb-24 pt-[140px] text-black shadow-[0_32px_100px_rgba(2,18,43,0.32)] sm:mx-3 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={9}
            distance={22}
            className="absolute -right-24 top-20 h-[520px] w-[520px] rounded-full border border-[#104B9C]/10"
          />

          <FloatingShape
            duration={7}
            distance={14}
            delay={0.6}
            className="absolute -right-8 top-36 h-[390px] w-[390px] rounded-full border border-[#104B9C]/10"
          />

          <div className="relative grid items-end gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal direction="right" className="pb-4">
              <p className="mb-8 text-[24px] font-semibold uppercase tracking-[0.16em] text-[#104B9C]">
                Contact Platinum Manpower
              </p>

              <h1 className="max-w-[780px] text-[52px] font-light leading-[0.94] tracking-[-0.07em] md:text-[74px] xl:text-[96px]">
                Let&apos;s discuss your workforce requirement.
              </h1>

              <Reveal delay={0.12}>
                <p className="mt-10 max-w-[600px] text-[20px] leading-[1.42] text-black/65">
                  Tell us the roles, quantity, location, and shift requirements.
                  Our team will help you identify a practical manpower solution
                  for your workplace.
                </p>
              </Reveal>

              <div className="mt-10 flex flex-wrap gap-4">
                <Magnetic>
                  <ArrowButton href="tel:+919325158710">
                    Call Our Team
                  </ArrowButton>
                </Magnetic>

                <Magnetic strength={14}>
                  <ArrowButton href="https://wa.me/919325158710" external>
                    WhatsApp Us
                  </ArrowButton>
                </Magnetic>
              </div>
            </Reveal>

            <ScaleReveal delay={0.12}>
              <ParallaxMedia
                src={assets.hero}
                alt="Platinum manpower contact team"
                distance={55}
                className="min-h-[590px] rounded-[12px] bg-[#104B9C] shadow-[0_35px_100px_rgba(16,75,156,0.22)]"
                overlayClassName="bg-gradient-to-t from-[#061b38]/95 via-[#104B9C]/20 to-transparent"
              >
                <div className="absolute bottom-0 left-0 right-0 z-10 p-8 text-white md:p-12">
                  <Reveal delay={0.2}>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                      Response-focused support
                    </p>

                    <h2 className="mt-4 max-w-[560px] text-[38px] font-light leading-[1.02] tracking-[-0.055em] md:text-[52px]">
                      Clear coordination from the first conversation.
                    </h2>
                  </Reveal>

                  <StaggerGroup
                    className="mt-8 grid gap-4 sm:grid-cols-3"
                    delayChildren={0.25}
                    stagger={0.1}
                  >
                    {[
                      ["01", "Requirement"],
                      ["02", "Coordination"],
                      ["03", "Deployment"],
                    ].map(([number, label]) => (
                      <StaggerItem key={number}>
                        <StretchCard>
                          <div className="rounded-[6px] border border-white/20 bg-white/10 px-4 py-4 backdrop-blur-sm">
                            <p className="text-[13px] font-semibold text-[#d6eaff]">
                              {number}
                            </p>

                            <p className="mt-2 text-[16px] font-medium">
                              {label}
                            </p>
                          </div>
                        </StretchCard>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              </ParallaxMedia>
            </ScaleReveal>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="relative mx-2 mb-3 mt-3 overflow-hidden rounded-[26px] bg-white px-[7vw] py-20 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 sm:mt-4 md:rounded-[34px] lg:mx-5">
          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {contactMethods.map((method) => {
              const isEmail = method.label === "Email Us";
              const isWhatsApp = method.label === "WhatsApp";

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={isWhatsApp ? "_blank" : undefined}
                  rel={isWhatsApp ? "noreferrer" : undefined}
                  className="group flex min-h-[250px] flex-col rounded-[10px] border border-[#104B9C]/15 bg-[#f7fbff] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#104B9C] hover:text-white hover:shadow-[0_25px_70px_rgba(16,75,156,0.18)]"
                >
                  {/* Number and Arrow */}
                  <div className="flex items-start justify-between gap-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#104B9C] text-[12px] font-semibold text-white transition-colors duration-500 group-hover:bg-white group-hover:text-[#104B9C]">
                      {method.number}
                    </span>

                    <span className="text-[24px] font-light transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="mt-10 flex flex-1 flex-col">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#104B9C] transition-colors duration-500 group-hover:text-[#d6eaff]">
                      {method.label}
                    </p>

                    <div className="mt-3 flex-1">
                      <p
                        className={`font-medium leading-[1.25] tracking-[-0.03em] ${
                          isEmail
                            ? "text-[17px] break-all md:text-[18px] lg:text-[17px] xl:text-[18px]"
                            : "text-[24px] md:text-[26px]"
                        }`}
                      >
                        {method.value}
                      </p>
                    </div>

                    <p className="mt-5 text-[15px] leading-[1.5] text-[#5a5a5a] transition-colors duration-500 group-hover:text-white/75">
                      {method.note}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <div className="grid gap-20 xl:grid-cols-[0.38fr_0.62fr]">
            <div className="xl:sticky xl:top-28 xl:self-start">
              <p className="mb-8 font-semibold text-[24px] text-[#d6eaff]">
                Workforce Enquiry
              </p>

              <SectionHeading light>
                Give us the details. We&apos;ll take the conversation forward.
              </SectionHeading>

              <p className="mt-10 max-w-[520px] text-[19px] leading-[1.45] text-white/70">
                Complete the form with the most important staffing details. On
                submission, your enquiry will be emailed securely to our
                coordination team.
              </p>

              <div className="mt-12 border-t border-white/20 pt-8">
                <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#d6eaff]">
                  Minimum details required
                </p>
                <div className="mt-6 grid gap-4 text-[17px] text-white/78">
                  {[
                    "Contact person name",
                    "Phone number",
                    "Required workforce service",
                    "Work location",
                  ].map((item) => (
                    <p key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#d6eaff]" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              aria-busy={submitState === "sending"}
              className="rounded-[12px] bg-white p-7 text-black shadow-[0_35px_100px_rgba(0,0,0,0.18)] md:p-10 xl:p-12"
            >
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(event) =>
                    updateField("website", event.target.value)
                  }
                />
              </div>

              <div className="grid gap-x-6 gap-y-7 md:grid-cols-2">
                <div>
                  <FieldLabel>Your Name *</FieldLabel>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder="Enter your full name"
                    className="h-14 w-full rounded-[5px] border border-black/12 bg-[#f7fbff] px-4 text-[17px] outline-none transition focus:border-[#104B9C] focus:ring-2 focus:ring-[#104B9C]/10"
                  />
                </div>

                <div>
                  <FieldLabel>Company / Organisation</FieldLabel>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(event) =>
                      updateField("company", event.target.value)
                    }
                    placeholder="Enter company name"
                    className="h-14 w-full rounded-[5px] border border-black/12 bg-[#f7fbff] px-4 text-[17px] outline-none transition focus:border-[#104B9C] focus:ring-2 focus:ring-[#104B9C]/10"
                  />
                </div>

                <div>
                  <FieldLabel>Phone Number *</FieldLabel>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="Enter contact number"
                    className="h-14 w-full rounded-[5px] border border-black/12 bg-[#f7fbff] px-4 text-[17px] outline-none transition focus:border-[#104B9C] focus:ring-2 focus:ring-[#104B9C]/10"
                  />
                </div>

                <div>
                  <FieldLabel>Email Address</FieldLabel>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder="Enter email address"
                    className="h-14 w-full rounded-[5px] border border-black/12 bg-[#f7fbff] px-4 text-[17px] outline-none transition focus:border-[#104B9C] focus:ring-2 focus:ring-[#104B9C]/10"
                  />
                </div>

                <div>
                  <FieldLabel>Industry</FieldLabel>
                  <select
                    value={form.industry}
                    onChange={(event) =>
                      updateField("industry", event.target.value)
                    }
                    className="h-14 w-full rounded-[5px] border border-black/12 bg-[#f7fbff] px-4 text-[17px] outline-none transition focus:border-[#104B9C] focus:ring-2 focus:ring-[#104B9C]/10"
                  >
                    <option value="">Select your industry</option>
                    {industryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <FieldLabel>Required Service *</FieldLabel>
                  <select
                    required
                    value={form.service}
                    onChange={(event) =>
                      updateField("service", event.target.value)
                    }
                    className="h-14 w-full rounded-[5px] border border-black/12 bg-[#f7fbff] px-4 text-[17px] outline-none transition focus:border-[#104B9C] focus:ring-2 focus:ring-[#104B9C]/10"
                  >
                    <option value="">Select manpower service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <FieldLabel>Required Staff Quantity</FieldLabel>
                  <input
                    type="number"
                    min="1"
                    value={form.quantity}
                    onChange={(event) =>
                      updateField("quantity", event.target.value)
                    }
                    placeholder="Example: 10"
                    className="h-14 w-full rounded-[5px] border border-black/12 bg-[#f7fbff] px-4 text-[17px] outline-none transition focus:border-[#104B9C] focus:ring-2 focus:ring-[#104B9C]/10"
                  />
                </div>

                <div>
                  <FieldLabel>Work Location</FieldLabel>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(event) =>
                      updateField("location", event.target.value)
                    }
                    placeholder="City or site location"
                    className="h-14 w-full rounded-[5px] border border-black/12 bg-[#f7fbff] px-4 text-[17px] outline-none transition focus:border-[#104B9C] focus:ring-2 focus:ring-[#104B9C]/10"
                  />
                </div>

                <div className="md:col-span-2">
                  <FieldLabel>Additional Requirement Details</FieldLabel>
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder="Mention job roles, shift timings, joining date, contract duration, experience expectations, or any urgent requirement."
                    className="w-full resize-none rounded-[5px] border border-black/12 bg-[#f7fbff] px-4 py-4 text-[17px] leading-[1.5] outline-none transition focus:border-[#104B9C] focus:ring-2 focus:ring-[#104B9C]/10"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center">
                <p className="max-w-[430px] text-[14px] leading-[1.45] text-[#696969]">
                  By submitting, you agree to share these details with Platinum
                  Manpower by email for enquiry coordination.
                </p>

                <button
                  type="submit"
                  disabled={submitState === "sending"}
                  className="inline-flex h-14 items-center gap-4 rounded-[5px] bg-[#104B9C] px-7 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c3b7d] disabled:cursor-wait disabled:opacity-65 disabled:hover:translate-y-0"
                >
                  {submitState === "sending" ? "Sending..." : "Send Enquiry"}
                  <span className="text-[20px]">→</span>
                </button>
              </div>

              {submitState !== "idle" && submitState !== "sending" && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-5 rounded-[5px] px-4 py-3 text-[15px] font-medium ${
                    submitState === "success"
                      ? "bg-[#eaf4ff] text-[#104B9C]"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </section>

        {/* Office and Coverage */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#f1f5f8] px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between rounded-[10px] bg-white p-9 shadow-[0_25px_70px_rgba(16,75,156,0.10)] md:p-12">
              <div>
                <p className="text-[24px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                  Head Office
                </p>
                <h2 className="mt-7 text-[42px] font-light leading-[1] tracking-[-0.06em] md:text-[58px]">
                  Visit or contact our Nashik office.
                </h2>
              </div>

              <div className="mt-14 border-t border-black/10 pt-8">
                <p className="max-w-[540px] text-[22px] leading-[1.35] text-[#3f3f3f]">
                  Row House No. 2, Jai Maa Ashapura Society, Sinnar Phata,
                  Nashik, Maharashtra 422101
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <ArrowButton href="tel:+919325158710">
                    Call Office
                  </ArrowButton>
                  <ArrowButton
                    href="https://www.google.com/maps/search/?api=1&query=Row+House+No+2+Jai+Maa+Ashapura+Society+Sinnar+Phata+Nashik+422101"
                    external
                  >
                    Get Directions
                  </ArrowButton>
                </div>
              </div>
            </div>

            <div className="min-h-[540px] overflow-hidden rounded-[10px] border border-[#104B9C]/10 bg-white shadow-[0_25px_70px_rgba(16,75,156,0.10)]">
              <iframe
                title="Platinum Manpower office location"
                src="https://www.google.com/maps?q=Row%20House%20No%202%20Jai%20Maa%20Ashapura%20Society%20Sinnar%20Phata%20Nashik%20422101&output=embed"
                className="h-full min-h-[540px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Support Split */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <div className="grid items-center gap-20 lg:grid-cols-[0.52fr_0.48fr]">
            <div className="relative min-h-[650px] overflow-hidden rounded-[10px]">
              <img
                src={assets.workforce}
                alt="Platinum workforce support"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-11">
                <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#d6eaff]">
                  Workplace-ready support
                </p>
                <p className="mt-4 max-w-[600px] text-[28px] font-light leading-[1.16] tracking-[-0.04em]">
                  Staffing assistance for daily operations, urgent gaps, and
                  planned workforce requirements.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-8 font-semibold text-[24px] text-[#d6eaff]">
                What We Can Discuss
              </p>
              <SectionHeading light>
                One conversation can clarify the right staffing direction.
              </SectionHeading>

              <div className="mt-14 border-t border-white/20">
                {supportPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-center gap-5 border-b border-white/20 py-5"
                  >
                    <span className="text-[13px] font-semibold text-[#d6eaff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[19px] text-white/82">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Contacts */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <div className="grid gap-20 lg:grid-cols-[0.34fr_0.66fr]">
            <p className="font-semibold text-[24px] text-[#104B9C]">
              Direct Contacts
              <br />
              Platinum Team
            </p>

            <SectionHeading>
              Connect with the people managing workforce enquiries and client
              coordination.
            </SectionHeading>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="group rounded-[8px] border border-[#104B9C]/15 bg-[#f7fbff] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(16,75,156,0.14)] md:p-7"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#104B9C] text-[18px] font-semibold text-white">
                    {member.initials}
                  </span>

                  <span className="text-[26px] font-light text-[#104B9C] transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-10 text-[32px] font-light uppercase leading-none tracking-[-0.05em]">
                  {member.name}
                </h3>

                <p className="mt-2 text-[18px] font-medium text-[#104B9C]">
                  {member.role}
                </p>

                <div className="mt-6 space-y-3 border-t border-black/10 pt-5">
                  <a
                    href={`tel:+91${member.call}`}
                    className="block text-[18px] font-semibold transition-colors hover:text-[#104B9C]"
                  >
                    {member.phone}
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    className="block break-words text-[15px] text-[#555] transition-colors hover:text-[#104B9C]"
                  >
                    {member.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#f1f5f8] px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <div className="grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
            <p className="font-semibold text-[24px] text-[#104B9C]">
              Contact Questions
            </p>

            <div>
              <SectionHeading>
                Useful details before you send your requirement.
              </SectionHeading>

              <div className="mt-16">
                {faqs.map((faq) => (
                  <FaqItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
                <div className="border-t border-black/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <div className="absolute -bottom-52 -right-32 h-[520px] w-[520px] rounded-full border border-white/10" />
          <div className="absolute -bottom-36 -right-20 h-[370px] w-[370px] rounded-full border border-white/10" />

          <div className="relative grid items-end gap-16 lg:grid-cols-[0.7fr_0.3fr]">
            <div>
              <p className="mb-8 text-[24px] font-semibold text-[#d6eaff]">
                Start the Conversation
              </p>
              <h2 className="max-w-[900px] text-[48px] font-light leading-[0.96] tracking-[-0.065em] md:text-[68px] xl:text-[84px]">
                Reliable manpower begins with a clear requirement.
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="mb-8 text-[19px] leading-[1.4] text-white/72">
                Call or WhatsApp our team to discuss your staffing need, work
                location, shift, and expected deployment timeline.
              </p>
              <ArrowButton href="tel:+919325158710" dark>
                Call 93251 58710
              </ArrowButton>
            </div>
          </div>
        </section>

        <div className="mx-2 overflow-hidden rounded-[26px] shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 md:rounded-[34px] lg:mx-5">
          <Footer />
        </div>
      </div>
    </main>
  );
}
