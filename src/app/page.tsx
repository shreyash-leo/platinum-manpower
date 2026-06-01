"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

  // Stagger animation for Why Choose Platinum features
  const staggerFeatures = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  // Animated Counter Component
  const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let start = 0;
            const duration = 2000;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count}{suffix}</span>;
  };

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-8 pt-32 pb-6 bg-white">
        <div className="relative overflow-hidden h-[820px]">

          {/* Parallax Background - Updated with composite image showing multiple industries */}
          <motion.img
            style={{ y: parallaxY }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src="/hero.jpg"
            alt="Platinum Manpower - Hospital, Hotel, Mall & Airport Staff"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Animated Content Box - Updated with company tagline and info */}
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
                  Skilled.
                  <br />
                  Verified.
                  <br />
                  Managed.
                </h1>

                <p className="text-white/80 mt-8 text-lg leading-8 max-w-[220px]">
                  Specialized manpower solutions for Hospitals, Hotels, Shopping Malls & Airports.
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

      {/* WHY CHOOSE US - Replaced with About Us content */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#f7f8fa] py-32 overflow-hidden"
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* LEFT - About Us Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-between h-full"
            >
              <div>
                <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-8">
                  About Us
                </p>

                <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[700px] mb-12">
                  Every business grows stronger with the right people behind it.
                </h2>

                <p className="text-neutral-500 text-lg leading-[2] max-w-[650px]">
                  At Platinum Manpower and Facility Management Services, we provide skilled and unskilled manpower solutions for hospitals, hotels, shopping malls, and airports with a focus on reliability, professionalism, and long-term support.
                </p>
                <p className="text-neutral-500 text-lg leading-[2] max-w-[650px] mt-6">
                  Our team works closely with clients to understand staffing requirements and provide verified manpower suited to operational needs.
                </p>
              </div>
            </motion.div>

            {/* RIGHT - Updated with workforce management image */}
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
                alt="Workforce Management & Team Supervision"
                className="relative z-10 w-full max-w-[650px] h-[900px] object-cover"
              />

              <div className="absolute top-10 -right-10 w-3 h-48 bg-[#0D5EA8]" />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* INDUSTRIES WE SERVE - Updated with your specific industries */}
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
              Specialized manpower for critical industries.
            </h2>
          </motion.div>

          {/* Industries Grid with Images */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {[
              { 
                id: "01", 
                title: "Hospitals", 
                desc: "Nurses | Ward Boys | Patient Care Staff | Housekeeping Staff | Support Manpower",
                image: "/industry-hospital.jpg",
                roles: ["Nurses", "Ward Boys", "Patient Care Staff", "Housekeeping Staff", "Support Manpower"]
              },
              { 
                id: "02", 
                title: "Hotels", 
                desc: "Housekeeping Staff | Room Attendants | Kitchen Helpers | Service Staff | Support Manpower",
                image: "/industry-hotel.jpg",
                roles: ["Housekeeping Staff", "Room Attendants", "Kitchen Helpers", "Service Staff", "Support Manpower"]
              },
              { 
                id: "03", 
                title: "Shopping Malls", 
                desc: "Customer Assistance Staff | Housekeeping Staff | Facility Support Staff | Maintenance Helpers",
                image: "/industry-mall.jpg",
                roles: ["Customer Assistance Staff", "Housekeeping Staff", "Facility Support Staff", "Maintenance Helpers", "Support Manpower"]
              },
              { 
                id: "04", 
                title: "Airports", 
                desc: "Housekeeping Staff | Customer Assistance Staff | Facility Support Staff | Operational Helpers",
                image: "/industry-airport.jpg",
                roles: ["Housekeeping Staff", "Customer Assistance Staff", "Facility Support Staff", "Operational Helpers", "Support Staff"]
              }
            ].map((industry) => (
              <motion.div
                key={industry.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden bg-neutral-900 cursor-pointer"
              >
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                  <span className="text-neutral-300 text-sm tracking-wider">{industry.id}</span>
                  <h3 className="text-4xl font-bold mt-2 mb-4">{industry.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {industry.roles.map((role, idx) => (
                      <span key={idx} className="text-sm text-white/70 border border-white/20 rounded-full px-3 py-1">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* SERVICES - Updated with your services */}
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
              Our Services
            </p>
            <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[900px]">
              Comprehensive staffing solutions for every need.
            </h2>
          </motion.div>

          {/* Service Cards with Images */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {[
              { number: "01", title: "Skilled Manpower Supply", description: "Trained manpower for specialized business operations, ensuring quality support and dependable performance.", image: "/service-skilled.jpg" },
              { number: "02", title: "Unskilled Manpower Supply", description: "Reliable workforce support for daily operational needs, housekeeping, maintenance, and support activities.", image: "/service-unskilled.jpg" },
              { number: "03", title: "Nurses & Healthcare Staff", description: "Professional healthcare manpower for hospitals, clinics, and medical facilities, selected with care and responsibility.", image: "/service-healthcare.jpg" },
              { number: "04", title: "Hotel & Hospitality Staff", description: "Staffing support for hotels, restaurants, banquets, and hospitality operations, focused on service and guest experience.", image: "/service-hospitality.jpg" },
              { number: "05", title: "Housekeeping Staff", description: "Well-managed housekeeping manpower for hospitals, hotels, shopping malls, airports, offices, and commercial spaces.", image: "/service-housekeeping.jpg" },
              { number: "06", title: "Facility Support Staff", description: "Professional facility management support for smooth day-to-day operations across all industry verticals.", image: "/service-facility.jpg" }
            ].map((service) => (
              <motion.div
                key={service.number}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white border border-neutral-200 hover:border-[#0D5EA8] transition-all duration-500 overflow-hidden"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-5xl font-semibold text-neutral-200 group-hover:text-[#0D5EA8] transition-all duration-500">
                    {service.number}
                  </span>
                  <h3 className="text-2xl font-medium mt-4 mb-3">{service.title}</h3>
                  <p className="text-neutral-500 leading-7 text-sm">{service.description}</p>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 10 }}
                    className="flex justify-end mt-6"
                  >
                    <span className="text-2xl text-[#0D5EA8]">→</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      <section className="bg-white py-40">
  <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-24">

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="sticky top-40 self-start"
      >
        <p className="uppercase tracking-[0.3em] text-[#0D5EA8] text-sm mb-8">
          Why Choose Platinum
        </p>

        <h2 className="text-7xl lg:text-[120px] leading-[0.9] font-light text-black">
          Built
          <br />
          on Trust.
        </h2>

        <p className="mt-10 text-neutral-500 max-w-sm text-lg leading-8">
          Reliable manpower solutions designed for hospitals,
          hotels, malls and airports.
        </p>
      </motion.div>

      {/* Right Side */}
      <motion.div
        variants={staggerFeatures}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            no: "01",
            title: "Trained Workers",
            desc: "Workplace discipline, hygiene, grooming and service standards."
          },
          {
            no: "02",
            title: "Quick Replacement",
            desc: "Immediate staffing support when operations require continuity."
          },
          {
            no: "03",
            title: "Verified Manpower",
            desc: "Screened and verified workforce before deployment."
          },
          {
            no: "04",
            title: "Professional Management",
            desc: "Structured coordination from selection to deployment."
          },
          {
            no: "05",
            title: "24/7 Support",
            desc: "Always available for urgent staffing requirements."
          },
          {
            no: "06",
            title: "Affordable Solutions",
            desc: "Practical workforce solutions for every scale of business."
          }
        ].map((item) => (
          <motion.div
            key={item.no}
            variants={featureItemVariants}
            whileHover={{
              x: 10,
              transition: { duration: 0.3 }
            }}
            className="group border-b border-neutral-200 py-14 cursor-pointer"
          >
            <div className="flex items-start gap-10">

              <span className="text-[#0D5EA8] text-xl font-medium min-w-[60px]">
                {item.no}
              </span>

              <div className="flex-1">

                <h3 className="text-4xl lg:text-5xl font-light text-black transition-all duration-500 group-hover:translate-x-4">
                  {item.title}
                </h3>

                <p className="mt-4 text-neutral-500 max-w-xl text-lg leading-8">
                  {item.desc}
                </p>

              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </div>
</section>

      {/* GALLERY SECTION - New Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-36 bg-[#f7f8fa]"
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-14">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-[3px] bg-[#0D5EA8] mx-auto mb-8" />
            <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">
              Our Workforce
            </p>
            <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[800px] mx-auto">
              Behind every smooth operation, there's a dedicated team.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              { title: "Nurses", image: "/gallery-nurses.jpg", category: "Healthcare" },
              { title: "Ward Boys", image: "/gallery-ward.jpg", category: "Healthcare" },
              { title: "Hotel Staff", image: "/gallery-hotel-staff.jpg", category: "Hospitality" },
              { title: "Housekeeping Teams", image: "/gallery-housekeeping.jpg", category: "Facility" },
              { title: "Customer Assistance Staff", image: "/gallery-customer-assist.jpg", category: "Retail" },
              { title: "Airport Operations Staff", image: "/gallery-airport.jpg", category: "Aviation" },
              { title: "Facility Support Teams", image: "/gallery-facility.jpg", category: "Facility" },
              { title: "Workforce Coordination", image: "/gallery-coordination.jpg", category: "Management" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs uppercase tracking-wider text-[#0D5EA8]">{item.category}</p>
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* STATISTICS - New Section with Animated Counters */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-36 bg-white"
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-14">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-[3px] bg-[#0D5EA8] mx-auto mb-8" />
            <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">
              Our Impact in Numbers
            </p>
            <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] max-w-[900px] mx-auto">
              Trusted by businesses across industries.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Verified Workforce", target: 2500, suffix: "+" },
              { label: "24/7 Support", target: 365, suffix: " Days" },
              { label: "Industries Served", target: 4, suffix: "+" },
              { label: "Commitment to Service", target: 100, suffix: "%" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-8 border border-neutral-100 bg-[#fafbfc]"
              >
                <h3 className="text-5xl lg:text-6xl font-bold text-[#0D5EA8]">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </h3>
                <p className="mt-4 text-neutral-600 uppercase tracking-wider text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* TESTIMONIALS - Kept but updated testimonial content to be more generic */}
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
              { name: "Dr. Meera Desai", title: "Operations Head • Multi-Specialty Hospital", text: "Platinum Manpower has been a reliable partner for our hospital staffing needs. Their nurses and healthcare staff are professional, well-trained, and demonstrate genuine care for patients. The quick replacement support has been invaluable for our 24/7 operations." },
              { name: "Vikram Singh", title: "General Manager • Luxury Hotel Chain", text: "We've partnered with Platinum Manpower for over two years now. Their hospitality staff maintains our service standards perfectly. The team is responsive, professional, and truly understands the demands of the hotel industry." }
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

        </div>
      </motion.section>

      {/* CTA - Updated with contact info */}
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

            {/* Floating Card with Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:absolute lg:left-20 lg:bottom-[-80px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)] max-w-[700px]"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#0D5EA8]" />
              <div className="p-12 lg:p-16">
                <p className="uppercase tracking-[0.25em] text-[#0D5EA8] text-sm font-medium mb-6">Get In Touch</p>
                <h2 className="text-5xl lg:text-7xl font-semibold leading-[1] mb-8">Ready to build your workforce?</h2>
                <p className="text-neutral-500 text-lg leading-8 mb-6">
                  Call us at <strong className="text-[#0D5EA8]">93251 58710</strong> or email <strong className="text-[#0D5EA8]">contact@platinummanpowerservices.com</strong>
                </p>
                <p className="text-neutral-500 text-lg leading-8 mb-10">
                  Row House No. 2, Jai Maa Ashapura Society, Sinnar Phata, Nashik - 422101
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