"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/motion/MotionEffects";

const assets = {
  hospital: "/images/industries/hospital-staff4.webp",
  hospital2: "/images/industries/hospital-staff5.webp",
  hotel: "/images/industries/hotel-staff4.webp",
  mall: "/images/industries/mall-staff4.webp",
  airport: "/images/industries/airport-staff4.webp", 
  airport2: "/images/industries/airport-staff5.webp",   
  workforce: "/images/industries/workforce-team.webp",
  manpower: "/images/industries/manpower-team.webp",
};

const industries = [
  {
    number: "01",
    title: "Hospitals & Healthcare",
    shortTitle: "Hospitals",
    image: assets.hospital2,
    label: "Hygiene-led workforce support",
    summary:
      "Professional healthcare staffing and hospital manpower services for environments where hygiene, patient sensitivity, punctuality, and disciplined conduct are essential every day.",
    description:
      "Hospitals, clinics, and diagnostic centres need dependable healthcare support staff who understand patient-sensitive environments, infection-control practices, structured reporting, and shift-based responsibilities. We coordinate role-specific hospital manpower based on department needs, working hours, service standards, and operational scope.",
    roles: [
      "Nursing assistants",
      "Ward boys",
      "Patient care attendants",
      "Hospital housekeeping teams",
      "Support workers",
      "Facility helpers",
    ],
    priorities: [
      "Hygiene and grooming",
      "Shift punctuality",
      "Patient-sensitive conduct",
      "Clear reporting responsibility",
    ],
    environments: [
      "Hospitals",
      "Clinics",
      "Diagnostic centres",
      "Rehabilitation and care facilities",
    ],
    accent: "Critical care support",
  },
  {
    number: "02",
    title: "Hotels & Hospitality",
    shortTitle: "Hotels",
    image: assets.hotel,
    label: "Guest-focused staffing",
    summary:
      "Hospitality staffing solutions for hotels, restaurants, resorts, banquets, kitchens, rooms, and guest-facing service operations.",
    description:
      "Hotels and hospitality businesses require well-groomed, service-oriented staff who can work consistently across busy shifts. We provide hospitality manpower for housekeeping, room operations, kitchens, banquets, guest service, and day-to-day hotel support.",
    roles: [
      "Room attendants",
      "Stewards",
      "Service staff",
      "Kitchen helpers",
      "Banquet staff",
      "Housekeeping workers",
    ],
    priorities: [
      "Professional grooming",
      "Guest service behaviour",
      "Shift flexibility",
      "Team coordination",
    ],
    environments: ["Hotels", "Restaurants", "Resorts", "Banquet facilities"],
    accent: "Guest experience support",
  },
  {
    number: "03",
    title: "Shopping Malls & Retail Spaces",
    shortTitle: "Shopping Malls",
    image: assets.mall,
    label: "High-footfall facility support",
    summary:
      "Shopping mall manpower and facility support for high-footfall retail environments where cleanliness, customer assistance, and operational continuity require constant attention.",
    description:
      "Shopping malls, multiplexes, and retail centres require coordinated housekeeping and support staff across public areas, washrooms, service zones, customer assistance points, and maintenance operations. Staffing is planned around footfall, operating hours, zones, and shift requirements.",
    roles: [
      "Housekeeping staff",
      "Customer assistance staff",
      "Facility helpers",
      "Maintenance support workers",
      "Cleaning attendants",
      "Operational support staff",
    ],
    priorities: [
      "Public-area cleanliness",
      "Customer assistance",
      "Zone-based deployment",
      "Peak-hour readiness",
    ],
    environments: [
      "Shopping malls",
      "Retail centres",
      "Multiplexes",
      "Commercial plazas",
    ],
    accent: "High-footfall readiness",
  },
  {
    number: "04",
    title: "Airports & Transit Facilities",
    shortTitle: "Airports",
    image: assets.airport2,
    label: "Disciplined transit support",
    summary:
      "Professionally coordinated airport and transit workforce support where punctuality, grooming, customer service, and process discipline are critical.",
    description:
      "Airports and transit facilities operate through strict schedules, defined processes, and continuous public interaction. We support workforce planning for housekeeping, passenger assistance, facility upkeep, operational support, and routine service functions.",
    roles: [
      "Facility support staff",
      "Customer assistance staff",
      "Housekeeping workers",
      "Operational helpers",
      "Cleaning attendants",
      "Support manpower",
    ],
    priorities: [
      "Strict punctuality",
      "Professional appearance",
      "Process discipline",
      "Continuous shift coverage",
    ],
    environments: [
      "Airports",
      "Transit terminals",
      "Travel lounges",
      "Service facilities",
    ],
    accent: "Time-critical operations",
  },
];

