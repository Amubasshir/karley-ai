import React from 'react';
import { Play, Sparkles, CornerUpLeft, ArrowUp, Search } from 'lucide-react';

const Hero = () => {
  return (
    // UPDATED: Changed bg-[#0A0A0A] to the Blue Gradient & text-white to text-gray-900
    <section className="min-h-screen bg-gradient-to-b from-[#90C8E8] via-[#C3E4F6] to-[#F0F9FF] text-gray-900 overflow-hidden flex flex-col lg:flex-row">
      {/* --- LEFT COLUMN: Content & Copy --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20 relative z-10">
        <div className="max-w-xl w-full space-y-8">
          {/* Headline */}
          <h1 className="text-5xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-gray-900">
            #1 AI Shopping <br />
            Assistant - Smart <br />
            FAQs that Sell
          </h1>

          {/* Subtext (Updated color for contrast) */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            Your visitors have questions. Karley has instant answers. Anticipate
            buying intent in real time, crush objections, and turn on-page
            conversations into revenue driving conversions - boosted sales &
            more booked calls.
          </p>

          {/* Buttons (Updated colors for light mode) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Button: Black bg for contrast */}
            <button className="bg-black text-white font-semibold rounded-full px-8 py-4 hover:bg-gray-800 transition-colors shadow-lg">
              Start Free Trial
            </button>
            {/* Secondary Button: White bg */}
            <button className="flex items-center gap-2 bg-white border border-white/50 text-gray-900 font-medium rounded-full px-8 py-4 hover:bg-gray-50 transition-colors shadow-sm">
              View Demo
            </button>
          </div>

          {/* Social Proof (Updated colors) */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 20}`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white" // White border to blend
                />
              ))}
            </div>
            <span className="text-gray-600 font-medium">
              300+ sites trust Karley
            </span>
          </div>
        </div>
      </div>

      {/* --- RIGHT COLUMN: Visual/Interactive --- */}
      <div className="w-full lg:w-1/2 relative h-[450px] md:h-[915px]  lg:h-[975px]">
        {/* Background Image Container */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Optional: A subtle blur or overlay to blend the image into the gradient */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1596395811057-d31e5138d82d?q=80&w=2670&auto=format&fit=crop')`,
            }}
          >
            <div className="absolute inset-0 bg-blue-200/20 mix-blend-overlay"></div>
          </div>

          {/* <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#C3E4F6] to-transparent lg:block hidden"></div> */}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <img src="https://i.ibb.co.com/cXkqbb1Z/banner.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

// Helper Component for Chips
const Chip = ({ text, active = false }) => (
  <button
    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${active ? 'bg-black text-white border-black' : 'bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200'}`}
  >
    <Sparkles
      className={`w-3 h-3 ${active ? 'text-white' : 'text-gray-500'}`}
      fill={active ? 'currentColor' : 'none'}
    />
    {text}
  </button>
);

export default Hero;
