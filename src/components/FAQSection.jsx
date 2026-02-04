'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: 'What is Karley.ai?',
    answer:
      'Karley.ai is an advanced AI platform designed to automate complex workflows and provide intelligent insights for businesses, allowing teams to focus on high-impact tasks.',
  },
  {
    question: 'Do I need coding experience to use Karley.ai?',
    answer:
      'No, Karley.ai is built with a user-friendly interface that requires zero coding knowledge. You can set up and deploy AI agents using our intuitive dashboard.',
  },
  {
    question: 'What types of applications can I build with Karley.ai?',
    answer:
      'You can build everything from automated customer support bots and data analysis tools to complex internal process automation tailored to your specific industry needs.',
  },
  {
    question: 'What kind of integrations does Karley.ai support?',
    answer:
      'Karley.ai supports seamless integration with popular tools like Slack, Microsoft Teams, Salesforce, Zapier, and various CRM systems through our robust API.',
  },
  {
    question: 'How secure is my data with Karley.ai?',
    answer:
      'Security is our top priority. Karley.ai uses enterprise-grade encryption (AES-256) and follows strict SOC2 compliance to ensure your business data remains private and protected.',
  },
  {
    question: 'Can I customize AI workflows in Karley.ai?',
    answer:
      'Yes, Karley.ai allows full customization of workflows. You can define triggers, conditions, and actions to build AI processes that match your exact business requirements.',
  },
  {
    question: 'Does Karley.ai offer real-time analytics?',
    answer:
      'Absolutely. Karley.ai provides real-time performance tracking and analytics dashboards so you can monitor how your AI agents are performing and optimize results instantly.',
  },
  {
    question: 'Is Karley.ai suitable for small businesses?',
    answer:
      'Yes, Karley.ai is designed to scale. Whether you are a startup or an enterprise, the platform adapts to your needs with flexible plans and automation tools.',
  },
  {
    question: 'What kind of support does Karley.ai provide?',
    answer:
      'We offer comprehensive support including documentation, video tutorials, live chat assistance, and dedicated customer success managers for business plans.',
  },
];

const FAQSection = () => {
  // জাভাস্ক্রিপ্ট এর জন্য টাইপ বাদ দেওয়া হয়েছে
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full py-20 px-6 bg-[#F0F9FF]">
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
        {/* Left Side: Heading */}
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-black leading-[1.1] tracking-tight">
            Frequently <br /> asked questions
          </h2>
        </div>

        {/* Right Side: Accordion */}
        <div className="border-t border-gray-200">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full py-8 flex justify-between items-center text-left group transition-all"
              >
                <span className="text-xl md:text-2xl font-medium text-gray-900 pr-8">
                  {faq.question}
                </span>

                {/* Plus Icon Animation */}
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-8 h-8 text-black" strokeWidth={1.5} />
                </motion.div>
              </button>

              {/* Answer Animation */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-lg text-gray-600 leading-relaxed max-w-xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