const industryStats = [
  { value: "04", label: "Core industries supported" },
  { value: "25+", label: "Workforce roles coordinated" },
  { value: "24/7", label: "Responsive workforce support" },
  { value: "01", label: "Dedicated coordination team" },
];

const operatingPriorities = [
  {
    number: "01",
    title: "Hygiene & Cleanliness",
    text: "Essential for hospitals, hotels, malls, and airports where hygiene standards directly affect safety and experience.",
  },
  {
    number: "02",
    title: "Discipline & Punctuality",
    text: "Structured reporting, attendance discipline, and dependable shift coverage help businesses maintain uninterrupted daily operations.",
  },
  {
    number: "03",
    title: "Grooming & Conduct",
    text: "Professional grooming, respectful conduct, and clear role responsibility improve customer, patient, guest, and employee experience.",
  },
  {
    number: "04",
    title: "Operational Continuity",
    text: "Quick replacement coordination and ongoing workforce support help businesses manage absenteeism, staffing gaps, and changing operational demand.",
  },
];

const coverageMatrix = [
  {
    role: "Housekeeping Staff",
    coverage: [true, true, true, true],
  },
  {
    role: "Hospital Support Staff",
    coverage: [true, false, false, true],
  },
  {
    role: "Nursing Staff",
    coverage: [true, false, false, false],
  },
  {
    role: "Hospitality Staff",
    coverage: [false, true, true, false],
  },
  {
    role: "Security Personnel",
    coverage: [true, true, true, true],
  },
  {
    role: "Office Support Staff",
    coverage: [false, false, true, true],
  },
];

const deploymentSteps = [
  {
    step: "01",
    title: "Understand the Environment",
    text: "We review the workplace type, operating hours, footfall, hygiene expectations, and service responsibilities.",
  },
  {
    step: "02",
    title: "Define the Workforce Mix",
    text: "The requirement is divided by role, quantity, shift, experience, reporting structure, and deployment duration.",
  },
  {
    step: "03",
    title: "Screen for Suitability",
    text: "Suitable staff are shortlisted according to the job profile, availability, basic experience, and workplace expectations.",
  },
  {
    step: "04",
    title: "Deploy & Coordinate",
    text: "Selected manpower is deployed with role clarity, reporting details, shift timing, and ongoing coordination support.",
  },
];

const serviceAdvantages = [
  "Industry-specific manpower planning",
  "Skilled and unskilled manpower",
  "Shift, site, and location coordination",
  "Candidate screening and verification",
  "Replacement support",
  "Dedicated client coordination",
];

const faqs = [
  {
    question:
      "Can Platinum provide manpower across multiple sites in Maharashtra?",
    answer:
      "Yes. Multi-location manpower requirements can be planned across Maharashtra based on the number of sites, workforce quantity, job roles, shift structure, operating conditions, and deployment schedule.",
  },
  {
    question: "Can staffing solutions be customised for our industry?",
    answer:
      "Yes. Every staffing plan is tailored to the working environment, role responsibilities, operating hours, service standards, workforce quantity, and manpower availability.",
  },
  {
    question: "Do you provide workforce for day, night, and rotational shifts?",
    answer:
      "Yes. Day, night, fixed, and rotational shift staffing can be coordinated for suitable roles, subject to location, workforce availability, site conditions, and agreed service scope.",
  },
  {
    question: "Can we request only housekeeping, facility, or support staff?",
    answer:
      "Yes. You may request a single workforce category or a combined staffing plan covering housekeeping, facility support, helpers, customer assistance, healthcare staffing, hospitality manpower, or operational roles.",
  },
  {
    question: "What details are needed to request manpower?",
    answer:
      "Share your industry, site location, required roles, workforce quantity, shift timings, preferred experience, expected joining date, and any specific workplace or compliance requirements.",
  },
];

