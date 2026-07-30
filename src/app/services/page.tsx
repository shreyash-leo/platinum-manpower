"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/motion/MotionEffects";

const assets = {
  professional: "/images/services/professional-workforce.webp",
  image1: "/images/services/image-1.webp",
  image2: "/images/services/image-2.webp",
  Healthcare: "/images/services/Healthcare.webp",
  hotel: "/images/services/hospitality-staff.webp",
  mall: "/images/services/mall-staff.webp",
  office: "/images/services/office-staff.webp",
  hospital2: "/images/services/hospital-staff3.webp",
  airport: "/images/services/airport-staff.webp",
  contactTeam: "/images/contact-team.webp",
  workflow: "/images/services/workflow.webp",
  housekeeping: "/images/services/housekeeping-staff.webp",
  hospital_staff: "/images/services/Hospital-staff.webp",
  commercial: "/images/services/commercial-staff.webp",
  contact: "/images/services/contact-team2.webp",
};

const services = [
  {
    number: "01",
    shortTitle: "Skilled Manpower",
    title: "Skilled Workforce Solutions",
    image: assets.image1,
    eyebrow: "Service 01",
    intro: "Professionally managed manpower for technical, operational, and role-specific business requirements.",
    description: "We assess every requirement carefully, including role type, workplace environment, shift schedules, experience level, and workforce quantity, to ensure dependable staffing aligned with your operational needs.",
    roles: ["Machine Operators", "Technicians", "Supervisors", "Administrative Staff", "Facility Support Teams", "Skilled Operational Workers"],
    support: ["Requirement-Based Workforce Selection", "Candidate Screening & Verification", "Fast Deployment Coordination", "Replacement Support", "Ongoing Workforce Assistance"],
    idealFor: "Hospitals, Hotels, Corporate Offices, Commercial Facilities, Industrial Operations, Warehouses, and Managed Service Environments.",
  },
  {
    number: "02",
    shortTitle: "Unskilled Manpower",
    title: "Unskilled Workforce Solutions",
    image: assets.image2,
    eyebrow: "Service 02",
    intro: "Reliable manpower support for routine operations, daily workforce requirements, and operational assistance.",
    description: "We carefully assess staffing needs, shift timing, workload expectations, and workplace conditions to provide dependable manpower for uninterrupted business operations.",
    roles: ["Helpers & General Workers", "Loading & Unloading Staff", "Packing & Warehouse Staff", "Office Boys & Pantry Staff", "Housekeeping Assistants", "Maintenance Helpers", "Facility Support Staff", "Operational Workforce"],
    support: ["Requirement-Based Workforce Selection", "Workforce Screening & Verification", "Fast Deployment Coordination", "Replacement Support", "Flexible Shift Staffing"],
    idealFor: "Commercial Spaces, Warehouses, Manufacturing Units, Offices, Retail Businesses, Logistics, Shopping Malls, and Industrial Operations.",
  },
  {
    number: "03",
    shortTitle: "Healthcare Staffing",
    title: "Healthcare Staffing Solutions",
    image: assets.Healthcare  ,
    eyebrow: "Service 03",
    intro: "Professional healthcare workforce support for hospitals, clinics, diagnostic centres, and patient-care environments.",
    description: "We help healthcare institutions maintain operational continuity with trained support staff tailored to role-specific requirements where discipline, hygiene, and reliability are essential.",
    roles: ["Ward Boys & Ward Assistants", "Patient Care Support Staff", "Hospital Housekeeping Staff", "Nursing Assistants", "Front Desk & Reception Staff", "Sanitization Teams", "Hospital Support Personnel"],
    support: ["Healthcare Workforce Coordination", "Role-Based Candidate Selection", "Workplace Discipline & Hygiene Guidance", "Replacement Support", "Shift-Based Staffing Availability"],
    idealFor: "Hospitals, Clinics, Diagnostic Centres, Rehabilitation Centres, Healthcare Facilities, and Medical Institutions.",
  },
  {
    number: "04",
    shortTitle: "Hospitality Staffing",
    title: "Hospitality Staffing Solutions",
    image: assets.hotel,
    eyebrow: "Service 04",
    intro: "Professional staffing for hotels, restaurants, resorts, guest services, and customer-focused environments.",
    description: "We provide hospitality workforce support designed to maintain smooth guest experiences, service quality, and consistent day-to-day operations.",
    roles: ["Housekeeping Staff", "Room Attendants", "Kitchen Helpers", "Stewarding Staff", "Waiters & Service Staff", "Front Office Executives", "Guest Relations Support"],
    support: ["Hospitality Workforce Planning", "Requirement-Based Candidate Selection", "Shift & Event Staffing Support", "Replacement Assistance", "Operational Workforce Coordination"],
    idealFor: "Hotels, Restaurants, Resorts, Banquet Halls, Event Venues, Hospitality Businesses, and Guest-Service Operations.",
  },
  {
    number: "05",
    shortTitle: "Housekeeping Services",
    title: "Housekeeping & Facility Support",
    image: assets.housekeeping,
    eyebrow: "Service 05",
    intro: "Reliable housekeeping and facility workforce solutions for clean, organized, and efficient workplaces.",
    description: "We provide trained housekeeping staff and support personnel to maintain cleanliness, hygiene, workplace standards, and smooth daily operations across commercial and institutional environments.",
    roles: ["Housekeeping Staff", "Cleaning Personnel", "Janitorial Staff", "Office Maintenance Staff", "Washroom Attendants", "Facility Helpers", "Waste Management Support"],
    support: ["Professional Housekeeping Staffing", "Shift-Based Workforce Deployment", "Replacement Support", "Workplace Hygiene Standards", "Ongoing Workforce Coordination"],
    idealFor: "Corporate Offices, Hospitals, Hotels, Shopping Malls, Educational Institutions, Commercial Buildings, and Industrial Facilities.",
  },
];

