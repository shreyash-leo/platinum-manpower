"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
  hero: "/images/hero-about.webp",
  staffGroup: "/images/about/staffgroup.webp",
  office: "/images/about/office.webp",
  workforce: "/images/about/skilled-staff.webp",
  commercial: "/images/about/commercial.webp",
  hospital: "/images/about/healthcare-staff.webp",
  hotel: "/images/about/hotel.webp",
  mall: "/images/about/housekeeping.webp",
  airport: "/images/airport-staff2.webp",
  contact: "/images/about/workforce.webp",
  contactTeam: "/images/contact-team.webp",
  contactTeam2: "/images/about/workforce.webp",
  skilled: "/images/about/skilled-staff2.webp",
};

const keyStats = [
  {
    label: "Service Focus",
    value: "Manpower & Facility Management",
  },
  {
    label: "Core Support",
    value: "Skilled & Unskilled Manpower",
  },
  {
    label: "Industry Coverage",
    value: "Healthcare, Hospitality & Commercial",
  },
  {
    label: "Workforce Continuity",
    value: "Quick Replacement Coordination",
  },
  {
    label: "Client Support",
    value: "Dedicated Workforce Coordination",
  },
  {
    label: "Service Coverage",
    value: "Across Maharashtra",
  },
];

const standards = [
  {
    title: "Workplace-Ready Staff",
    text: "Our workforce is guided on discipline, hygiene, grooming, reporting standards, and role responsibilities before deployment.",
  },
  {
    title: "Screened & Verified Workforce",
    text: "Candidates undergo profile screening, identity checks, and suitability review based on the role and workplace requirements.",
  },
  {
    title: "Professional Workforce Management",
    text: "From requirement planning and candidate selection to deployment and ongoing support, every stage is managed through a structured process.",
  },
  {
    title: "Responsive Replacement Support",
    text: "We coordinate workforce replacements promptly to reduce staffing gaps and help clients maintain smooth daily operations.",
  },
];

const serviceCards = [
  {
    title: "Skilled Manpower Solutions",
    image: assets.skilled,
    text: "Role-specific workforce support for technical, administrative, supervisory, facility, and operational business requirements.",
  },
  {
    title: "Healthcare Staffing Support",
    image: assets.hospital,
    text: "Reliable staffing for hospitals, clinics, diagnostic centres, patient-care environments, housekeeping, and healthcare operations.",
  },
  {
    title: "Housekeeping & Facility Support",
    image: assets.mall,
    text: "Professionally coordinated manpower for cleanliness, hygiene, maintenance assistance, and day-to-day facility operations.",
  },
];

const process = [
  {
    year: "01",
    title: "Understand Your Requirement",
    text: "We assess the role, workforce quantity, shift structure, location, experience level, and operational expectations.",
  },
  {
    year: "02",
    title: "Screen & Shortlist Candidates",
    text: "Suitable candidates are reviewed for role fit, availability, experience, workplace suitability, and operational readiness.",
  },
  {
    year: "03",
    title: "Coordinate Workforce Deployment",
    text: "Selected manpower is deployed with clear guidance on duties, reporting, shift timings, and workplace standards.",
  },
  {
    year: "04",
    title: "Provide Ongoing Support",
    text: "Our team supports attendance coordination, workforce communication, replacement requests, and operational continuity.",
  },
];