function SectionHeading({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`max-w-[900px] text-[38px] font-light leading-[1.02] tracking-[-0.055em] sm:text-[44px] md:text-[54px] xl:text-[66px] ${
        light ? "text-white" : "text-black"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function SectionIntro({
  eyebrow,
  description,
  heading,
  light = false,
}: {
  eyebrow: ReactNode;
  description: string;
  heading: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.31fr_0.69fr] lg:gap-16 xl:gap-24">
      <div>
        <p
          className={`text-[13px] font-semibold uppercase tracking-[0.16em] ${
            light ? "text-[#d6eaff]" : "text-[#104B9C]"
          }`}
        >
          {eyebrow}
        </p>
        <p
          className={`mt-5 max-w-[320px] text-[16px] leading-[1.55] md:text-[17px] ${
            light ? "text-white/62" : "text-black/56"
          }`}
        >
          {description}
        </p>
      </div>

      <SectionHeading light={light}>{heading}</SectionHeading>
    </div>
  );
}

function ActionButton({
  children,
  href,
  light = false,
}: {
  children: ReactNode;
  href: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group mt-8 inline-flex items-center gap-4 rounded-[5px] px-5 py-3.5 text-[15px] font-semibold transition-all duration-300 ${
        light
          ? "bg-[#d6eaff] text-black hover:bg-white"
          : "bg-[#104B9C] text-white hover:bg-[#0b3b7c]"
      }`}
    >
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-white/15 last:border-b">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-8 py-7 text-left"
      >
        <span className="text-[18px] font-medium leading-[1.35] text-white transition-colors duration-300 hover:text-[#d6eaff] md:text-[21px]">
          {question}
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-[24px] font-light transition-all duration-300 ${
            open
              ? "rotate-45 border-white bg-white text-[#104B9C]"
              : "border-white/25 bg-white/5 text-white"
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[760px] pb-8 pr-10 text-[18px] leading-[1.5] text-white/68">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const selectedIndustry = industries[activeIndustry];

  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-[#082d5c] font-sans text-[#4f4f4f]">
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
        {/* Hero */}
        <section className="relative mx-2 overflow-hidden rounded-[26px] bg-[#D9EAFD] px-[6vw] pb-20 pt-[132px] text-white shadow-[0_32px_100px_rgba(2,18,43,0.32)] sm:mx-3 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:pb-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:30px_30px] opacity-20" />
          <div className="pointer-events-none absolute -right-40 -top-24 h-[620px] w-[620px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 top-20 h-[380px] w-[380px] rounded-full border border-white/10" />

          <div className="relative grid items-end gap-16 xl:grid-cols-[0.82fr_1.18fr] xl:gap-20">
            <div className="pb-4">
              <p className="mb-7 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                Industries We Serve
              </p>

              <h1 className="max-w-[760px] text-[46px] font-light leading-[0.98] tracking-[-0.06em] text-black sm:text-[56px] md:text-[68px] xl:text-[86px]">
                Workforce solutions built for industry operations.
              </h1>

              <p className="mt-9 max-w-[620px] text-[20px] leading-[1.42] text-black/65 md:text-[22px]">
                Reliable manpower, staffing, housekeeping, and facility support
                for hospitals, hotels, shopping malls, and airports across
                Maharashtra.
              </p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                <a
                  href="#industry-navigator"
                  className="mt-8 border-b border-black pb-1 text-[15px] font-semibold text-black transition-colors hover:border-white"
                >
                  Explore industries we support
                </a>
              </div>
            </div>

            <div className="grid min-h-[610px] grid-cols-2 gap-4 md:grid-cols-[0.78fr_1.22fr]">
              <div className="grid gap-4">
                <div className="relative min-h-[285px] overflow-hidden rounded-[10px] border border-white/15">
                  <img
                    src={assets.hospital}
                    alt="Hospital manpower support"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/90 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 text-[20px] font-medium text-white">
                    Healthcare
                  </p>
                </div>

                <div className="relative min-h-[285px] overflow-hidden rounded-[10px] border border-white/15 bg-[#d6eaff] p-7 text-black">
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(16,75,156,0.22)_1px,transparent_1px)] bg-[length:21px_21px] opacity-35" />
                  <div className="relative flex h-full flex-col justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#104B9C]/20 bg-white text-[20px] text-[#104B9C]">
                      ↳
                    </span>
                    <div>
                      <p className="text-[44px] font-light leading-none tracking-[-0.06em] text-[#104B9C]">
                        4 Industries
                      </p>
                      <p className="mt-3 max-w-[260px] text-[16px] leading-[1.38] text-black/60">
                        One dependable manpower partner for diverse business and
                        operational environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative min-h-[610px] overflow-hidden rounded-[10px] border border-white/15">
                <img
                  src={assets.airport}
                  alt="Professional industry workforce"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/92 via-[#104B9C]/12 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                    Industry-Focused Staffing
                  </p>
                  <p className="mt-4 max-w-[490px] text-[30px] font-light leading-[1.05] tracking-[-0.045em] text-white md:text-[42px]">
                    Different industries. Different workforce needs. One
                    dependable staffing process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mx-2 mb-3 mt-3 overflow-hidden rounded-[26px] border-b border-black/10 bg-[#D9EAFD] px-[6vw] shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 sm:mt-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw]">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4">
            {industryStats.map((item, index) => (
              <article
                key={item.label}
                className={`py-9 sm:px-7 xl:py-11 ${
                  index !== industryStats.length - 1 ? "xl:border-r" : ""
                } border-[#104B9C]/12 first:pl-0 last:pr-0`}
              >
                <p className="text-[40px] font-light leading-none tracking-[-0.06em] text-[#104B9C] md:text-[50px]">
                  {item.value}
                </p>
                <p className="mt-3 text-[15px] font-medium text-black/58">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Industry Navigator */}
        <section
          id="industry-navigator"
          className="relative mx-2 mb-3 scroll-mt-28 overflow-hidden rounded-[26px] bg-white px-[6vw] py-20 shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-24"
        >
          <SectionIntro
  eyebrow={<span className="text-[24px]">Industry Navigator</span>}
  description="Select an industry to explore workforce roles, staffing priorities, and suitable operating environments."
  heading={
    <>
      Manpower services planned around how your industry actually operates.
    </>
  }
/>

          <div className="mt-20 overflow-hidden rounded-[12px] border border-[#104B9C]/15 bg-[#f7fbff] shadow-[0_30px_90px_rgba(16,75,156,0.10)]">
            <div className="grid border-b border-[#104B9C]/12 sm:grid-cols-2 xl:grid-cols-4">
              {industries.map((industry, index) => {
                const isActive = activeIndustry === index;

                return (
                  <button
                    key={industry.title}
                    type="button"
                    onClick={() => setActiveIndustry(index)}
                    className={`group flex min-h-[110px] items-center justify-between gap-4 border-b border-r border-[#104B9C]/12 px-5 py-5 text-left transition-all duration-300 sm:last:border-b-0 xl:border-b-0 ${
                      isActive
                        ? "bg-[#104B9C] text-white"
                        : "bg-white text-black hover:bg-[#eaf2fb]"
                    }`}
                  >
                    <div>
                      <span
                        className={`text-[12px] font-semibold uppercase tracking-[0.14em] ${
                          isActive ? "text-[#d6eaff]" : "text-[#104B9C]"
                        }`}
                      >
                        {industry.number}
                      </span>
                      <p className="mt-2 text-[17px] font-medium leading-[1.12]">
                        {industry.shortTitle}
                      </p>
                    </div>

                    <span
                      className={`text-[20px] transition-transform duration-300 ${
                        isActive ? "translate-x-1" : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="grid min-h-[760px] xl:grid-cols-[0.96fr_1.04fr]">
              <div className="relative min-h-[520px] overflow-hidden bg-[#104B9C] xl:min-h-full">
                <img
                  key={selectedIndustry.image}
                  src={selectedIndustry.image}
                  alt={`${selectedIndustry.title} manpower support`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/94 via-[#104B9C]/18 to-transparent" />

                <div className="absolute left-7 top-7 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  {selectedIndustry.accent}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-11">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                    {selectedIndustry.label}
                  </p>
                  <h3 className="mt-4 max-w-[620px] text-[44px] font-light leading-[0.96] tracking-[-0.06em] md:text-[62px]">
                    {selectedIndustry.title}
                  </h3>
                  <p className="mt-6 max-w-[600px] text-[19px] leading-[1.42] text-white/75">
                    {selectedIndustry.summary}
                  </p>
                </div>
              </div>

              <div className="bg-white p-7 md:p-10 xl:p-12">
                <div className="flex items-center gap-5">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#104B9C]">
                    Sector {selectedIndustry.number}
                  </span>
                  <span className="h-px flex-1 bg-[#104B9C]/15" />
                </div>

                <p className="mt-8 text-[19px] leading-[1.48] text-black/65">
                  {selectedIndustry.description}
                </p>

                <div className="mt-10 grid gap-9 md:grid-cols-2">
                  <div>
                    <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                      Workforce Roles
                    </p>
                    <ul className="space-y-3">
                      {selectedIndustry.roles.map((role) => (
                        <li
                          key={role}
                          className="flex items-start gap-3 text-[16px] leading-[1.36] text-black/72"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#104B9C]" />
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                      Operating Priorities
                    </p>
                    <ul className="space-y-3">
                      {selectedIndustry.priorities.map((priority) => (
                        <li
                          key={priority}
                          className="flex items-start gap-3 text-[16px] leading-[1.36] text-black/72"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#104B9C]" />
                          <span>{priority}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 border-t border-black/10 pt-8">
                  <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                    Suitable Environments
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedIndustry.environments.map((environment) => (
                      <span
                        key={environment}
                        className="rounded-full border border-[#104B9C]/18 bg-[#f2f7fd] px-4 py-2 text-[14px] font-medium text-[#104B9C]"
                      >
                        {environment}
                      </span>
                    ))}
                  </div>
                </div>

                <ActionButton href="/contact">
                  Request {selectedIndustry.shortTitle} Staff
                </ActionButton>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Priorities */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#eef2f5] px-[6vw] py-24 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-24">
          <SectionIntro
  eyebrow={<span className="text-[24px]">Operational Priorities</span>}
  description="Every industry has different responsibilities, but smooth operations consistently depend on hygiene, discipline, professional conduct, attendance, and reliable workforce availability."
  heading={
    <>
      Reliable operations begin with workforce that understands the
      environment.
    </>
  }
/>

          <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {operatingPriorities.map((item, index) => (
              <article
                key={item.number}
                className={`group min-h-[340px] rounded-[9px] border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  index === 1 || index === 3
                    ? "border-[#104B9C] bg-[#104B9C] text-white"
                    : "border-[#104B9C]/12 bg-white text-black"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[13px] font-semibold ${
                      index === 1 || index === 3
                        ? "text-[#d6eaff]"
                        : "text-[#104B9C]"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      index === 1 || index === 3
                        ? "bg-[#d6eaff]"
                        : "bg-[#104B9C]"
                    }`}
                  />
                </div>

                <div className="mt-24">
                  <h3 className="text-[28px] font-light leading-[1.08] md:text-[30px] tracking-[-0.05em]">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-7 text-[16px] leading-[1.55] ${
                      index === 1 || index === 3
                        ? "text-white/70"
                        : "text-black/58"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Coverage Matrix */}
<section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[6vw] py-24 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-24">
  <SectionIntro
    eyebrow={<span className="text-[24px]">Workforce Coverage</span>}
    description="A practical overview of common manpower and facility support categories available across the industries we serve."
    heading={
      <>
        One workforce partner for multiple industries and operational roles.
      </>
    }
  />

  <div className="mt-20 overflow-x-auto rounded-[10px] border border-[#104B9C]/15 bg-[#f7fbff]">
    <div className="min-w-[980px]">
      {/* Table Header */}
      <div className="grid grid-cols-[1.5fr_repeat(4,1fr)] bg-[#104B9C] text-white">
        <div className="p-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#d6eaff]">
          Workforce Category
        </div>

        {industries.map((industry) => (
          <div
            key={industry.shortTitle}
            className="border-l border-white/15 p-5 text-center text-[14px] font-semibold"
          >
            {industry.shortTitle}
          </div>
        ))}
      </div>

      {/* Table Rows */}
      {coverageMatrix.map((row, rowIndex) => (
        <div
          key={row.role}
          className={`grid grid-cols-[1.5fr_repeat(4,1fr)] border-b border-[#104B9C]/10 last:border-b-0 ${
            rowIndex % 2 === 0 ? "bg-white" : "bg-[#eef5fc]"
          }`}
        >
          <div className="flex items-center p-5 text-[16px] font-medium text-black">
            {row.role}
          </div>

          {row.coverage.map((available, index) => {
            const isAvailable = available === true;

            return (
              <div
                key={`${row.role}-${industries[index]?.shortTitle || index}`}
                className="flex items-center justify-center border-l border-[#104B9C]/10 p-5"
              >
                <span
                  title={isAvailable ? "Available" : "Not available"}
                  aria-label={isAvailable ? "Available" : "Not available"}
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    isAvailable
                      ? "bg-[#104B9C] text-white"
                      : "border border-black/10 bg-white text-black/25"
                  }`}
                >
                  {isAvailable ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5l4.2 4.2L19 7"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 12h12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  </div>

  <p className="mt-5 text-[14px] leading-[1.4] text-black/45">
    Workforce availability and exact role coverage are confirmed after
    reviewing the site, location, shift, quantity, and service scope.
  </p>
</section>

        {/* Visual Break */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[6vw] py-16 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-20">
          <div className="grid overflow-hidden rounded-[12px] border border-white/15 lg:grid-cols-[0.58fr_0.42fr]">
            <div className="relative min-h-[500px] overflow-hidden">
              <img
                src={assets.workforce}
                alt="Platinum workforce for different industries"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#104B9C]/35" />
            </div>

            <div className="relative flex min-h-[500px] flex-col justify-center bg-[#0d438d] p-8 md:p-12 xl:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[length:24px_24px] opacity-20" />
              <div className="relative">
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                  Flexible Across Industries
                </p>
                <h2 className="mt-6 text-[38px] font-light leading-[1.02] tracking-[-0.055em] sm:text-[44px] md:text-[54px]">
                  Your workforce plan should match your workplace.
                </h2>
                <p className="mt-8 text-[19px] leading-[1.45] text-white/70">
                  Workforce quantity, role profile, experience, grooming, shift
                  timing, site conditions, and supervision requirements are
                  aligned with the actual operating environment rather than
                  applying one standard staffing model to every business.
                </p>
                <ActionButton href="/contact" light>
                  Build Your Workforce Plan
                </ActionButton>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Process */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#D9EAFD] px-[6vw] py-24 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-24">
          <SectionIntro
  eyebrow={<span className="text-[24px]">Industry Deployment</span>}
  description="We first understand the workplace, role expectations, shifts, and operating conditions, then define the workforce mix and deployment structure required for dependable daily support."
  heading="A workforce deployment process built around site reality."
/>

          <div className="mt-16 space-y-5 lg:ml-[31%] lg:pl-16 xl:mt-20 xl:pl-24">
            {deploymentSteps.map((item, index) => (
              <article
                key={item.step}
                className="group grid gap-7 rounded-[9px] border border-[#104B9C]/12 bg-white p-7 transition-all duration-300 hover:-translate-x-2 hover:shadow-[0_24px_70px_rgba(16,75,156,0.12)] md:grid-cols-[0.14fr_0.34fr_0.52fr] md:items-start md:p-9"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#104B9C] text-[13px] font-bold text-white">
                  {item.step}
                </span>
                <h3 className="text-[28px] font-light leading-[1.05] tracking-[-0.045em] text-black transition-colors group-hover:text-[#104B9C] md:text-[32px]">
                  {item.title}
                </h3>
                <p className="text-[17px] leading-[1.46] text-black/58">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[6vw] py-24 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-24">
          <div className="grid items-center gap-16 lg:grid-cols-[0.56fr_0.44fr] lg:gap-20">
            <div>
              <p className="text-[24px] font-semibold uppercase tracking-[0.16em] text-[#104B9C]">
                Why Platinum
              </p>
              <SectionHeading className="mt-6 max-w-[760px]">
                Industry-focused manpower backed by practical coordination.
              </SectionHeading>

              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                {serviceAdvantages.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-[7px] border border-[#104B9C]/12 bg-[#f7fbff] p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#104B9C] text-[12px] font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] font-medium text-black/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <ActionButton href="/services">Explore Our Services</ActionButton>
            </div>

            <div className="relative min-h-[650px] overflow-hidden rounded-[10px] bg-[#104B9C] shadow-[0_35px_100px_rgba(16,75,156,0.18)]">
              <img
                src={assets.manpower}
                alt="Platinum manpower coordination team"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/92 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                  Managed Support
                </p>
                <p className="mt-4 text-[31px] font-light leading-[1.06] tracking-[-0.045em]">
                  One dedicated team to coordinate staffing requirements across
                  multiple roles, shifts, and locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[6vw] py-24 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-24">
          <div>
            <SectionIntro
  eyebrow={<span className="text-[24px]">Industry Questions</span>}
  description="Key information to review before planning manpower, housekeeping, staffing, or facility support for your workplace."
  heading="Frequently asked questions."
  light
/>

            <div className="mt-14 lg:ml-[31%] lg:pl-16 xl:pl-24">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#D9EAFD] px-[6vw] py-24 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-24">
          <div className="pointer-events-none absolute -bottom-56 -right-32 h-[620px] w-[620px] rounded-full border border-[#104B9C]/10" />
          <div className="pointer-events-none absolute -bottom-24 right-20 h-[380px] w-[380px] rounded-full border border-[#104B9C]/10" />

          <div className="relative grid items-center gap-16 lg:grid-cols-[0.64fr_0.36fr] lg:gap-20">
            <div>
              <p className="mb-6 text-[20px] font-semibold uppercase tracking-[0.16em] text-[#104B9C]">
                Plan Your Industry Workforce Requirement
              </p>
              <SectionHeading className="max-w-[900px]">
                Share your industry, location, required roles, shift timings,
                and workforce quantity.
              </SectionHeading>

              <p className="mt-8 max-w-[670px] text-[20px] leading-[1.45] text-black/60">
                Platinum Manpower & Facility Management Services will review
                your requirement and help plan a practical staffing solution for
                dependable operations across Maharashtra.
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-2">
                <ActionButton href="/contact">Request Workforce</ActionButton>

                <a
                  href="tel:+919325158710"
                  className="mt-8 inline-flex items-center border-b border-black/30 pb-1 text-[15px] font-semibold text-black transition-colors hover:border-[#104B9C] hover:text-[#104B9C]"
                >
                  Call 93251 58710
                </a>
              </div>
            </div>

            <div className="rounded-[10px] border border-[#104B9C]/15 bg-white p-8 shadow-[0_25px_80px_rgba(16,75,156,0.12)] md:p-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#104B9C]">
                Requirement Checklist
              </p>
              <div className="mt-8 space-y-5">
                {[
                  "Industry and workplace type",
                  "Site location",
                  "Required workforce roles",
                  "Number of staff",
                  "Shift timing",
                  "Expected joining date",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-black/10 pb-5 last:border-b-0 last:pb-0"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#104B9C] text-[12px] font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[17px] font-medium text-black/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
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
