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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#ff7a00]"
    >
      {/* Ambient Glow */}
      <div className="absolute w-[1000px] h-[1000px] bg-orange-400/30 blur-3xl -left-40 -top-40" />

      <motion.div
        custom={0}
        variants={shapeVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute w-[1500px] h-[1500px] bg-[#ff8a1f]  rounded-tr-full rounded-br-full left-[0px] top-[-170px] opacity-90 blur-[2px]"
      />

      <motion.div
        custom={0}
        variants={shapeVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute w-[1500px] h-[1500px] bg-[#ee9745]  rounded-tr-full rounded-br-full -left-[340px] top-[-120px] opacity-90 blur-[2px]"
      />
      {/* SHAPE 2 */}
      <motion.div
        custom={1}
        variants={shapeVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute w-[1250px] h-[1250px] bg-[#ffd4a8] rounded-tr-full rounded-br-full -bottom-[515px] -left-[340px] opacity-80"
      />
      {/* SHAPE 3 */}
      <motion.div
        custom={2}
        variants={shapeVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute w-[1150px] h-[1150px] bg-[#ffe9cf]  rounded-tr-full rounded-br-full -bottom-[560px] -left-[563px] opacity-60"
      />
      {/* Optional center content placeholder */}
      <div className="relative z-10 text-center text-black">
        {/* Your card / hero content goes here */}

        {/* CENTER CARD */}
        <div className="relative bg-[#fdf6ea] w-[620px] max-w-[92%] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-16 py-20 text-center">
          <h1 className="text-[54px] font-semibold leading-[1.08] text-black">
            So, what are <br /> we building?
          </h1>

          <button className="mt-12 inline-flex items-center bg-black text-white rounded-full pl-9 pr-3 py-3 text-lg font-medium">
            Get started
            <span className="ml-5 flex items-center justify-center w-11 h-11 rounded-full bg-[#d9f99d] text-black text-xl">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