const industries = [
  {
    title: "Hospitals",
    image: assets.hospital,
    text: "Professional healthcare staffing and facility support for hospitals, clinics, diagnostic centres, and patient-care environments where hygiene and reliability are essential.",
    points: [
      "Patient care staff",
      "Ward assistants",
      "Hospital housekeeping",
      "Facility support",
    ],
  },
  {
    title: "Hotels",
    image: assets.hotel,
    text: "Hospitality staffing solutions for hotels, restaurants, resorts, banquets, service areas, and guest-facing operations requiring consistent service standards.",
    points: [
      "Room attendants",
      "Service staff",
      "Kitchen helpers",
      "Housekeeping teams",
    ],
  },
  {
    title: "Shopping Malls",
    image: assets.mall,
    text: "Dependable workforce and facility support for shopping malls and high-footfall commercial environments focused on cleanliness and customer experience.",
    points: [
      "Housekeeping teams",
      "Customer assistance",
      "Maintenance support",
      "Operational staff",
    ],
  },
  {
    title: "Airports",
    image: assets.airport,
    text: "Professionally coordinated manpower for fast-paced airport environments where discipline, punctuality, grooming, and service quality matter every day.",
    points: [
      "Facility staff",
      "Customer assistance",
      "Operational workforce",
      "Housekeeping teams",
    ],
  },
  {
    title: "Offices",
    image: assets.office,
    text: "Flexible staffing and facility management support for corporate offices, business parks, and professional workspaces across Maharashtra.",
    points: [
      "Office assistants",
      "Pantry staff",
      "Housekeeping teams",
      "Administrative support",
    ],
  },
  {
    title: "Commercial Spaces",
    image: assets.commercial,
    text: "Scalable manpower and facility support for commercial properties, retail environments, warehouses, and operational business spaces.",
    points: [
      "Facility support",
      "Cleaning personnel",
      "Maintenance helpers",
      "Operational workforce",
    ],
  },
];

const team = [
  {
    name: "Shalu Sansare",
    role: "Founder & Proprietor",
    phone: "93251 58710",
    email: "contact@platinummanpowerservices.com",
    initials: "SS",
    call: "9325158710",
  },
  {
    name: "Sonali Pagare",
    role: "HR & Workforce Manager",
    phone: "91463 81803 | 93251 58710",
    email: "platinummanpower.sonali@gmail.com",
    initials: "SP",
    call: "9146381803",
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
    question: "What manpower and staffing services does Platinum provide?",
    answer:
      "We provide skilled and unskilled manpower, healthcare staffing, hospitality staff, housekeeping teams, facility support personnel, contract workforce, payroll support, and HR outsourcing solutions.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We support hospitals, clinics, hotels, restaurants, shopping malls, airports, corporate offices, commercial properties, warehouses, and industrial operations across Maharashtra.",
  },
  {
    question: "Do you provide replacement support?",
    answer:
      "Yes. We provide responsive replacement coordination to reduce staffing gaps and help businesses maintain workforce continuity whenever availability is affected.",
  },
  {
    question: "How does your staffing process work?",
    answer:
      "We understand your workforce requirement, screen suitable candidates, coordinate client approval, deploy selected manpower, and continue supporting attendance, communication, and replacements.",
  },
];

