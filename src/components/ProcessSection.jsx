'use client';

import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://i.ibb.co.com/DHd14qf2/1-Inventory-Management-App.avif',
  'https://i.ibb.co.com/bgzZNRRr/2-Finances.avif',
  'https://i.ibb.co.com/bMtCX4XD/3-Treks-Planner-App.avif',
  'https://i.ibb.co.com/VcTQ3mvN/4-Meal-Planner-App.avif',
  'https://i.ibb.co.com/Z120Jt6p/5-Learning-hub.avif',
];

const ProcessSection = () => {
  return (
    <section className="relative w-full py-12 md:py-24 bg-[#F0F9FF] overflow-hidden">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute h-full w-full bg-[radial-gradient(#000000_2.5px,transparent_2px)] [background-size:60px_60px] opacity-[0.15]"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent, black, transparent)',
          }}
        ></div>
      </div>

      <div className="max-w-full mx-auto relative z-10 flex flex-col items-center">
        {/* Button Animation Section */}
        <div className="relative flex items-center justify-center h-12 w-full mb-8 md:mb-16 px-4 md:px-10">
          {/* Animated Line - Responsive Width & Padding */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{
              width: 'calc(100% - 40px)',
              maxWidth: 300,
              opacity: 1,
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute h-[1px] bg-gray-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          {/* Prompt Bubble */}
          <motion.div
            initial={{ x: 20 }}
            whileInView={{ x: -65 }} // মোবাইলে ওভারল্যাপ এড়াতে দূরত্ব কমানো হয়েছে
            md={{ whileInView: { x: -100 } }} // বড় স্ক্রিনে দূরত্ব বাড়বে
            viewport={{ once: true }}
            className="bg-gray-200/80 backdrop-blur-sm border border-gray-300 px-4 py-2 md:px-8 md:py-2.5 rounded-full shadow-sm z-10 text-gray-700 text-xs md:text-base font-medium"
            transition={{ duration: 1, ease: 'circOut' }}
          >
            Prompt
          </motion.div>

          {/* Application Bubble */}
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ x: 65 }}
            md={{ whileInView: { x: 100 } }}
            viewport={{ once: true }}
            className="bg-orange-500 border border-orange-600 px-4 py-2 md:px-8 md:py-2.5 rounded-full shadow-lg z-10 text-white text-xs md:text-base font-semibold"
            transition={{ duration: 1, ease: 'circOut' }}
          >
            Application
          </motion.div>
        </div>

        {/* Images Section 
            - 'flex' ensures row layout on all devices
            - Mobile: Only first 2 images visible (Hidden after index 1)
            - Desktop: All images visible (md:block)
        */}
        <div className="w-full flex justify-center">
          <div className="flex w-full md:w-max justify-center overflow-hidden">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative overflow-hidden border-r border-gray-100 last:border-r-0 flex-shrink-0
                  /* Mobile: ২টা দেখাবে, বাকিগুলো হাইড */
                  ${index > 1 ? 'hidden md:block' : 'block'} 
                  /* sizing */
                  w-1/2 md:w-[19.8vw] h-[60vw] md:h-[20vw]
                `}
              >
                <img
                  src={img}
                  alt={`Dashboard ${index}`}
                  className="w-full h-full object-cover"
                />

                {/* White Overlay Animation */}
                <motion.div
                  initial={{ y: '0%' }}
                  whileInView={{ y: '-100%' }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-white z-20 pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