const highlights = [
  { value: "08+", label: "Core Workforce & Business Services" },
  { value: "12+", label: "Industries Supported Across Maharashtra" },
  { value: "01", label: "Dedicated Client Coordination Team" },
  { value: "24/7", label: "Responsive Workforce Support" },
];

const process = [
  { step: "01", title: "Requirement Discussion", text: "We understand the role type, staffing quantity, shift structure, location, experience level, and operational expectations." },
  { step: "02", title: "Candidate Screening", text: "Suitable candidates are reviewed for role fit, experience, availability, workplace suitability, and operational readiness." },
  { step: "03", title: "Shortlisting & Approval", text: "Relevant candidate profiles are coordinated for client review and approval before final selection and deployment planning." },
  { step: "04", title: "Workforce Deployment", text: "Selected manpower is assigned with clear guidance on responsibilities, reporting structure, shift timing, and workplace standards." },
  { step: "05", title: "Ongoing Coordination", text: "Support continues through attendance coordination, replacement assistance, workforce communication, and operational support." },
];

const standards = [
  { number: "01", title: "Verified Workforce", text: "Candidates undergo basic profile verification, identity checks, and suitability screening before deployment." },
  { number: "02", title: "Professional Workplace Standards", text: "Staff are guided on reporting discipline, conduct, grooming, hygiene, professionalism, and role responsibilities." },
  { number: "03", title: "Flexible Staffing Solutions", text: "Workforce support tailored for recurring, shift-based, project-specific, temporary, and long-term requirements." },
  { number: "04", title: "Quick Replacement Support", text: "Fast replacement coordination helps maintain operational continuity and minimize disruption caused by staff shortages." },
  { number: "05", title: "Dedicated Client Coordination", text: "A single point of contact supports staffing updates, attendance coordination, workforce concerns, and ongoing assistance." },
  { number: "06", title: "Transparent Service Planning", text: "Practical workforce planning aligned with staffing category, workplace environment, deployment scope, and business needs." },
];

const industries = [
  { title: "Hospitals", image: assets.hospital2, text: "Healthcare staffing, housekeeping, patient support, and facility workforce for disciplined, hygiene-focused environments." },
  { title: "Hotels", image: assets.hotel, text: "Housekeeping, room attendants, kitchen support, and hospitality workforce for smooth guest experiences." },
  { title: "Shopping Malls", image: assets.mall, text: "Housekeeping, customer assistance, facility support, and maintenance workforce for high-footfall environments." },
  { title: "Airports", image: assets.airport, text: "Operational staff, facility support, customer assistance, and managed workforce for fast-paced environments." },
  { title: "Offices", image: assets.office, text: "Pantry staff, office support, housekeeping, and administrative workforce for professional workspaces." },
  { title: "Commercial Spaces", image: assets.commercial, text: "Scalable housekeeping, operational staff, maintenance support, and flexible manpower for daily continuity." },
];

