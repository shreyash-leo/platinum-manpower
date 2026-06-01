"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-8 pt-32 pb-6 bg-white">
        <div className="relative overflow-hidden h-[820px]">

          {/* Parallax Background */}
          <motion.img
            style={{ y: parallaxY }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src="/hero.jpg"
            alt="Platinum Manpower"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Animated Content Box */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-[12%] top-1/2 -translate-y-1/2"
          >
            <div className="border-[5px] border-[#0D5EA8] w-[330px] h-[620px] p-12 flex flex-col justify-between">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <p className="uppercase tracking-[0.25em] text-white text-sm font-semibold">
                  Platinum Manpower
                </p>

                <h1 className="text-white font-bold text-7xl leading-[0.9] mt-8">
                  Premium
                  <br />
                  Workforce
                  <br />
                  Solutions
                </h1>

                <p className="text-white/80 mt-8 text-lg leading-8 max-w-[220px]">
                  Recruitment, staffing and workforce management solutions
                  for modern businesses.
                </p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group text-white text-2xl flex items-center gap-4"
              >
                Explore
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </motion.button>

            </div>
          </motion.div>

          {/* Slider Indicators */}
          <div className="absolute bottom-32 right-16 flex gap-5">
            <div className="w-12 h-[4px] bg-white/50" />
            <div className="w-12 h-[4px] bg-white/50" />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-[4px] bg-[#0D5EA8]"
            />
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#f7f8fa] py-32 overflow-hidden"
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-between h-full"
            >
              <div>
                <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-8">
                  Why Choose Us
                </p>

                <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[700px] mb-12">
                  Trusted Workforce Solutions For Every Industry
                </h2>

                <p className="text-neutral-500 text-lg leading-[2] max-w-[650px]">
                  We deliver dependable manpower, staffing, payroll management,
                  facility support, and workforce solutions that help organizations
                  improve productivity, maintain compliance, and scale operations
                  efficiently.
                </p>
              </div>

              {/* EXPERIENCE BLOCK */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-8 mt-24"
              >
                <div className="w-[180px] h-[180px] border-[5px] border-[#0D5EA8] flex items-center justify-center">
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-8xl font-bold"
                  >
                    15
                  </motion.span>
                </div>

                <div>
                  <h3 className="text-4xl leading-tight">
                    Years
                    <br />
                    Industry
                    <br />
                    Experience
                  </h3>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              <div className="absolute -bottom-14 -left-14 w-[500px] h-[350px] opacity-15 bg-[radial-gradient(#0D5EA8_1px,transparent_1px)] [background-size:12px_12px]" />

              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                src="/why-choose-us.jpg"
                alt="Platinum Manpower Workforce Solutions"
                className="relative z-10 w-full max-w-[650px] h-[900px] object-cover"
              />

              <div className="absolute top-10 -right-10 w-3 h-48 bg-[#0D5EA8]" />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* INDUSTRIES WE SERVE */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-36 bg-white"
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-14">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="w-20 h-[3px] bg-[#0D5EA8] mb-8" />
            <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">
              Industries We Serve
            </p>
            <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[900px]">
              Providing workforce solutions across diverse industries.
            </h2>
          </motion.div>

          {/* Industries Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-x-24 gap-y-16"
          >
            {[
              { no: "01", title: "Construction", desc: "Skilled labour, supervisors, engineers and project workforce." },
              { no: "02", title: "Manufacturing", desc: "Production staff, machine operators and plant workforce." },
              { no: "03", title: "Logistics", desc: "Warehouse, supply chain and transportation manpower." },
              { no: "04", title: "Healthcare", desc: "Medical support staff, technicians and administration." },
              { no: "05", title: "Hospitality", desc: "Hotels, restaurants, facilities and service workforce." },
              { no: "06", title: "Retail", desc: "Sales teams, customer support and store operations." }
            ].map((industry) => (
              <motion.div
                key={industry.no}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="group border-b border-neutral-200 pb-10 cursor-pointer"
              >
                <div className="flex gap-8">
                  <span className="text-neutral-300 text-5xl font-semibold min-w-[90px] transition-all duration-500 group-hover:text-[#0D5EA8]">
                    {industry.no}
                  </span>
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-medium mb-4 transition-all duration-500 group-hover:translate-x-2">
                      {industry.title}
                    </h3>
                    <p className="text-neutral-500 text-lg leading-relaxed max-w-[450px]">
                      {industry.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-36 bg-[#f7f8fa]"
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-14">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="w-20 h-[3px] bg-[#0D5EA8] mb-8" />
            <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">
              Service Snapshot
            </p>
            <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[900px]">
              Workforce solutions tailored for every business need.
            </h2>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {[
              { number: "01", title: "Recruitment & Staffing", description: "Permanent, temporary and project-based hiring solutions." },
              { number: "02", title: "Contract Workforce", description: "Flexible workforce deployment for operational scalability." },
              { number: "03", title: "Payroll Management", description: "Accurate payroll processing and statutory compliance." },
              { number: "04", title: "HR Outsourcing", description: "End-to-end HR administration and employee management." },
              { number: "05", title: "Executive Search", description: "Leadership hiring and specialized talent acquisition." },
              { number: "06", title: "Compliance Support", description: "Labour law compliance, documentation and workforce governance." }
            ].map((service) => (
              <motion.div
                key={service.number}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white p-12 border border-neutral-200 hover:border-[#0D5EA8] transition-all duration-500 min-h-[320px] flex flex-col justify-between"
              >
                <span className="text-6xl font-semibold text-neutral-200 group-hover:text-[#0D5EA8] transition-all duration-500">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-3xl font-medium mb-5">{service.title}</h3>
                  <p className="text-neutral-500 leading-8">{service.description}</p>
                </div>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  className="flex justify-end"
                >
                  <span className="text-3xl text-[#0D5EA8]">→</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* STATISTICS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-36 bg-white"
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-14">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="w-20 h-[3px] bg-[#0D5EA8] mb-8" />
            <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">
              Our Impact
            </p>
            <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[900px]">
              Trusted workforce partner for businesses across industries.
            </h2>
          </motion.div>

          {/* Image */}
          <div className="relative">
            <img src="/statistics-banner.jpg" alt="Workforce Statistics" className="w-full h-[700px] object-cover" />
            <div className="absolute inset-0 bg-black/20" />

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-1/2 bottom-[-80px] -translate-x-1/2 w-[95%] lg:w-[90%] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  { value: "5000+", label: "Workers Deployed" },
                  { value: "150+", label: "Clients Served" },
                  { value: "25+", label: "Industries" },
                  { value: "98%", label: "Retention Rate" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                    className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-neutral-200"
                  >
                    <h3 className="text-5xl lg:text-7xl font-semibold leading-none">{stat.value}</h3>
                    <p className="mt-4 text-neutral-500 uppercase tracking-[0.2em] text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="h-[160px]" />
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-36 bg-[#f8f8f8] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#0D5EA8_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative max-w-[1600px] mx-auto px-8 lg:px-14">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-24"
          >
            <div>
              <div className="w-20 h-[3px] bg-[#0D5EA8] mb-8" />
              <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">Testimonials</p>
              <h2 className="text-5xl lg:text-7xl font-semibold leading-none">What Our Clients Say</h2>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10"
          >
            {[
              { name: "Rajesh Sharma", title: "Operations Director • Manufacturing", text: "Platinum Manpower has consistently delivered skilled workforce solutions with professionalism, speed, and reliability. Their team understands operational requirements and provides exceptional support throughout the hiring process." },
              { name: "Priya Mehta", title: "HR Head • Logistics", text: "Their ability to source qualified candidates quickly has significantly improved our recruitment process. We consider Platinum Manpower a trusted workforce partner." }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-14 relative"
              >
                <div className="flex items-center gap-5 mb-10">
                  <img src={`/client${idx + 1}.jpg`} alt="" className="w-20 h-20 rounded-full object-cover" />
                  <div>
                    <h3 className="text-2xl">{testimonial.name}</h3>
                    <p className="text-neutral-500">{testimonial.title}</p>
                  </div>
                </div>
                <div className="absolute top-10 right-10 text-[120px] leading-none text-[#0D5EA8] opacity-20">"</div>
                <p className="text-xl text-neutral-500 leading-[2] max-w-[600px]">{testimonial.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-5 gap-12 items-center mt-32 opacity-60 hover:opacity-100 transition-all duration-500"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.img
                key={i}
                whileHover={{ scale: 1.05 }}
                src={`/logo${i}.png`}
                alt=""
                className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-36 bg-white overflow-hidden"
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
          <div className="relative">
            <div className="relative h-[700px] overflow-hidden">
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src="/cta-banner.jpg"
                alt="Workforce Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:absolute lg:left-20 lg:bottom-[-80px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)] max-w-[700px]"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#0D5EA8]" />
              <div className="p-12 lg:p-16">
                <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">Ready To Get Started</p>
                <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] mb-8">Let's Build<br />Your Workforce.</h2>
                <p className="text-neutral-500 text-lg leading-8 mb-10">
                  From recruitment and staffing to payroll management and workforce
                  solutions, we help businesses scale with confidence.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-4 text-lg font-medium hover:text-[#0D5EA8] transition-all duration-300"
                >
                  Contact Us
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          </div>
          <div className="h-[180px] hidden lg:block" />
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}