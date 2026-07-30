"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

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
  heroBanner: "/images/hero-banner.webp",
  staffGroup: "/images/platinum-staff-group.webp",
  hospital: "/images/Healthcare-Support.webp",
  hotel: "/images/Hospitality-Staff.webp",
  mall: "/images/mall-staff.webp",
  airport: "/images/airport.webp",
  workforce: "/images/workforce-team.webp",
  contact: "/images/contact-team.webp",
};

const aboutSlides = [
  {
    image: assets.staffGroup,
    title: "Verified Workforce",
    text: "Screened, workplace-ready professionals aligned with your operational requirements.",
  },
  {
    image: assets.hospital,
    title: "Healthcare Workforce Support",
    text: "Reliable staffing for hospitals, clinics, patient care, housekeeping, and ward operations.",
  },
  {
    image: assets.hotel,
    title: "Hospitality & Guest Services",
    text: "Professional teams for hotels, restaurants, banquets, housekeeping, and guest support.",
  },
  {
    image: assets.airport,
    title: "Facility & Operational Support",
    text: "Disciplined manpower for commercial spaces, airports, offices, and high-standard facilities.",
  },
];

const services = [
  {
    title: "Skilled Workforce Solutions",
    text: "Professionally managed manpower for technical, operational, and role-specific requirements, supporting dependable performance and workplace efficiency.",
  },
  {
    title: "Unskilled Workforce Support",
    text: "Reliable manpower for daily operations, maintenance, housekeeping, logistics, and essential support functions.",
  },
  {
    title: "Healthcare & Medical Staffing",
    text: "Trusted workforce support for hospitals, clinics, healthcare facilities, and patient-care environments.",
  },
  {
    title: "Hospitality & Guest Services",
    text: "Professional staffing for hotels, restaurants, banquets, and hospitality operations focused on consistent service quality.",
  },
  {
    title: "Housekeeping & Facility Support",
    text: "Dependable teams that help maintain cleanliness, hygiene, maintenance standards, and smooth daily operations.",
  },
];

const whyChoose = [
  {
    title: "Trained & Workplace-Ready Staff",
    text: "Our workforce is guided on professional conduct, workplace discipline, grooming, hygiene, and role expectations.",
  },
  {
    title: "Quick Workforce Replacement",
    text: "Fast replacement coordination helps your business maintain workforce continuity when staffing gaps arise.",
  },
  {
    title: "Verified & Screened Workforce",
    text: "Candidates undergo basic profile screening, identity verification, and suitability checks before deployment.",
  },
  {
    title: "Professional Workforce Management",
    text: "A structured process covers candidate selection, deployment, coordination, and ongoing operational support.",
  },
  {
    title: "Responsive Client Support",
    text: "Our coordination team supports staffing updates, attendance concerns, replacements, and operational communication.",
  },
  {
    title: "Flexible & Scalable Staffing",
    text: "Solutions adapt to temporary, recurring, shift-based, project-specific, and long-term workforce requirements.",
  },
];

const approach = [
  {
    step: "01",
    title: "Understanding Your Requirement",
    text: "We assess roles, workforce quantity, location, shift structure, expectations, and operational requirements.",
  },
  {
    step: "02",
    title: "Screening & Workforce Selection",
    text: "Suitable candidates are shortlisted based on role fit, experience, availability, and workplace suitability.",
  },
  {
    step: "03",
    title: "Workforce Deployment",
    text: "Selected manpower is deployed with clear guidance on roles, reporting, standards, and shift responsibilities.",
  },
  {
    step: "04",
    title: "Ongoing Workforce Support",
    text: "We assist with attendance coordination, replacements, workforce communication, and day-to-day continuity.",
  },
];

