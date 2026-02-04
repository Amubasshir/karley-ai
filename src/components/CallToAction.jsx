'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function HeroBuildLeftFocus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.35 });

  const shapeVariant = {
    hidden: { y: 350, x: -250, opacity: 0 },
    visible: i => ({
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.25,
        duration: 1.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="relative min-h-[77vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#ff7a00]"
    >
      {/* Ambient Glow - Adjusted for mobile */}
      <div className="absolute w-[300px] h-[300px] md:w-[1000px] md:h-[1000px] bg-orange-400/30 blur-3xl -left-20 -top-20 md:-left-40 md:-top-40" />

      {/* BACKGROUND SHAPES - Optimized with responsive offsets */}
      <motion.div
        custom={0}
        variants={shapeVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute w-[800px] h-[800px] md:w-[1500px] md:h-[1500px] bg-[#ff8a1f] rounded-tr-full rounded-br-full left-[-100px] md:left-[0px] top-[-100px] md:top-[-170px] opacity-90 blur-[2px]"
      />

      <motion.div
        custom={0}
        variants={shapeVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute w-[800px] h-[800px] md:w-[1500px] md:h-[1500px] bg-[#ee9745] rounded-tr-full rounded-br-full -left-[200px] md:-left-[340px] top-[-80px] md:top-[-120px] opacity-90 blur-[2px]"
      />

      {/* SHAPE 2 */}
      <motion.div
        custom={1}
        variants={shapeVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute w-[700px] h-[700px] md:w-[1250px] md:h-[1250px] bg-[#ffd4a8] rounded-tr-full rounded-br-full -bottom-[200px] md:-bottom-[515px] -left-[200px] md:-left-[340px] opacity-80"
      />

      {/* SHAPE 3 */}
      <motion.div
        custom={2}
        variants={shapeVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute w-[600px] h-[600px] md:w-[1150px] md:h-[1150px] bg-[#ffe9cf] rounded-tr-full rounded-br-full -bottom-[250px] md:-bottom-[560px] -left-[300px] md:-left-[563px] opacity-60"
      />

      {/* CONTENT AREA */}
      <div className="relative z-10 w-full flex justify-center px-4">
        {/* CENTER CARD - Responsive Width and Padding */}
        <div className="relative bg-[#fdf6ea] w-full max-w-[92%] sm:max-w-[540px] md:max-w-[620px] rounded-[32px] md:rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 text-center">
          {/* Responsive Font Size */}
          <h1 className="text-[32px] sm:text-[42px] md:text-[54px] font-semibold leading-[1.2] md:leading-[1.08] text-black">
            So, what are <br className="hidden sm:block" /> we building?
          </h1>

          {/* Responsive Button */}
          <button className="mt-8 md:mt-12 inline-flex items-center bg-black text-white rounded-full pl-6 pr-2 py-2 md:pl-9 md:pr-3 md:py-3 text-base md:text-lg font-medium group hover:bg-zinc-800 transition-colors">
            Get started
            <span className="ml-4 md:ml-5 flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#d9f99d] text-black text-lg md:text-xl">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