const faqs = [
  { question: "Can we request workforce for specific shifts?", answer: "Yes. We provide staffing support for fixed, rotational, day, night, and customized shift structures based on your operational requirements." },
  { question: "Do you provide both skilled and unskilled manpower?", answer: "Yes. We supply skilled and unskilled workforce solutions across healthcare, hospitality, corporate, commercial, retail, and industrial operations." },
  { question: "Is replacement support included?", answer: "Yes. We provide quick replacement coordination to help maintain operational continuity whenever workforce availability is affected." },
  { question: "Which locations and industries do you support?", answer: "We provide manpower, staffing, HR outsourcing, payroll, and facility management services across Maharashtra for hospitals, hotels, offices, retail businesses, industrial operations, and commercial spaces." },
  { question: "How do we get started?", answer: "Share your workforce requirement, staffing quantity, location, shift timing, and role details. Our team will help plan the right staffing solution for your business." },
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
      className={`text-[42px] font-light leading-[0.98] tracking-[-0.065em] md:text-[58px] xl:text-[76px] ${
        light ? "text-white" : "text-black"
      } ${className}`}
    >
      {children}
    </h2>
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

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-black/10 last:border-b">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-8 py-7 text-left"
      >
        <span className="text-[19px] font-medium text-black transition-colors duration-300 hover:text-[#104B9C] md:text-[21px]">
          {question}
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#104B9C]/20 text-[24px] font-light text-[#104B9C] transition-all duration-300 ${
            open ? "rotate-45 bg-[#104B9C] text-white" : "bg-[#f7fbff]"
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
          <p className="max-w-[760px] pb-8 pr-12 text-[18px] leading-[1.5] text-[#555]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const selectedService = services[activeService];

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
      <section className="relative mx-2 overflow-hidden rounded-[26px] bg-[#D9EAFD] px-[6vw] pb-16 pt-[132px] shadow-[0_32px_100px_rgba(2,18,43,0.32)] sm:mx-3 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:pb-24">
        <div className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full border border-[#104B9C]/10" />
        <div className="pointer-events-none absolute -left-4 top-48 h-44 w-44 rounded-full border border-[#104B9C]/10" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(16,75,156,0.12)_1px,transparent_1px)] bg-[length:28px_28px] opacity-35" />

        <div className="relative grid items-end gap-16 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="pb-4">
            <p className="mb-7 text-[20px] font-semibold uppercase tracking-[0.16em] text-[#104B9C]">
              Platinum Manpower & Facility Management Services
            </p>

            <h1 className="max-w-[760px] text-[50px] font-light leading-[0.94] tracking-[-0.068em] text-black md:text-[72px] xl:text-[96px]">
              Workforce solutions built for real business operations.
            </h1>

            <p className="mt-9 max-w-[640px] text-[20px] leading-[1.42] text-black/65 md:text-[22px]">
              Trusted manpower, staffing, facility management, payroll, and HR solutions tailored to support businesses across Maharashtra with dependable workforce coordination and operational efficiency.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <ActionButton href="/contact">Request Workforce</ActionButton>

              <a
                href="#service-explorer"
                className="mt-8 border-b border-black/30 pb-1 text-[15px] font-semibold text-black transition-colors hover:border-[#104B9C] hover:text-[#104B9C]"
              >
                Explore all services
              </a>
            </div>
          </div>

          <div className="grid min-h-[600px] gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <div className="group relative min-h-[520px] overflow-hidden rounded-[10px] bg-[#104B9C] md:min-h-[600px]">
              <img
                src={assets.professional}
                alt="Platinum professional workforce"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                  Managed Workforce
                </p>
                <p className="mt-3 max-w-[420px] text-[28px] font-light leading-[1.05] tracking-[-0.045em] md:text-[38px]">
                  The right workforce, prepared for the right responsibility.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="relative min-h-[250px] overflow-hidden rounded-[10px]">
                <img
                  src={assets.Healthcare}
                  alt="Healthcare support staff"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#104B9C]/85 to-transparent" />
                <p className="absolute bottom-5 left-5 text-[20px] font-medium text-white">
                  Healthcare
                </p>
              </div>

              <div className="relative min-h-[250px] overflow-hidden rounded-[10px] bg-[#104B9C] p-7 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[length:20px_20px] opacity-25" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-[20px]">
                    ↳
                  </span>
                  <div>
                    <p className="text-[42px] font-light leading-none tracking-[-0.06em]">
                      Trusted
                    </p>
                    <p className="mt-3 text-[16px] leading-[1.35] text-white/70">
                      Workforce screening, deployment, replacement support, and ongoing coordination designed for reliable daily operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Strip */}
      <section className="mx-2 mb-3 mt-3 overflow-hidden rounded-[26px] border-y border-black/10 bg-white px-[6vw] shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 sm:mt-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw]">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <article
              key={item.label}
              className={`py-9 sm:px-7 xl:py-11 ${
                index !== highlights.length - 1 ? "xl:border-r" : ""
              } border-black/10 first:pl-0 last:pr-0`}
            >
              <p className="text-[38px] font-light leading-none tracking-[-0.06em] text-[#104B9C] md:text-[48px]">
                {item.value}
              </p>
              <p className="mt-3 text-[15px] font-medium text-black/60">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Service Explorer */}
      <section
        id="service-explorer"
        className="relative mx-2 mb-3 scroll-mt-28 overflow-hidden rounded-[26px] bg-[#f4f7fa] px-[6vw] py-16 shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-20"
      >
        <div className="grid gap-16 lg:grid-cols-[0.32fr_0.68fr] lg:gap-24">
          <div>
            <p className="font-semibold text-[26px] text-[#104B9C]">Service Explorer</p>
          </div>

          <SectionHeading>
            Workforce and business solutions designed around your operational needs.
          </SectionHeading>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[12px] border border-[#104B9C]/15 bg-white shadow-[0_30px_90px_rgba(16,75,156,0.10)] xl:grid-cols-[0.36fr_0.64fr]">
          <div className="border-b border-black/10 bg-[#eaf2fb] xl:border-b-0 xl:border-r">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveService(index)}
                  className={`group flex w-full items-center gap-5 border-b border-[#104B9C]/10 px-6 py-6 text-left transition-all duration-300 last:border-b-0 md:px-8 ${
                    isActive
                      ? "bg-[#104B9C] text-white"
                      : "text-black hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-[13px] font-semibold transition-all ${
                      isActive
                        ? "border-white/25 bg-white text-[#104B9C]"
                        : "border-[#104B9C]/20 bg-white text-[#104B9C]"
                    }`}
                  >
                    {service.number}
                  </span>

                  <span className="flex-1 text-[20px] font-medium leading-[1.1] tracking-[-0.025em] md:text-[23px]">
                    {service.shortTitle}
                  </span>

                  <span
                    className={`text-[24px] transition-transform duration-300 ${
                      isActive ? "translate-x-1" : "group-hover:translate-x-1"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
            <div className="mt-9 rounded-[6px] border border-[#104B9C]/15 bg-[#f7fbff] p-5">
  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
    Suitable For
  </p>
  <p className="mt-2 text-[16px] font-medium leading-[1.4] text-black">
    {selectedService.idealFor}
  </p>
</div>
<div className="mt-6 flex items-center justify-center">
<ActionButton href="/contact">Enquire for This Service</ActionButton>
</div>
          </div>

          <div className="grid min-h-[620px] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-[#104B9C] lg:min-h-full">
              <img
                key={selectedService.image}
                src={selectedService.image}
                alt={selectedService.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/90 via-[#104B9C]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#d6eaff]">
                  {selectedService.eyebrow}
                </p>
                <p className="mt-4 text-[26px] font-light leading-[1.15] tracking-[-0.035em] text-white/90">
                  {selectedService.intro}
                </p>
              </div>
            </div>

           <div className="p-6 md:p-8 xl:p-10"> 
              <div className="flex items-center justify-between gap-6">
                <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#104B9C]">
                  Service {selectedService.number}
                </span>
                <span className="h-px flex-1 bg-[#104B9C]/15" />
              </div>

              <h3 className="mt-8 text-[40px] font-light leading-[0.98] tracking-[-0.058em] text-black md:text-[40px]">
                {selectedService.title}
              </h3>

              <p className="mt-7 text-[18px] leading-[1.48] text-[#555]">
                {selectedService.description}
              </p>

              <div className="mt-9 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                    Roles We Support
                  </p>
                  <ul className="space-y-3">
                    {selectedService.roles.map((role) => (
                      <li
                        key={role}
                        className="flex items-start gap-3 text-[16px] leading-[1.35] text-black/75"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#104B9C]" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                    Service Support
                  </p>
                  <ul className="space-y-3">
                    {selectedService.support.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[16px] leading-[1.35] text-black/75"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d6eaff] text-[11px] font-bold text-[#104B9C]">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[6vw] py-24 shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">
          <div>
            <p className="font-semibold text-[26px] text-[#104B9C]">
              Service Coverage
              <br />
              Flexible Workforce Options
            </p>
          </div>

          <div>
            <SectionHeading>
              Workforce support designed around your operations.
            </SectionHeading>
            <p className="mt-8 max-w-[720px] text-[20px] leading-[1.45] text-[#555]">
              Every business operates differently. We align workforce planning with your role requirements, shift structures, site conditions, and operational workload, delivering staffing support that adapts to how your business actually runs.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          <article className="group relative min-h-[520px] overflow-hidden rounded-[9px] bg-[#104B9C] lg:col-span-2">
            <img
              src={assets.contact}
              alt="Contract workforce support"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/95 via-[#104B9C]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#d6eaff]">
                Ongoing Workforce
              </p>
              <h3 className="mt-4 max-w-[680px] text-[42px] font-light leading-[0.98] tracking-[-0.055em] md:text-[58px]">
                Contract & recurring workforce support
              </h3>
              <p className="mt-6 max-w-[620px] text-[18px] leading-[1.42] text-white/75">
                Reliable staffing solutions for businesses that require consistent workforce availability across regular operations, recurring shifts, and long-term staffing requirements.
              </p>
            </div>
          </article>

          <article className="flex min-h-[520px] flex-col justify-between rounded-[9px] bg-[#d6eaff] p-8 text-black md:p-10">
            <div className="flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#104B9C] text-[18px] font-semibold text-white">
                01
              </span>
              <span className="text-[28px] text-[#104B9C]">↗</span>
            </div>

            <div>
              <h3 className="text-[38px] font-light leading-[1] tracking-[-0.055em] md:text-[48px]">
                Temporary staffing
              </h3>
              <p className="mt-6 text-[18px] leading-[1.45] text-black/65">
                Flexible manpower support for workload peaks, seasonal demand, urgent requirements, short-term projects, and event-based staffing needs.
              </p>
            </div>
          </article>

          <article className="flex min-h-[420px] flex-col justify-between rounded-[9px] border border-[#104B9C]/15 bg-[#f7fbff] p-8 md:p-10">
            <div className="flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#104B9C]/20 text-[18px] font-semibold text-[#104B9C]">
                02
              </span>
              <span className="text-[28px] text-[#104B9C]">↗</span>
            </div>

            <div>
              <h3 className="text-[38px] font-light leading-[1] tracking-[-0.055em] text-black md:text-[48px]">
                Shift-based support
              </h3>
              <p className="mt-6 text-[18px] leading-[1.45] text-black/60">
                Smart workforce planning for fixed, rotational, day, night, and operation-specific shift structures to ensure smooth daily operations.
              </p>
            </div>
          </article>

          <article className="group relative min-h-[420px] overflow-hidden rounded-[9px] bg-[#104B9C] lg:col-span-2">
            <img
              src={assets.workflow}
              alt="Workforce coordination team"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b38]/95 via-[#104B9C]/65 to-transparent" />
            <div className="relative flex min-h-[420px] max-w-[620px] flex-col justify-end p-8 text-white md:p-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#d6eaff]">
                Managed Coordination
              </p>
              <h3 className="mt-4 text-[42px] font-light leading-[0.98] tracking-[-0.055em] md:text-[58px]">
                One dedicated team for workforce coordination.
              </h3>
              <p className="mt-6 text-[18px] leading-[1.42] text-white/75">
                A streamlined communication process for staffing updates, attendance concerns, replacement requests, deployment coordination, and ongoing workforce support.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[6vw] py-24 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.32fr_0.68fr] lg:gap-24">
          <p className="font-semibold text-[26px] text-[#d6eaff]">
            Our Deployment Process
          </p>

          <SectionHeading light>
            A seamless path from workforce request to operational support.
          </SectionHeading>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-7 hidden border-t border-dashed border-white/25 xl:block" />

          <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {process.map((item, index) => (
              <article
                key={item.step}
                className={`rounded-[8px] border p-7 transition-all duration-300 hover:-translate-y-2 ${
                  index % 2 === 0
                    ? "border-white/15 bg-white text-black"
                    : "border-white/20 bg-white/10 text-white backdrop-blur-sm"
                }`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-[14px] font-bold ${
                    index % 2 === 0
                      ? "bg-[#104B9C] text-white"
                      : "bg-[#d6eaff] text-black"
                  }`}
                >
                  {item.step}
                </span>

                <h3 className="mt-16 text-[26px] font-light leading-[1.08] tracking-[-0.045em]">
                  {item.title}
                </h3>

                <p
                  className={`mt-6 text-[16px] leading-[1.45] ${
                    index % 2 === 0 ? "text-black/60" : "text-white/70"
                  }`}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#eef2f5] px-[6vw] py-24 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 xl:grid-cols-[0.38fr_0.62fr] xl:gap-24">
          <div className="xl:sticky xl:top-32 xl:self-start">
            <p className="font-semibold text-[26px] text-[#104B9C]">Service Standards</p>
            <h2 className="mt-8 max-w-[520px] text-[44px] font-light leading-[1] tracking-[-0.06em] md:text-[58px]">
              More than workforce supply. We deliver operational confidence.
            </h2>
            <p className="mt-8 max-w-[480px] text-[19px] leading-[1.45] text-black/60">
              Our service approach is built to reduce workforce challenges, improve operational continuity, and give businesses a dependable staffing partner focused on long-term support.
            </p>
            <ActionButton href="/contact">Discuss Your Requirement</ActionButton>
          </div>

          <div className="border-t border-black/10">
            {standards.map((item) => (
              <article
                key={item.number}
                className="group grid gap-6 border-b border-black/10 py-8 transition-colors duration-300 md:grid-cols-[0.12fr_0.36fr_0.52fr] md:items-start"
              >
                <span className="text-[14px] font-semibold text-[#104B9C]">
                  {item.number}
                </span>
                <h3 className="text-[27px] font-light leading-[1.05] tracking-[-0.045em] text-black transition-colors group-hover:text-[#104B9C] md:text-[32px]">
                  {item.title}
                </h3>
                <p className="text-[18px] leading-[1.45] text-black/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[6vw] py-24 shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.34fr_0.66fr] lg:gap-24">
          <p className="font-semibold text-[26px] text-[#104B9C]">Industries We Support</p>
          <SectionHeading>
            Workforce solutions built for modern business environments.
          </SectionHeading>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className={`group relative min-h-[430px] overflow-hidden rounded-[9px] ${
                index === 0 || index === 5 ? "xl:col-span-2" : ""
              }`}
            >
              <img
                src={industry.image}
                alt={`${industry.title} manpower services`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/92 via-[#104B9C]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-8">
                <div className="mb-5 h-px w-full bg-white/20" />
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <h3 className="text-[36px] font-light leading-none tracking-[-0.055em] md:text-[44px]">
                      {industry.title}
                    </h3>
                    <p className="mt-4 max-w-[520px] text-[17px] leading-[1.4] text-white/70">
                      {industry.text}
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#f7fbff] px-[6vw] py-24 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.34fr_0.66fr] lg:gap-24">
          <div>
            <p className="font-semibold text-[26px] text-[#104B9C]">Service Questions</p>
            <p className="mt-6 max-w-[300px] text-[17px] leading-[1.45] text-black/55">
              Important information before sharing your workforce requirement.
            </p>
          </div>

          <div>
            <SectionHeading>Frequently asked questions.</SectionHeading>

            <div className="mt-14">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[6vw] py-24 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5 lg:px-[9vw] lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:30px_30px] opacity-20" />
        <div className="absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="absolute -bottom-20 right-16 h-[360px] w-[360px] rounded-full border border-white/10" />

        <div className="relative grid items-center gap-16 lg:grid-cols-[0.58fr_0.42fr] lg:gap-20">
          <div>
            <p className="mb-8 font-semibold text-[26px] text-[#d6eaff]">
              Start Your Workforce Requirement
            </p>
            <SectionHeading light className="max-w-[850px]">
              Reliable workforce solutions designed around your business needs.
            </SectionHeading>

            <p className="mt-8 max-w-[650px] text-[20px] leading-[1.45] text-white/70">
              Tell us the role, quantity, shift timing, and location, and our team will help you build the right workforce strategy for smooth and dependable operations across Maharashtra.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <ActionButton href="/contact" light>
                Request Workforce
              </ActionButton>

              <a
                href="tel:+919325158710"
                className="mt-8 inline-flex items-center border-b border-white/35 pb-1 text-[15px] font-semibold text-white transition-colors hover:border-white"
              >
                Call +91 93251 58710
              </a>
            </div>
          </div>

          <div className="relative min-h-[500px] overflow-hidden rounded-[10px] border border-white/15 bg-white/10">
            <img
              src={assets.contactTeam}
              alt="Platinum workforce support team"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#d6eaff]">
                Platinum Support
              </p>
              <p className="mt-3 text-[28px] font-light leading-[1.08] tracking-[-0.04em] text-white">
                Trusted coordination from requirement to deployment.
              </p>
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