const industries = [
  {
    title: "Hospitals",
    image: assets.hospital,
    text: "Reliable healthcare workforce support for hospitals, clinics, and medical facilities requiring disciplined, hygiene-focused staffing.",
    points: [
      "Patient care support staff",
      "Ward assistants & support teams",
      "Housekeeping staff",
      "Hospital facility workforce",
      "Healthcare support personnel",
    ],
  },
  {
    title: "Hotels",
    image: assets.hotel,
    text: "Professional hospitality staffing designed to support seamless guest experiences and smooth daily hotel operations.",
    points: [
      "Housekeeping staff",
      "Room attendants",
      "Kitchen helpers",
      "Guest service teams",
      "Hospitality support staff",
    ],
  },
  {
    title: "Shopping Malls",
    image: assets.mall,
    text: "Dependable workforce support for high-footfall commercial environments focused on cleanliness, efficiency, and customer experience.",
    points: [
      "Housekeeping staff",
      "Customer assistance teams",
      "Maintenance support",
      "Facility workforce",
      "Operational staff",
    ],
  },
  {
    title: "Airports",
    image: assets.airport,
    text: "Professionally coordinated manpower for fast-paced environments where consistency, discipline, and service quality are essential.",
    points: [
      "Facility support staff",
      "Housekeeping teams",
      "Customer assistance personnel",
      "Operational workforce",
      "Maintenance support",
    ],
  },
];

