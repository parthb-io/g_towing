"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { number: 1, title: "Request a Tow" },
  { number: 2, title: "Get a Fast Response" },
  { number: 3, title: "Safe Vehicle Transport" },
  { number: 4, title: "Back on the Road" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const arrowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export function ProcessBanner() {
  return (
    <section className="bg-[#CE0000] py-6 md:py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <Link href="/book" className="block">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 cursor-pointer"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex items-center gap-4 md:gap-6 lg:gap-8"
                variants={stepVariants}
              >
                {/* Step Item */}
                <motion.div
                  className="flex items-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Step Badge - First step has pulse animation */}
                  <motion.span
                    className={`inline-flex items-center justify-center px-3 py-1.5 bg-gray-100 text-[#CE0000] text-xs font-bold rounded-full whitespace-nowrap shadow-md ${
                      step.number === 1 ? "ring-2 ring-gray-100/30 ring-offset-2 ring-offset-[#CE0000]" : ""
                    }`}
                    animate={
                      step.number === 1
                        ? {
                            scale: [1, 1.05, 1],
                          }
                        : undefined
                    }
                    transition={
                      step.number === 1
                        ? {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut" as const,
                          }
                        : undefined
                    }
                  >
                    Step {step.number}
                  </motion.span>

                  {/* Step Title */}
                  <span className="text-gray-200 font-medium text-sm md:text-base whitespace-nowrap group-hover:text-gray-700 transition-colors">
                    {step.title}
                  </span>
                </motion.div>

                {/* Arrow (not after last step) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:flex items-center text-gray-200/70"
                    variants={arrowVariants}
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                      delay: index * 0.3,
                    }}
                  >
                    <ArrowRight className="h-5 w-5" strokeWidth={2} />
                  </motion.div>
                )}

                {/* Mobile Connector Line (not after last step) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="md:hidden w-px h-4 bg-gray-900/30"
                    variants={arrowVariants}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
