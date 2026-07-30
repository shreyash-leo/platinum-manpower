"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const compact = scrolled || mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 42);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div
          className={`pointer-events-auto mx-auto mt-2.5 grid grid-cols-[1fr_auto] items-center border border-white/15 bg-[#082d5c]/58 px-3 shadow-[0_22px_70px_rgba(2,18,43,0.30)] backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-3 sm:px-4 lg:grid-cols-[1fr_auto_1fr] ${
            compact
              ? "h-[68px] w-[calc(100%-20px)] max-w-[1180px] rounded-full lg:h-[72px]"
              : "h-[76px] w-[calc(100%-16px)] max-w-[1560px] rounded-[26px] sm:w-[calc(100%-24px)] lg:mt-4 lg:h-[88px] lg:w-[calc(100%-40px)] lg:rounded-[32px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Platinum Manpower home"
            className={`relative z-20 flex w-fit items-center rounded-full border border-white/20 bg-white/92 shadow-[0_8px_24px_rgba(2,18,43,0.16)] transition-all duration-700 ${
              compact
                ? "h-[50px] px-3.5 lg:h-[54px] lg:px-4"
                : "h-[56px] px-4 lg:h-[64px] lg:px-5"
            }`}
          >
            <Image
              src="/logo.webp"
              alt="Platinum Manpower and Facility Management Services"
              width={220}
              height={60}
              priority
              className={`h-auto w-auto object-contain transition-all duration-700 ${
                compact
                  ? "max-h-[38px] max-w-[160px] sm:max-w-[185px]"
                  : "max-h-[44px] max-w-[175px] sm:max-w-[210px]"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className={`hidden items-center rounded-full border border-white/10 bg-white/[0.07] p-1.5 transition-all duration-700 lg:flex ${
              compact ? "gap-0.5" : "gap-1"
            }`}
          >
            {navigation.map((item) => {
              const active = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6eaff] ${
                    compact
                      ? "px-4 py-2 text-[14px]"
                      : "px-5 py-2.5 text-[15px]"
                  } ${
                    active
                      ? "bg-[#d6eaff] text-[#082d5c] shadow-[0_7px_18px_rgba(2,18,43,0.18)]"
                      : "text-white/82 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center justify-self-end gap-2.5 lg:flex">
            <a
              href="tel:+919325158710"
              aria-label="Call Platinum Manpower"
              className={`inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.08] font-semibold text-white transition-all duration-500 hover:border-white/35 hover:bg-white/14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6eaff] ${
                compact
                  ? "h-11 px-4 text-[14px]"
                  : "h-12 px-5 text-[15px]"
              }`}
            >
              Call Now
            </a>

            <Link
              href="/contact"
              className={`group inline-flex items-center justify-center gap-2 rounded-full bg-[#d6eaff] font-semibold text-[#082d5c] shadow-[0_10px_28px_rgba(2,18,43,0.22)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                compact
                  ? "h-11 px-5 text-[14px]"
                  : "h-12 px-6 text-[15px]"
              }`}
            >
              Request Workforce
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="relative z-20 flex h-12 w-12 items-center justify-center justify-self-end rounded-full border border-white/20 bg-white/[0.10] text-white shadow-[0_8px_24px_rgba(2,18,43,0.18)] backdrop-blur-xl transition-all duration-300 hover:bg-white/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6eaff] lg:hidden"
          >
            <span className="relative block h-[18px] w-[22px]">
              <span
                className={`absolute left-0 top-0 h-[2px] w-[22px] rounded-full bg-white transition-all duration-300 ${
                  mobileMenuOpen
                    ? "translate-y-[8px] rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />

              <span
                className={`absolute left-0 top-[8px] h-[2px] rounded-full bg-white transition-all duration-300 ${
                  mobileMenuOpen
                    ? "w-0 opacity-0"
                    : "w-[22px] opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-[16px] h-[2px] w-[22px] rounded-full bg-white transition-all duration-300 ${
                  mobileMenuOpen
                    ? "-translate-y-[8px] -rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Reserved top space for the expanded floating navbar */}
      <div aria-hidden="true" className="h-[90px] shrink-0 sm:h-[96px] lg:h-[112px]" />

      {/* Mobile Navigation Card */}
      <div
        id="mobile-navigation"
        className={`fixed inset-x-2.5 top-[86px] z-50 overflow-hidden rounded-[26px] border border-white/15 bg-[#082d5c]/88 shadow-[0_30px_90px_rgba(2,18,43,0.38)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:inset-x-3 sm:top-[92px] lg:hidden ${
          mobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="p-4 sm:p-5">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {navigation.map((item, index) => {
              const active = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between rounded-[18px] px-4 py-4 transition-all duration-300 ${
                    active
                      ? "bg-[#d6eaff] text-[#082d5c]"
                      : "border border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.12]"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`text-[12px] font-semibold ${
                        active ? "text-[#104B9C]" : "text-white/40"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[22px] font-medium tracking-[-0.04em]">
                      {item.label}
                    </span>
                  </span>

                  <span className="text-[22px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="tel:+919325158710"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-5 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white/[0.14]"
            >
              Call 93251 58710
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-[#d6eaff] px-5 py-3.5 text-[15px] font-semibold text-[#082d5c] transition-all duration-300 hover:bg-white"
            >
              Request Workforce
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-[#03142d]/55 backdrop-blur-[3px] transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />
    </>
  );
}