const companyTeam = [
  {
    name: "Shalu Sansare",
    role: "Founder & Proprietor",
    phone: "93251 58710",
    email: "contact@platinummanpowerservices.com",
    initials: "SS",
  },
  {
    name: "Sonali Pagare",
    role: "HR & Workforce Manager",
    phone: "91463 81803 | 93251 58710",
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

function Button({
  children,
  href = "#contact",
  dark = false,
}: {
  children: ReactNode;
  href?: string;
  dark?: boolean;
}) {
  return (
    <Magnetic className="mt-7 w-fit" strength={6}>
      <a
        href={href}
        className={`group inline-flex items-stretch font-semibold outline-none ${
          dark ? "text-white" : "text-black"
        }`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#d6eaff] text-black transition-all duration-500 group-hover:rotate-[-10deg] group-hover:scale-105">
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

function SectionHeading({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-[42px] font-light leading-[0.98] tracking-[-0.065em] md:text-[56px] xl:text-[74px] ${
        light ? "text-white" : "text-black"
      }`}
    >
      {children}
    </h2>
  );
}

function AboutCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = aboutSlides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % aboutSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[420px] overflow-visible rounded-[10px] bg-[#104B9C] shadow-[0_30px_80px_rgba(16,75,156,0.20)] lg:h-[460px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.title}
          className="absolute inset-0"
          initial={{
            opacity: 0,
            scale: 1.08,
            clipPath: "inset(0 0 100% 0)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            clipPath: "inset(0 0 0% 0)",
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
            clipPath: "inset(100% 0 0 0)",
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.img
            src={activeSlide.image}
            alt={activeSlide.title}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 4.2,
              ease: "linear",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#104B9C]/95 via-[#104B9C]/35 to-transparent" />

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-8 text-white"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.18,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Platinum Manpower
            </p>

            <h3 className="text-[34px] font-light leading-none tracking-[-0.05em]">
              {activeSlide.title}
            </h3>

            <p className="mt-4 max-w-[460px] text-[17px] leading-[1.35] text-white/75">
              {activeSlide.text}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute right-6 top-6 z-20 flex gap-2">
        {aboutSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={"Show " + slide.title}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              activeIndex === index
                ? "w-9 bg-white"
                : "w-2.5 bg-white/45 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#082d5c] font-sans text-[#524f4b]">
      <Navbar />
      <ScrollProgress />
      {/* Fixed page background. All rounded section cards scroll above this layer. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-visible bg-[#082d5c]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(214,234,255,0.18),transparent_28%),radial-gradient(circle_at_88%_34%,rgba(255,255,255,0.10),transparent_24%),linear-gradient(145deg,#082d5c_0%,#0b3c78_48%,#061f43_100%)]" />
        <div className="absolute -left-40 top-[12%] h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="absolute -right-44 top-[48%] h-[620px] w-[620px] rounded-full border border-white/[0.08]" />
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative z-10 pb-2 pt-2 sm:pb-3 sm:pt-3 lg:pb-5 lg:pt-5">
        {/* Hero Banner */}
        <section className="relative mx-2 min-h-[calc(100svh-1rem)] overflow-hidden rounded-[26px] bg-[#104B9C] shadow-[0_32px_100px_rgba(2,18,43,0.32)] sm:mx-3 sm:min-h-[calc(100svh-1.5rem)] md:rounded-[34px] lg:mx-5 lg:min-h-[calc(100svh-2.5rem)]">
          {/* Background Image */}
          <motion.img
            src={assets.heroBanner}
            alt="Platinum Manpower banner"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Main Dark Overlay */}
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,22,48,0.95)_0%,rgba(5,35,74,0.88)_22%,rgba(9,61,120,0.55)_45%,rgba(9,61,120,0.18)_65%,rgba(9,61,120,0)_100%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />

          {/* Bottom Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#082d5c]/70 via-transparent to-[#082d5c]/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          />

          {/* Glow */}
          <div className="absolute left-[4vw] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#104B9C]/40 blur-[150px]" />

          <FloatingShape
            duration={9}
            distance={18}
            className="absolute -right-32 top-[13%] h-[420px] w-[420px] rounded-full border border-white/15"
          />

          <FloatingShape
            duration={7}
            distance={12}
            delay={0.7}
            className="absolute -right-16 top-[19%] h-[290px] w-[290px] rounded-full border border-white/10"
          />

          {/* Hero Content */}
          <div className="absolute left-[7vw] top-1/2 z-20 max-w-[820px] -translate-y-1/2">
            <motion.div
              className="mt-6 mb-8 h-[3px] w-20 rounded-full bg-[#4ea3ff]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
              style={{ transformOrigin: "left" }}
            />

            <motion.h1
              className="max-w-[650px] text-[35px] font-semibold leading-[0.95] tracking-[-0.065em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:text-[76px] xl:text-[70px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Building Reliable
              <br />
              Workforce For
              <br />
              Modern
              <br />
              Businesses.
            </motion.h1>

            <motion.p
              className="mt-8 max-w-[650px] text-[20px] leading-[1.55] text-white/90"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Professionally managed manpower, staffing, facility management,
              payroll, and HR solutions for hospitals, hotels, corporate
              offices, commercial spaces, airports, and industrial operations
              across Maharashtra
            </motion.p>

            <motion.div
              className="mt-14"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.75,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Magnetic strength={8}>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-4 rounded-[8px] bg-white px-8 py-4 text-[16px] font-semibold text-[#082d5c] shadow-[0_18px_40px_rgba(0,0,0,.25)] transition-all duration-500 hover:bg-[#eef6ff]"
                >
                  Request Workforce
                  <span className="transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="relative mx-2 mb-3 mt-3 overflow-visible rounded-[26px] bg-white px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] scroll-mt-24 sm:mx-3 sm:mb-4 sm:mt-4 md:rounded-[34px] lg:mx-5"
        >
          <FloatingShape
            duration={10}
            distance={14}
            className="absolute -left-36 top-28 h-72 w-72 rounded-full bg-[#104B9C]/[0.035]"
          />

          <Reveal>
            <p className="max-w-[280px] text-[24px] font-semibold text-[#104B9C]">
              About Platinum
            </p>
          </Reveal>

          <div className="relative mt-16 grid items-start gap-20 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal direction="right">
              <SectionHeading>
                Helping businesses build stronger operations with the right
                workforce.
              </SectionHeading>

              <Button href="/contact">Contact Our Team</Button>
            </Reveal>

            <div className="grid gap-8">
              <ScaleReveal delay={0.08}>
                <AboutCarousel />
              </ScaleReveal>

              <Reveal delay={0.12}>
                <p className="max-w-[620px] text-[24px] leading-[1.22] text-[#4d4d4d]">
                  <strong>
                    Platinum Manpower & Facility Management Services
                  </strong>{" "}
                  delivers skilled and unskilled manpower, recruitment, contract
                  staffing, payroll management, HR outsourcing, and facility
                  support solutions tailored to modern business operations
                  across Maharashtra.
                </p>
              </Reveal>
            </div>
          </div>

          <StaggerGroup
            className="relative mt-20 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
            stagger={0.14}
          >
            <StaggerItem>
              <StretchCard className="h-full">
                <div className="group h-full rounded-[8px] bg-[#104B9C] p-9 text-white shadow-[0_30px_80px_rgba(16,75,156,0.18)]">
                  <h3 className="mb-4 text-[34px] font-medium tracking-[-0.04em]">
                    Our Commitment
                  </h3>

                  <p className="text-[22px] leading-[1.25] text-white/80">
                    Reliable workforce. Smooth operations. Long-term business
                    support.
                  </p>

                  <div className="mt-10 h-px w-16 bg-white/40 transition-all duration-500 group-hover:w-full" />
                </div>
              </StretchCard>
            </StaggerItem>

            <StaggerItem>
              <StretchCard className="h-full">
                <div className="group h-full rounded-[8px] border border-[#104B9C]/15 bg-[#f7fbff] p-9">
                  <p className="text-[20px] leading-[1.35] text-[#4f4f4f]">
                    We understand workforce requirements, operational
                    challenges, and staffing expectations to help businesses
                    access the right people, at the right time, for the right
                    responsibilities.
                  </p>

                  <div className="mt-10 h-px w-16 bg-[#104B9C]/30 transition-all duration-500 group-hover:w-full" />
                </div>
              </StretchCard>
            </StaggerItem>
          </StaggerGroup>
        </section>

        {/* Services */}
        <section
          id="services"
          className="relative isolate z-10 mb-3 overflow-visible rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] scroll-mt-24 sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5"
        >
          <FloatingShape
            duration={8}
            distance={20}
            className="absolute -z-10 -top-32 h-[460px] w-[460px] rounded-full border border-white/10"
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
            <Reveal direction="right">
              <div>
                <p className="text-[24px] font-semibold text-[#d6eaff]">
                  Our Services
                </p>

                <p className="mt-5 max-w-[320px] text-[16px] leading-[1.5] text-white/65 md:text-[17px]">
                  Reliable workforce, staffing, and facility management
                  solutions designed to support modern business operations
                  across Maharashtra.
                </p>
              </div>
            </Reveal>

            <ClipReveal delay={0.08}>
              <div>
                <SectionHeading light>
                  Complete workforce solutions for modern business operations.
                </SectionHeading>

                <p className="mt-7 max-w-[700px] text-[18px] leading-[1.5] text-white/72 md:text-[20px]">
                  From contract staffing and payroll management to healthcare,
                  hospitality, housekeeping, and facility support teams.
                </p>

                <Button href="/services" dark>
                  Explore Services
                </Button>
              </div>
            </ClipReveal>
          </div>

          <StaggerGroup
            className="relative mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-5"
            delayChildren={0.1}
            stagger={0.08}
          >
            {services.map((service, index) => (
              <StaggerItem key={service.title} className="h-full">
                <StretchCard className="relative z-20 h-full">
                  <article className="relative group flex min-h-[330px] h-full flex-col justify-between overflow-visible rounded-[8px] border border-white/15 bg-white p-7 text-black shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                    <div>
                      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#104B9C] text-sm font-bold text-white transition-all duration-500 group-hover:rotate-[-10deg] group-hover:scale-110">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="text-[24px] font-semibold leading-[1.1] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#104B9C]">
                        {service.title}
                      </h3>
                    </div>

                    <div>
                      <p className="mt-8 text-[16px] leading-[1.35] text-[#4f4f4f]">
                        {service.text}
                      </p>

                      <div className="mt-7 h-[2px] w-10 bg-[#104B9C]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#104B9C]" />
                    </div>
                  </article>
                </StretchCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* Staffing Approach */}
        <section className="relative mx-2 mb-3 overflow-visible rounded-[26px] bg-white px-[9vw] py-28 text-[#104B9C] shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={9}
            distance={16}
            className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-[#104B9C]/[0.035]"
          />

          <div className="relative grid gap-20 lg:grid-cols-[0.32fr_0.68fr]">
            <Reveal direction="right">
              <p className="font-semibold text-[24px]">Our Staffing Approach</p>
            </Reveal>

            <ClipReveal delay={0.06}>
              <SectionHeading>
                A streamlined staffing process built for smooth workforce
                deployment and uninterrupted operations.
              </SectionHeading>
            </ClipReveal>
          </div>

          <StaggerGroup
            className="relative mt-24 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            stagger={0.12}
          >
            {approach.map((item, index) => (
              <StaggerItem key={item.step} className="h-full">
                <StretchCard className="h-full">
                  <article className="group relative h-full overflow-visible rounded-[8px] border border-[#104B9C]/15 bg-[#f7fbff] p-8">
                    <span className="mb-14 flex h-14 w-14 items-center justify-center rounded-full bg-[#104B9C] text-sm font-bold text-white transition-all duration-500 group-hover:scale-110">
                      {item.step}
                    </span>

                    <h3 className="text-[28px] font-semibold leading-[1.08] tracking-[-0.05em] text-black">
                      {item.title}
                    </h3>

                    <p className="mt-8 text-[17px] leading-[1.35] text-[#4f4f4f]">
                      {item.text}
                    </p>

                    {index < approach.length - 1 ? (
                      <span className="absolute right-6 top-9 hidden text-[25px] text-[#104B9C]/25 transition-transform duration-500 group-hover:translate-x-2 xl:block">
                        →
                      </span>
                    ) : null}

                    <span className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#104B9C] transition-all duration-500 group-hover:w-full" />
                  </article>
                </StretchCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* Why Choose */}
        <section className="relative mx-2 mb-3 overflow-visible rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={11}
            distance={22}
            className="absolute -right-32 bottom-10 h-[360px] w-[360px] rounded-full border border-white/10"
          />

          <div className="relative mb-20 grid gap-20 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal direction="right">
              <p className="font-semibold text-[24px]">Why Choose Platinum?</p>
            </Reveal>

            <ClipReveal delay={0.08}>
              <SectionHeading light>
                Workforce solutions built around reliability, continuity, and
                real business needs.
              </SectionHeading>
            </ClipReveal>
          </div>

          <StaggerGroup
            className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            stagger={0.09}
          >
            {whyChoose.map((item, index) => (
              <StaggerItem key={item.title} className="h-full">
                <StretchCard className="h-full" activeScale={1.012}>
                  <article className="group flex min-h-[280px] h-full flex-col justify-between overflow-visible rounded-[8px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white hover:text-black">
                    <div>
                      <p className="mb-12 flex items-center gap-3 text-lg">
                        <span className="h-3 w-3 rounded-full bg-[#d6eaff] transition-all duration-500 group-hover:scale-[1.8] group-hover:bg-[#104B9C]" />
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="text-[30px] font-light leading-[1.08] tracking-[-0.05em]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-10 text-[18px] leading-[1.32] opacity-75">
                      {item.text}
                    </p>

                    <span className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#d6eaff] transition-all duration-500 group-hover:w-full group-hover:bg-[#104B9C]" />
                  </article>
                </StretchCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* Industries */}
        <section
          id="industries"
          className="relative mx-2 mb-3 overflow-visible rounded-[26px] bg-white px-[9vw] py-28 text-black shadow-[0_32px_100px_rgba(2,18,43,0.24)] scroll-mt-24 sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5"
        >
          <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
            <Reveal direction="right">
              <div>
                <p className="text-[24px] font-semibold text-[#104B9C]">
                  Industries We Serve
                </p>

                <p className="mt-5 max-w-[320px] text-[16px] leading-[1.5] text-[#4f4f4f] md:text-[17px]">
                  Reliable manpower, staffing, and facility support for
                  industries where discipline, professionalism, and operational
                  continuity matter.
                </p>
              </div>
            </Reveal>

            <ClipReveal delay={0.08}>
              <div>
                <SectionHeading>
                  Workforce support designed around the needs of every industry.
                </SectionHeading>

                <p className="mt-7 max-w-[700px] text-[18px] leading-[1.5] text-[#4f4f4f] md:text-[20px]">
                  From hospitals and hotels to shopping malls and airports, we
                  provide dependable teams that support service standards and
                  smooth daily operations.
                </p>
              </div>
            </ClipReveal>
          </div>

          <StaggerGroup
            className="mt-24 grid gap-5 lg:grid-cols-2"
            delayChildren={0.08}
            stagger={0.12}
          >
            {industries.map((industry) => (
              <StaggerItem key={industry.title} className="h-full">
                <StretchCard className="h-full" activeScale={1.008}>
                  <article className="group grid h-full overflow-visible rounded-[8px] border border-[#104B9C]/10 bg-[#f7fbff] shadow-[0_24px_70px_rgba(16,75,156,0.10)] lg:grid-cols-[0.92fr_1.08fr]">
                    <div className="relative min-h-[360px] overflow-visible">
                      <motion.img
                        src={industry.image}
                        alt={industry.title + " manpower support"}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="absolute inset-0 h-full w-full object-cover"
                        whileHover={{ scale: 1.07 }}
                        transition={{
                          duration: 0.75,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    <div className="p-8">
                      <h3 className="text-[42px] font-light leading-[1] tracking-[-0.06em] text-black transition-colors duration-300 group-hover:text-[#104B9C]">
                        {industry.title}
                      </h3>

                      <div className="my-6 h-[3px] w-16 bg-[#104B9C] transition-all duration-500 group-hover:w-full" />

                      <p className="text-[18px] font-medium leading-[1.34] text-[#1f2937]">
                        {industry.text}
                      </p>

                      <ul className="mt-8 grid gap-3 text-[17px] text-[#4f4f4f]">
                        {industry.points.map((point, pointIndex) => (
                          <motion.li
                            key={point}
                            className="flex gap-3"
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: pointIndex * 0.06,
                              duration: 0.45,
                            }}
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#104B9C]" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </StretchCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* Workforce Support */}
        <section className="relative mx-2 mb-3 overflow-visible rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5">
          <FloatingShape
            duration={8}
            distance={18}
            className="absolute -left-32 top-12 h-80 w-80 rounded-full border border-white/10"
          />

          <div className="relative grid items-center gap-20 lg:grid-cols-[0.4fr_0.6fr]">
            <Reveal direction="right">
              <SectionHeading light>
                Workforce solutions designed for smooth daily operations.
              </SectionHeading>

              <p className="mt-12 max-w-[520px] text-[20px] leading-[1.28] text-white/75">
                Whether you need healthcare staffing, housekeeping manpower,
                hospitality teams, operational workforce, facility support, or
                contract staffing, Platinum delivers professionally coordinated
                solutions tailored to real business requirements across
                Maharashtra.
              </p>

              <Button href="/contact" dark>
                Request Workforce
              </Button>
            </Reveal>

            <ScaleReveal delay={0.1}>
              <ParallaxMedia
                src={assets.workforce}
                alt="Verified workforce team"
                distance={55}
                className="h-[560px] rounded-[10px] shadow-[0_35px_90px_rgba(0,0,0,0.24)] md:h-[640px]"
                overlayClassName="bg-gradient-to-t from-[#061b38]/20 to-transparent"
              >
                <div className="absolute bottom-6 right-6 z-10 rounded-[6px] border border-white/20 bg-white/10 px-5 py-4 text-white backdrop-blur-md">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#d6eaff]">
                    Workforce Support
                  </p>
                  <p className="mt-1 text-[18px] font-medium">
                    Reliable. Managed. Workforce-Ready.
                  </p>
                </div>
              </ParallaxMedia>
            </ScaleReveal>
          </div>
        </section>

        

        {/* Contact */}
        <section
          id="contact"
          className="relative mx-2 mb-3 overflow-visible rounded-[26px] bg-[#104B9C] px-[9vw] py-28 text-white shadow-[0_32px_100px_rgba(2,18,43,0.24)] scroll-mt-24 sm:mx-3 sm:mb-4 md:rounded-[34px] lg:mx-5"
        >
          <FloatingShape
            duration={10}
            distance={20}
            className="absolute -right-24 top-10 h-80 w-80 rounded-full border border-white/10"
          />

          <div className="relative grid items-start gap-20 lg:grid-cols-[0.38fr_0.62fr]">
            <Reveal direction="right">
              <p className="mb-10 font-semibold text-[24px] text-[#d6eaff]">
                Contact Platinum
              </p>

              <h2 className="max-w-[520px] text-[44px] font-light leading-[1.08] tracking-[-0.06em] md:text-[56px]">
                Looking for reliable workforce solutions for your business?
              </h2>

              <p className="mt-8 max-w-[440px] text-[20px] leading-[1.35] text-white/70">
                Share your staffing requirement with our team. We will help you
                identify the right workforce support for your operational needs.
              </p>

              <Button href="tel:+919325158710" dark>
                Call Now
              </Button>
            </Reveal>

            <StaggerGroup className="grid gap-5" stagger={0.14}>
              <StaggerItem>
                <StretchCard>
                  <article className="group rounded-[8px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white/15">
                    <h3 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                      Contact Details
                    </h3>

                    <div className="mt-8 space-y-5">
                      <a
                        href="tel:+919325158710"
                        className="block text-[24px] font-semibold text-white transition-all duration-300 hover:translate-x-2 hover:opacity-75"
                      >
                        93251 58710
                      </a>

                      <a
                        href="mailto:contact@platinummanpowerservices.com"
                        className="block break-words text-[18px] font-medium text-white/75 transition-all duration-300 hover:translate-x-2 hover:text-white sm:text-[20px]"
                      >
                        contact@platinummanpowerservices.com
                      </a>
                    </div>
                  </article>
                </StretchCard>
              </StaggerItem>

              <StaggerItem>
                <StretchCard>
                  <article className="group rounded-[8px] border border-white/15 bg-white p-8 text-black">
                    <h3 className="text-[24px] font-semibold transition-colors duration-300 group-hover:text-[#104B9C]">
                      Office Address
                    </h3>

                    <p className="mt-5 max-w-[640px] text-[20px] leading-[1.35] text-[#4f4f4f]">
                      Platinum Manpower & Facility Management Services, Row
                      House No. 2, Jai Maa Ashapura Society, Sinnar Phata,
                      Nashik – 422101, Maharashtra
                    </p>

                    <div className="mt-8 h-[2px] w-12 bg-[#104B9C]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#104B9C]" />
                  </article>
                </StretchCard>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        <div className="mx-2 overflow-visible rounded-[26px] shadow-[0_32px_100px_rgba(2,18,43,0.24)] sm:mx-3 md:rounded-[34px] lg:mx-5">
          <Footer />
        </div>
      </div>
    </main>
  );
}
