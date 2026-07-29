"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    question: "Do I need a doctor's referral for physiotherapy?",
    answer: "In most cases, you do not need a doctor's referral to see a physiotherapist. However, if you are claiming through certain insurance providers, they may require a referral. We recommend checking with your insurance provider to be sure."
  },
  {
    question: "What should I wear to my appointment?",
    answer: "Please wear comfortable, loose-fitting clothing that allows the physiotherapist to easily assess and treat the area of concern. For example, if you have knee pain, wearing shorts is ideal."
  },
  {
    question: "How long does a typical session last?",
    answer: "Your initial assessment typically lasts 45-60 minutes to allow for a comprehensive evaluation. Follow-up treatment sessions are generally 45 minutes, ensuring you receive undivided, personalized attention."
  },
  {
    question: "Do you offer home visit services?",
    answer: "Yes, we offer premium home visit physiotherapy services for patients who have difficulty traveling to the clinic. This service is currently available across select areas in Lucknow."
  },
  {
    question: "How many sessions will I need to recover?",
    answer: "The number of sessions varies greatly depending on your specific condition, its severity, and how well you respond to treatment. After your initial assessment, your physiotherapist will discuss a personalized treatment plan and estimated timeline with you."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-brand-bg">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-4">Got Questions?</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-secondary">Frequently Asked Questions</h2>
        </FadeIn>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 lg:px-8 py-6 flex items-center justify-between focus:outline-none group"
                >
                  <h3 className={`text-lg lg:text-xl font-bold transition-colors ${openIndex === index ? 'text-brand-primary' : 'text-brand-secondary group-hover:text-brand-primary'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ml-4 ${openIndex === index ? 'bg-brand-softpink text-brand-primary' : 'bg-gray-50 text-brand-secondary group-hover:bg-brand-softpink/50'}`}>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 lg:px-8 pb-8 text-brand-grey leading-relaxed text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