function SectionHeading({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-[42px] font-light leading-[0.98] tracking-[-0.065em] md:text-[58px] xl:text-[78px] ${
        light ? "text-white" : "text-black"
      }`}
    >
      {children}
    </h2>
  );
}

function Button({
  children,
  href = "/contact",
  dark = false,
}: {
  children: ReactNode;
  href?: string;
  dark?: boolean;
}) {
  return (
    <Magnetic className="mt-8 w-fit" strength={14}>
      <a
        href={href}
        className={`group inline-flex items-stretch font-semibold outline-none ${
          dark ? "text-white" : "text-black"
        }`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#d6eaff] text-black transition-all duration-500 group-hover:-rotate-12 group-hover:scale-105">
          ↳
        </span>

        <span
          className={`ml-1 flex h-12 items-center justify-center rounded-[4px] border px-5 transition-all duration-500 group-hover:px-7 ${
            dark
              ? "border-white/35 group-hover:border-white/75 group-hover:bg-white/10"
              : "border-black/25 group-hover:border-black/60 group-hover:bg-black/[0.03]"
          }`}
        >
          {children}
        </span>
      </a>
    </Magnetic>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-t border-black/10"
      layout
      transition={{
        layout: {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left text-[19px] font-medium text-black transition-colors duration-300 hover:text-[#104B9C]"
      >
        <span>{question}</span>

        <motion.span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-[25px] font-light transition-colors duration-300 group-hover:border-[#104B9C]/30 group-hover:bg-[#104B9C] group-hover:text-white"
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {open ? "−" : "+"}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="answer"
            initial={{
              height: 0,
              opacity: 0,
              y: -10,
            }}
            animate={{
              height: "auto",
              opacity: 1,
              y: 0,
            }}
            exit={{
              height: 0,
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <p className="max-w-[760px] pb-8 text-[18px] leading-[1.45] text-[#4f4f4f]">
              {answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AboutPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const selectedIndustry = industries[activeIndustry];

  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-[#082d5c] font-sans text-[#524f4b]">
      <Navbar />
      <ScrollProgress />

      {/* Fixed navy canvas. Rounded content cards scroll above this layer. */}
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
        <section className="relative mx-2 overflow-hidden rounded-[26px] bg-[#D9EAFD] px-[9vw] pb-20 pt-[132px] text-white shadow-[0_32px_100px_rgba(2,18,43,0.32)] sm:mx-3 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={10}
            distance={18}
            className="absolute -right-40 top-14 h-[520px] w-[520px] rounded-full border border-[#104B9C]/10"
          />

          <FloatingShape
            duration={8}
            distance={13}
            delay={0.6}
            className="absolute -right-20 top-32 h-[360px] w-[360px] rounded-full border border-[#104B9C]/10"
          />

          <div className="relative grid items-end gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{
                opacity: 0,
                y: 48,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-7 text-[24px] font-semibold uppercase tracking-[0.14em] text-[#104B9C]">
                About Platinum Manpower Services
              </p>

              <h1 className="max-w-[720px] text-[40px] font-light leading-[0.80] tracking-[-0.065em] text-black md:text-[40px] lg:text-[40px] xl:text-[92px]">
                Reliable workforce for stronger business operations.
              </h1>
            </motion.div>

            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:pb-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 0.25,
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
              {[
                "Platinum Manpower & Facility Management Services provides staffing, housekeeping, healthcare, hospitality, payroll, HR, and facility support across Maharashtra.",
                "We help businesses maintain reliable daily operations through screened workforce, structured deployment, responsive coordination, and replacement support.",
              ].map((text) => (
                <motion.p
                  key={text}
                  className="max-w-[360px] text-[18px] leading-[1.42] text-black/70"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 28,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative mt-14 overflow-hidden rounded-[10px] border border-white/15 bg-white/10 shadow-[0_35px_100px_rgba(0,0,0,0.18)]"
            initial={{
              opacity: 0,
              y: 42,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.25,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.img
              src={assets.hero}
              alt="Platinum Manpower and Facility Management Services workforce solutions"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              draggable={false}
              className="h-[300px] w-full object-cover md:h-[360px] xl:h-[420px]"
              initial={{
                scale: 1.08,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#104B9C]/10 via-transparent to-[#104B9C]/10" />
          </motion.div>
        </section>

        {/* Intro Visual */}
        <section className="relative mx-2 mb-3 mt-3 overflow-hidden rounded-[26px] bg-[#f1f5f8] px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 sm:mt-4 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={9}
            distance={16}
            className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#104B9C]/[0.04]"
          />

          <div className="relative grid items-center gap-20 lg:grid-cols-[0.45fr_0.55fr]">
            <Reveal direction="right">
              <p className="mb-8 font-semibold text-[24px] text-[#104B9C]">
                About Platinum
              </p>

              <h2 className="max-w-[560px] text-[42px] font-light leading-[1.04] tracking-[-0.06em] md:text-[58px]">
                Helping businesses build dependable operations with the right
                workforce.
              </h2>

              <p className="mt-10 max-w-[520px] text-[20px] leading-[1.38] text-[#4f4f4f]">
                At{" "}
                <strong className="text-black">
                  PLATINUM MANPOWER AND FACILITY MANAGEMENT SERVICES
                </strong>
                , we support businesses across Maharashtra with skilled and
                unskilled manpower, recruitment, contract staffing, payroll
                management, HR outsourcing, housekeeping, and facility services.
                We work closely with every client to understand role
                requirements, shift structures, workplace conditions, and
                operational expectations before planning the right workforce
                solution.
              </p>

              <Button href="/contact">Contact Our Team</Button>
            </Reveal>

            <ScaleReveal delay={0.1}>
              <div className="relative">
                <FloatingShape
                  duration={7}
                  distance={12}
                  className="absolute -bottom-8 -left-8 h-52 w-52 rounded-full bg-[#104B9C]/10"
                />

                <div className="relative overflow-hidden rounded-[10px] shadow-[0_35px_100px_rgba(16,75,156,0.18)]">
                  <motion.img
                    src={assets.staffGroup}
                    alt="Platinum professionally managed manpower team in Maharashtra"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-[620px] w-full object-cover"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            </ScaleReveal>
          </div>
        </section>

        {/* Performance Standards */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={11}
            distance={20}
            className="absolute -right-36 top-24 h-[430px] w-[430px] rounded-full border border-white/10"
          />

          <ClipReveal>
            <SectionHeading light>
              Built for dependable staffing, workforce continuity, and
              professional facility support.
            </SectionHeading>
          </ClipReveal>

          <div className="relative mt-24 grid items-start gap-20 lg:grid-cols-[0.95fr_1.05fr]">
            <ScaleReveal>
              <div className="relative min-h-[640px] overflow-hidden rounded-[8px] border border-white/15 bg-white/10 p-10">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[length:28px_28px] opacity-30" />

                <ParallaxMedia
                  src={assets.workforce}
                  alt="Skilled and unskilled workforce support by Platinum Manpower"
                  distance={48}
                  className="relative mx-auto h-[560px] w-full rounded-[6px]"
                />
              </div>
            </ScaleReveal>

            <Reveal direction="left" delay={0.08}>
              <h3 className="mb-8 text-[38px] font-light tracking-[-0.055em]">
                Key Standards
              </h3>

              <StaggerGroup
                className="border-t border-white/25"
                delayChildren={0.08}
                stagger={0.08}
              >
                {keyStats.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <motion.div
                      className="group grid grid-cols-[0.9fr_1.1fr] gap-8 border-b border-white/25 py-6"
                      whileHover={{
                        x: 8,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 22,
                      }}
                    >
                      <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/55 transition-colors duration-300 group-hover:text-white/80">
                        {stat.label}
                      </p>

                      <p className="text-right text-[24px] font-light leading-[1.1] tracking-[-0.04em] text-white md:text-[30px]">
                        {stat.value}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          </div>
        </section>

        {/* Strength Callouts */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#e9edf2] px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={9}
            distance={15}
            className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-[#104B9C]/[0.04]"
          />

          <div className="relative grid items-center gap-16 lg:grid-cols-[0.33fr_0.34fr_0.33fr]">
            <StaggerGroup className="grid gap-24" stagger={0.15}>
              {standards.slice(0, 2).map((item) => (
                <StaggerItem key={item.title}>
                  <StretchCard>
                    <article className="group rounded-[8px] p-3 transition-colors duration-300 hover:bg-white/70">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="h-3 w-3 rounded-full bg-[#104B9C] transition-transform duration-500 group-hover:scale-[1.7]" />
                        <h3 className="text-[22px] font-medium">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-[18px] leading-[1.4] text-[#4f4f4f]">
                        {item.text}
                      </p>
                    </article>
                  </StretchCard>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <ScaleReveal delay={0.08}>
              <div className="overflow-hidden rounded-[8px] shadow-[0_35px_90px_rgba(0,0,0,0.12)]">
                <motion.img
                  src={assets.contactTeam2}
                  alt="Managed workforce"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="mx-auto h-[720px] w-full object-cover"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </ScaleReveal>

            <StaggerGroup className="grid gap-24" stagger={0.15}>
              {standards.slice(2).map((item) => (
                <StaggerItem key={item.title}>
                  <StretchCard>
                    <article className="group rounded-[8px] p-3 transition-colors duration-300 hover:bg-white/70">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="h-3 w-3 rounded-full bg-[#104B9C] transition-transform duration-500 group-hover:scale-[1.7]" />
                        <h3 className="text-[22px] font-medium">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-[18px] leading-[1.4] text-[#4f4f4f]">
                        {item.text}
                      </p>
                    </article>
                  </StretchCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Service Cards */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <div className="grid gap-20 lg:grid-cols-[0.36fr_0.64fr]">
            <Reveal direction="right">
              <p className="font-semibold text-[24px] text-[#104B9C]">
                Our Workforce Capabilities
              </p>
            </Reveal>

            <ClipReveal delay={0.06}>
              <SectionHeading>
                Manpower and facility solutions designed for real operational
                needs.
              </SectionHeading>
            </ClipReveal>
          </div>

          <StaggerGroup
            className="mt-24 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
            delayChildren={0.08}
            stagger={0.12}
          >
            {serviceCards.map((card) => (
              <StaggerItem key={card.title} className="h-full min-w-0">
                <StretchCard className="h-full" activeScale={1.006}>
                  <article className="group flex h-full flex-col rounded-[10px] border border-[#104B9C]/12 bg-[#f7fbff] p-5 transition-shadow duration-500 hover:shadow-[0_28px_70px_rgba(16,75,156,0.14)] md:p-6">
                    <div className="overflow-hidden rounded-[8px]">
                      <motion.img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="h-[360px] w-full object-cover md:h-[390px] xl:h-[420px]"
                        whileHover={{
                          scale: 1.06,
                        }}
                        transition={{
                          duration: 0.75,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <h3 className="mt-8 text-[26px] font-medium tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#104B9C]">
                        {card.title}
                      </h3>

                      <p className="mt-5 flex-1 text-[18px] leading-[1.42] text-[#4f4f4f]">
                        {card.text}
                      </p>

                      <div className="mt-8 h-[2px] w-12 bg-[#104B9C]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#104B9C]" />
                    </div>
                  </article>
                </StretchCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* Process Timeline */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={9}
            distance={14}
            className="absolute -right-28 bottom-8 h-72 w-72 rounded-full bg-[#104B9C]/[0.035]"
          />

          <div className="relative grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
            <Reveal direction="right">
              <p className="font-semibold text-[24px] text-[#104B9C]">
                Our Staffing Process
                <br />
                Structured Deployment
              </p>
            </Reveal>

            <ClipReveal delay={0.06}>
              <SectionHeading>
                A structured path from workforce planning and screening to
                deployment and ongoing coordination.
              </SectionHeading>
            </ClipReveal>
          </div>

          <StaggerGroup
            className="relative mt-24 grid gap-8 lg:grid-cols-4"
            stagger={0.12}
          >
            {process.map((item, index) => (
              <StaggerItem key={item.year} className="h-full">
                <StretchCard className="h-full">
                  <article className="group relative h-full rounded-[8px] p-2">
                    <div className="mb-7 inline-flex rounded-[4px] border border-black/15 px-5 py-3 text-[18px] font-medium transition-all duration-500 group-hover:border-[#104B9C] group-hover:bg-[#104B9C] group-hover:text-white">
                      {item.year}
                    </div>

                    <div className="mb-8 h-px w-full bg-[repeating-linear-gradient(90deg,rgba(16,75,156,0.35)_0_2px,transparent_2px_14px)]" />

                    <h3 className="text-[28px] font-light leading-[1.08] tracking-[-0.05em] transition-colors duration-300 group-hover:text-[#104B9C]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[18px] leading-[1.38] text-[#4f4f4f]">
                      {item.text}
                    </p>

                    {index < process.length - 1 ? (
                      <span className="absolute right-0 top-5 hidden text-[25px] text-[#104B9C]/25 transition-transform duration-500 group-hover:translate-x-2 lg:block">
                        →
                      </span>
                    ) : null}
                  </article>
                </StretchCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* Industries Carousel */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={11}
            distance={20}
            className="absolute -left-32 top-20 h-[390px] w-[390px] rounded-full border border-white/10"
          />

          <div className="relative grid gap-20 lg:grid-cols-[0.34fr_0.66fr]">
            <Reveal direction="right">
              <p className="font-semibold text-[24px] text-[#d6eaff]">
                Industries We Support
              </p>
            </Reveal>

            <ClipReveal delay={0.06}>
              <SectionHeading light>
                Industry-specific staffing solutions for workplaces where
                reliability, hygiene, discipline, and operational continuity
                matter.
              </SectionHeading>
            </ClipReveal>
          </div>

          <ScaleReveal delay={0.08}>
            <div className="relative mt-24 grid overflow-hidden rounded-[12px] border border-white/15 bg-white/10 backdrop-blur-sm lg:grid-cols-[0.42fr_0.58fr]">
              <div className="border-b border-white/15 lg:border-b-0 lg:border-r">
                {industries.map((industry, index) => {
                  const isActive = activeIndustry === index;

                  return (
                    <motion.button
                      key={industry.title}
                      type="button"
                      onClick={() => setActiveIndustry(index)}
                      whileHover={{
                        x: isActive ? 0 : 6,
                      }}
                      whileTap={{
                        scale: 0.985,
                      }}
                      className={`group flex w-full items-center justify-between gap-8 border-b border-white/15 px-7 py-7 text-left transition-colors duration-500 last:border-b-0 ${
                        isActive
                          ? "bg-white text-[#104B9C]"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="flex items-center gap-5">
                        <motion.span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold ${
                            isActive
                              ? "bg-[#104B9C] text-white"
                              : "bg-white/10 text-white"
                          }`}
                          animate={{
                            rotate: isActive ? -8 : 0,
                            scale: isActive ? 1.08 : 1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 20,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </motion.span>

                        <span className="text-[26px] font-light leading-none tracking-[-0.05em] md:text-[34px]">
                          {industry.title}
                        </span>
                      </span>

                      <span
                        className={`text-[28px] font-light transition-all duration-500 ${
                          isActive
                            ? "translate-x-1 text-[#104B9C]"
                            : "text-white/60 group-hover:translate-x-2 group-hover:text-white"
                        }`}
                      >
                        →
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <div className="relative min-h-[620px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndustry.title}
                    className="absolute inset-0"
                    initial={{
                      opacity: 0,
                      scale: 1.06,
                      x: 35,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.02,
                      x: -25,
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <motion.img
                      src={selectedIndustry.image}
                      alt={selectedIndustry.title + " manpower support"}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={{
                        scale: 1.08,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/95 via-[#104B9C]/45 to-transparent" />

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                      initial={{
                        opacity: 0,
                        y: 35,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <p className="mb-5 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#d6eaff]">
                        Workforce Support
                      </p>

                      <h3 className="max-w-[620px] text-[46px] font-light leading-[0.95] tracking-[-0.06em] text-white md:text-[66px]">
                        {selectedIndustry.title}
                      </h3>

                      <p className="mt-7 max-w-[620px] text-[20px] leading-[1.38] text-white/80">
                        {selectedIndustry.text}
                      </p>

                      <motion.div
                        className="mt-9 flex flex-wrap gap-3"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              delayChildren: 0.25,
                              staggerChildren: 0.06,
                            },
                          },
                        }}
                      >
                        {selectedIndustry.points.map((point) => (
                          <motion.span
                            key={point}
                            className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[14px] font-medium text-white backdrop-blur-sm"
                            variants={{
                              hidden: {
                                opacity: 0,
                                y: 16,
                              },
                              visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  duration: 0.45,
                                },
                              },
                            }}
                          >
                            {point}
                          </motion.span>
                        ))}
                      </motion.div>

                      <Magnetic className="mt-10 w-fit" strength={14}>
                        <a
                          href="/contact"
                          className="group inline-flex items-center gap-3 rounded-[4px] bg-[#d6eaff] px-6 py-3 text-[15px] font-semibold text-black transition-all duration-500 hover:bg-white hover:px-8"
                        >
                          Request Workforce
                          <span className="transition-transform duration-500 group-hover:translate-x-2">
                            →
                          </span>
                        </a>
                      </Magnetic>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </ScaleReveal>
        </section>

        {/* Team */}
<section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[7vw] py-24 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
  <div className="grid gap-16 lg:grid-cols-[0.32fr_0.68fr]">
    <Reveal direction="right">
      <p className="text-[24px] font-semibold text-[#104B9C]">
        Our Team
        <br />
        People Behind Platinum
      </p>
    </Reveal>

    <ClipReveal delay={0.06}>
      <SectionHeading>
        Dedicated professionals focused on workforce planning, client
        coordination, and reliable manpower deployment.
      </SectionHeading>
    </ClipReveal>
  </div>

  <StaggerGroup
    className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
    stagger={0.14}
  >
    {team.map((member) => (
      <StaggerItem key={member.name} className="h-full">
        <StretchCard className="h-full">
          <article className="group relative flex h-full flex-col overflow-hidden rounded-[10px] border border-[#104B9C]/15 bg-[#f7fbff] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(16,75,156,0.14)]">

            {/* Avatar */}
            <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#104B9C] text-[18px] font-semibold text-white transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
              {member.initials}
            </div>

            {/* Name */}
            <h3 className="text-[32px] font-light uppercase leading-none tracking-[-0.05em] text-black transition-colors duration-300 group-hover:text-[#104B9C]">
              {member.name}
            </h3>

            {/* Role */}
            <p className="mt-2 text-[18px] font-medium text-[#104B9C]">
              {member.role}
            </p>

            {/* Contact Details */}
            <div className="mt-6 flex flex-1 flex-col border-t border-black/10 pt-5">

              <a
                href={"tel:+91" + member.call}
                className="text-[18px] font-semibold text-black transition-all duration-300 hover:translate-x-1 hover:text-[#104B9C]"
              >
                {member.phone}
              </a>

              <a
                href={"mailto:" + member.email}
                className="mt-3 break-all text-[15px] font-medium leading-[1.5] text-[#4f4f4f] transition-all duration-300 hover:translate-x-1 hover:text-[#104B9C]"
              >
                {member.email}
              </a>

            </div>

            {/* Bottom Accent */}
            <span className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#104B9C] transition-all duration-500 group-hover:w-full" />
          </article>
        </StretchCard>
      </StaggerItem>
    ))}
  </StaggerGroup>
</section>

        {/* FAQ */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-white px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={9}
            distance={14}
            className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-[#104B9C]/[0.035]"
          />

          <div className="relative grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
            <Reveal direction="right">
              <p className="font-semibold text-[24px] text-[#104B9C]">About Our Services</p>
            </Reveal>

            <div>
              <ClipReveal delay={0.06}>
                <SectionHeading>Frequently Asked Questions</SectionHeading>
              </ClipReveal>

              <StaggerGroup className="mt-16" stagger={0.08}>
                {faqs.map((faq) => (
                  <StaggerItem key={faq.question}>
                    <FaqItem question={faq.question} answer={faq.answer} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative mx-2 mb-3 overflow-hidden rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={10}
            distance={18}
            className="absolute -left-28 bottom-10 h-80 w-80 rounded-full border border-white/10"
          />

          <div className="relative grid items-center gap-20 lg:grid-cols-[0.45fr_0.55fr]">
            <Reveal direction="right">
              <p className="mb-10 font-semibold text-[24px] text-[#d6eaff]">
                Partner With Platinum
              </p>

              <SectionHeading light>
                Looking for reliable manpower and facility management support?
              </SectionHeading>

              <p className="mt-10 max-w-[560px] text-[20px] leading-[1.35] text-white/75">
                Share your role, workforce quantity, shift timing, location, and
                operational needs. Our team will help plan a dependable staffing
                solution for your business anywhere across Maharashtra.
              </p>

              <Button href="/contact" dark>
                Request Workforce
              </Button>
            </Reveal>

            <ScaleReveal delay={0.1}>
              <ParallaxMedia
                src={assets.contactTeam}
                alt="Contact Platinum Manpower for staffing services in Maharashtra"
                distance={52}
                className="h-[560px] rounded-[8px] shadow-[0_35px_100px_rgba(0,0,0,0.22)]"
                overlayClassName="bg-gradient-to-t from-[#061b38]/20 to-transparent"
              />
            </ScaleReveal>
          </div>
        </section>

        <div className="mx-2 overflow-hidden rounded-[26px] shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 md:rounded-[34px] lg:mx-5">
          <Footer />
        </div>
      </div>
    </main>
  );
}
