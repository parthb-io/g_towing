"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { gsap } from "gsap";
import { Phone, Mail, Clock, MapPin, Navigation, Facebook, Instagram, Twitter, Truck, Headphones } from "lucide-react";

const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2589.7847183583226!2d-113.4189796232592!3d53.49607917233303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x53a0197c2ac9a557%3A0x10698418c091ee96!2sGuardium%20Towing%20Services!5e1!3m2!1sen!2sca!4v1770702802667!5m2!1sen!2sca";
const GOOGLE_MAPS_DIRECTIONS_URL = "https://maps.google.com/?q=Guardium+Towing+Edmonton+Canada";

const statusItems = [
  { name: "Emergency Dispatch", icon: Phone, online: true },
  { name: "Roadside Assistance", icon: Truck, online: true },
  { name: "Phone Support", icon: Headphones, online: true },
  { name: "Online Booking", icon: Clock, online: false },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function MaintenanceClient() {
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // GSAP floating animation for gradient orbs
  useEffect(() => {
    if (orbRef1.current && orbRef2.current) {
      gsap.to(orbRef1.current, {
        y: 30,
        x: 20,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      gsap.to(orbRef2.current, {
        y: -25,
        x: -15,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="h-screen max-h-screen bg-[#fafafa] relative overflow-hidden">
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          ref={orbRef1}
          className="absolute top-[-30%] right-[-20%] w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] rounded-full bg-gradient-to-br from-[#ce0000]/[0.06] via-[#ce0000]/[0.02] to-transparent blur-[100px] lg:blur-[120px]"
        />
        <div
          ref={orbRef2}
          className="absolute bottom-[-20%] left-[-20%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full bg-gradient-to-tr from-neutral-300/30 to-transparent blur-[80px] lg:blur-[100px]"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col" ref={ref}>
        {/* Header */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="shrink-0 w-full px-4 md:px-8 lg:px-12 py-3 lg:py-4"
        >
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/logo.png"
                alt="Guardium Towing"
                width={250}
                height={80}
                className="h-12 md:h-14 lg:h-18 w-auto"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 lg:gap-4"
            >
              {/* Social Media - Desktop */}
              <div className="hidden lg:flex items-center gap-0.5">
                {[
                  { href: "https://facebook.com/guardiumtowing", Icon: Facebook },
                  { href: "https://instagram.com/guardiumtowing", Icon: Instagram },
                  { href: "https://twitter.com/guardiumtowing", Icon: Twitter },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-400 hover:text-[#ce0000] transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.Icon className="h-[18px] w-[18px]" />
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="tel:+17809378737"
                className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-white bg-[#ce0000] hover:bg-[#b50000] px-3 py-2 lg:px-4 lg:py-2.5 rounded-full transition-all duration-200 shadow-md shadow-[#ce0000]/20"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(206, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                <span className="hidden sm:inline">+1 (780) 937-8737</span>
                <span className="sm:hidden">Call Now</span>
              </motion.a>
            </motion.div>
          </nav>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col px-4 md:px-8 lg:px-12 py-3 lg:py-4 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
            <div className="grid lg:grid-cols-2 gap-5 lg:gap-12 items-center flex-1">

              {/* Left Column - Hero Content */}
              <motion.div
                className="order-1 text-center lg:text-left"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {/* Badge */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-neutral-200 px-3 py-1.5 lg:px-4 lg:py-2 mb-4 lg:mb-5 shadow-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#ce0000] opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ce0000]" />
                  </span>
                  <span className="text-xs lg:text-sm font-medium text-neutral-700">
                    Ongoing Website Maintenance
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-semibold text-neutral-900 tracking-[-0.02em] leading-[1.1] my-3 lg:my-4"
                >
                  We&apos;re making
                  <span className="sm:hidden"> </span>
                  {" "} things{" "}
                  <motion.span
                    className="text-[#ce0000] relative inline-block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                  >
                    wayyy better.
                    <motion.svg
                      className="absolute -bottom-0.5 lg:-bottom-1 left-0 w-full"
                      viewBox="0 0 100 8"
                      preserveAspectRatio="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    >
                      <motion.path
                        d="M0 7 Q 50 0 100 7"
                        stroke="#ce0000"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </motion.svg>
                  </motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-sm lg:text-base xl:text-lg text-neutral-500 leading-normal max-w-xl mx-auto lg:mx-0 my-5 lg:my-6"
                >
                  Our website is temporarily offline for scheduled improvements.
                  Our towing services remain fully operational 24/7.
                </motion.p>

                {/* Status Grid */}
                <motion.div
                  variants={scaleIn}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-xl lg:rounded-2xl border border-neutral-200 p-3 lg:p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs lg:text-sm font-semibold text-neutral-700">Service Status</span>
                  </div>
                  <motion.div
                    className="grid grid-cols-2 gap-2 lg:gap-3"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {statusItems.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.03)" }}
                        className="flex items-center gap-2 py-2 px-2.5 lg:px-3 rounded-lg bg-neutral-50 cursor-default"
                      >
                        <motion.div
                          className={`w-6 h-6 lg:w-7 lg:h-7 rounded-md flex items-center justify-center ${item.online ? 'bg-green-100' : 'bg-amber-100'}`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          <item.icon className={`h-3 w-3 lg:h-3.5 lg:w-3.5 ${item.online ? 'text-green-600' : 'text-amber-600'}`} />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] lg:text-xs font-medium text-neutral-800 truncate">{item.name}</p>
                          <p className={`text-[10px] lg:text-[11px] font-medium ${item.online ? 'text-green-600' : 'text-amber-600'}`}>
                            {item.online ? 'Online' : 'Upgrading'}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Column - Map & Contact */}
              <motion.div
                className="order-2"
                initial="hidden"
                animate="visible"
                variants={slideInRight}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-20 h-20 lg:w-28 lg:h-28 bg-[#ce0000]/10 rounded-3xl blur-2xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-3 -left-3 w-24 h-24 lg:w-32 lg:h-32 bg-neutral-200/50 rounded-3xl blur-2xl"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />

                  {/* Main Card */}
                  <div className="relative bg-white rounded-2xl lg:rounded-3xl border border-neutral-200/80 shadow-2xl shadow-neutral-200/60 overflow-hidden">

                    {/* Google Maps Embed */}
                    <motion.div
                      className="relative h-36 md:h-40 lg:h-48 bg-neutral-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <iframe
                        src={GOOGLE_MAPS_EMBED_URL}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Guardium Towing Location"
                        className="absolute inset-0"
                      />
                      {/* Get Directions Overlay Button */}
                      <motion.a
                        href={GOOGLE_MAPS_DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 bg-white hover:bg-neutral-50 text-neutral-800 pl-2.5 pr-3 py-2 rounded-full font-semibold text-xs shadow-lg hover:shadow-xl transition-all duration-200 border border-neutral-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <Navigation className="h-3.5 w-3.5 text-[#ce0000]" />
                        Get Directions
                      </motion.a>
                    </motion.div>

                    {/* Contact Information */}
                    <div className="p-4 lg:p-5">
                      {/* Address */}
                      <motion.div
                        className="flex items-start gap-3 pb-3 lg:pb-4 border-b border-neutral-100"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <motion.div
                          className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-[#ce0000]/10 flex items-center justify-center shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-[#ce0000]" />
                        </motion.div>
                        <div>
                          <p className="font-semibold text-neutral-900 text-sm lg:text-base">Guardium Towing HeadOffice</p>
                          <p className="text-neutral-500 text-xs lg:text-sm">4918 Roper Rd NW Suite 206, Edmonton, AB T6B 3T7</p>
                        </div>
                      </motion.div>

                      {/* Contact Row */}
                      <motion.div
                        className="grid grid-cols-3 gap-3 lg:gap-4 pt-3 lg:pt-4"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                      >
                        {/* Phone */}
                        <motion.div
                          className="text-center"
                          variants={fadeInUp}
                          transition={{ delay: 0.7 }}
                        >
                          <motion.div
                            className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-1.5"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                          >
                            <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-green-600" />
                          </motion.div>
                          <motion.a
                            href="tel:+17809378737"
                            className="font-semibold text-[11px] lg:text-sm text-neutral-900 hover:text-[#ce0000] transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            +1 (780) 937-8737
                          </motion.a>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                          className="text-center"
                          variants={fadeInUp}
                          transition={{ delay: 0.8 }}
                        >
                          <motion.div
                            className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-1.5"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600" />
                          </motion.div>
                          <motion.a
                            href="mailto:dispatch@guardiumtowing.com"
                            className="font-semibold text-[11px] lg:text-sm text-neutral-900 hover:text-[#ce0000] transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            dispatch@guardiumtowing.com
                          </motion.a>
                        </motion.div>

                        {/* Hours */}
                        <motion.div
                          className="text-center"
                          variants={fadeInUp}
                          transition={{ delay: 0.9 }}
                        >
                          <motion.div
                            className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-amber-100 flex items-center justify-center mx-auto mb-1.5"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                          >
                            <Clock className="h-4 w-4 lg:h-5 lg:w-5 text-amber-600" />
                          </motion.div>
                          
                          <p className="font-semibold text-[11px] lg:text-sm text-neutral-900">24/7 Open</p>
                        </motion.div>
                      </motion.div>

                      {/* Call Button */}
                      <motion.a
                        href="tel:+17809378737"
                        className="mt-4 flex items-center justify-center gap-2 w-full bg-[#ce0000] hover:bg-[#b50000] text-white py-3 lg:py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#ce0000]/25"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(206, 0, 0, 0.35)", y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.span
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <Phone className="h-4 w-4" />
                        </motion.span>
                        Get Assistance Now - We are fully operational
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="shrink-0 px-4 md:px-8 lg:px-12 py-3 border-t border-neutral-200/60 bg-white/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              {/* Copyright */}
              <p className="text-[10px] lg:text-xs text-neutral-400">
                &copy; {new Date().getFullYear()} Guardium Towing Inc. All rights reserved.
              </p>

              {/* Social Media - Mobile */}
              <div className="flex items-center gap-3 lg:hidden">
                {[
                  { href: "https://facebook.com/guardiumtowing", Icon: Facebook },
                  { href: "https://instagram.com/guardiumtowing", Icon: Instagram },
                  { href: "https://twitter.com/guardiumtowing", Icon: Twitter },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-neutral-400 hover:text-[#ce0000] transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>

              {/* Tagline - Desktop */}
              <p className="hidden sm:block text-[10px] lg:text-xs text-neutral-400">
                Proudly serving all of Canada, 24/7
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
