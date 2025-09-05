"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type faqsType = {
  question: string;
  answer: string;
};

const faqs = [
  {
    question: "What makes your ERP system special?",
    answer:
      "Our ERP system is tailored to your workflow and offers full integration across departments like finance, HR, inventory, and more.",
  },
  {
    question: "Who can benefit from your Hotel Booking System?",
    answer:
      "Our system is perfect for hotels, lodges, and resorts of all sizes. It simplifies room reservations, payments, and guest management.",
  },
  {
    question: "Is coding needed to use these systems?",
    answer:
      "No coding skills are required to operate our solutions — the interfaces are built to be intuitive and user-friendly.",
  },
  {
    question: "Can the Hospital Management System scale for large clinics?",
    answer:
      "Absolutely. It supports multi-department workflows, electronic medical records, pharmacy, billing, and more.",
  },
  {
    question: "Can I host these systems on cloud or on-premise?",
    answer:
      "Yes! We offer flexible deployment options depending on your infrastructure and compliance requirements.",
  },
];

export default function FAQSection({ faqs }: { faqs: faqsType[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Optional dotted background */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-[radial-gradient(circle,_1px,_transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2
            id="solutions-faq"
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Have questions? <br />{" "}
            <span className="text-gray-500">Find answers.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Got more questions? Reach out to our team at{" "}
            <a href="mailto:support@yourcompany.com" className="underline">
              support@nxtsoftwares.com
            </a>
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 dark:border-gray-700 pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left font-medium text-gray-800 dark:text-gray-100 text-lg focus:outline-none"
                onClick={() => toggleIndex(index)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-600 dark:text-gray-400 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
