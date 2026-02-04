'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const features = [
    'All core features',
    'Built-in integrations',
    'Authentication system',
    'Database functionality',
  ];

  return (
    <section className="py-20 px-4 bg-[#F0F9FF] min-h-screen flex items-center">
      <div className="max-w-[1380px] mx-auto w-full">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Intro Block - Light Grey/White */}
          <div className="bg-[#F0F9FF] p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[500px]">
            <div>
              <h2 className="text-[2.75rem] font-semibold text-gray-900 leading-[1.1] tracking-tight">
                Pricing plans <br /> for every need
              </h2>
              <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-[240px]">
                Scale as you go with plans designed to match your growth.
              </p>
            </div>

            {/* Logo/Icon Box */}
            <div className="h-24 w-24 bg-[#F1F1F1] rounded-2xl flex items-center justify-center relative shadow-sm">
              <div className="grid grid-cols-3 gap-1.5">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2.5 w-2.5 rounded-full ${i === 4 ? 'bg-[#FF8A65] scale-125' : 'bg-[#FFCCBC]'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 2. Start for Free Card - Sage/Grey-Green Tint */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#EFF1F0] p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[500px] relative overflow-hidden"
          >
            {/* Bottom Glow for Free card */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#D6E6A5]/30 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-3xl font-medium text-gray-900">
                Start for free
              </h3>
              <div className="mt-8 space-y-4">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Get access to:
                </p>
                {features.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <Check className="w-5 h-5 text-[#E67E22]" strokeWidth={3} />
                    <span className="text-[15px] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all z-10">
              Start Free Trial
            </button>
          </motion.div>
          {/* 4. Paid Plans Card - Pink/Lavender Gradient */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-b from-[#F6E9F6] via-[#F6E9F6] to-white p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[500px] relative overflow-hidden"
          >
            {/* Signature Orange Glow/Line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FFCC80]/60 via-[#FFCC80]/20 to-transparent pointer-events-none" />
            {/* <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#FF8A65]" /> */}

            <div className="relative z-10">
              <h3 className="text-3xl font-medium text-gray-900">
                Paid plans from
              </h3>
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">$20</span>
                <span className="text-gray-400 text-xl ml-1">/mo</span>
              </div>
              <p className="mt-6 text-gray-500 text-[15px] leading-relaxed">
                Upgrade as you go for more credits, more features, and more
                support.
              </p>
            </div>
            <button className="w-full py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all z-10">
              Get Started
            </button>
          </motion.div>
          {/* 3. Pro Plan Card - Pure White (Standard highlight) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[500px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-medium text-gray-900">Pro Plan</h3>
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">$49</span>
                <span className="text-gray-400 text-xl ml-1">/mo</span>
              </div>
              <p className="mt-6 text-gray-500 text-[15px] leading-relaxed">
                Perfect for growing teams who need more power and custom
                branding.
              </p>
            </div>
            <button className="w-full py-4 bg-[#FF7043] text-white rounded-full text-lg font-medium hover:bg-[#F4511E] transition-all shadow-lg shadow-orange-100 z-10">
              See all plans
            </button>
          </motion.div>
        </div>

        {/* Footer Bar - Light Blue/Teal Grey */}
        <div className="mt-4 bg-[#E2EBEA] py-5 px-10 rounded-2xl flex justify-center items-center">
          <p className="text-[15px] text-gray-600 font-medium flex items-center gap-2">
            Looking for enterprise solutions?
            <button className="text-gray-900 font-bold flex items-center hover:underline ml-1">
              Contact sales <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
