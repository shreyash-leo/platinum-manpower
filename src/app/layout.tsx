
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Platinum Manpower",
  description: "Reliable Workforce Solutions For Every Industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-white text-black`}>
        <SmoothScroll />

        {/* Keep this after SmoothScroll */}
        <ScrollToTop />

        {children}
      </body>
    </html>
  );
}
