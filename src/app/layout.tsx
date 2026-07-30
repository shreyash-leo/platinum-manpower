import type { Metadata } from "next";

import MotionProvider from "@/components/motion/MotionProvider";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";

import "./globals.css";

const siteName = "Platinum Manpower";
const siteDescription =
  "Reliable manpower, staffing, recruitment, and facility management services across Maharashtra.";

export const metadata: Metadata = {
  metadataBase: new URL("https://platinummanpowerservices.com"),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "manpower services Maharashtra",
    "staffing agency",
    "facility management",
    "contract workforce",
    "healthcare staffing",
    "hospitality staffing",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    title: siteName,
    description: siteDescription,
    url: "/",
    images: [
      {
        url: "/images/hero-banner.webp",
        width: 1916,
        height: 821,
        alt: "Platinum Manpower workforce solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/images/hero-banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black antialiased">
        <ScrollToTop />

        <MotionProvider>
          <SmoothScroll />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
