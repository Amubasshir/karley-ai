import React from 'react';

const TrustedBy = () => {
  const logos = [
    { name: 'Qualify.com', icon: <LogoQualify /> },
    { name: 'OnboardFlow', icon: <LogoOnboard /> },
    { name: 'Mighty', icon: <LogoMighty /> },
    { name: 'NP Digital', icon: <LogoNPDigital /> },
    { name: 'Growth Collective', icon: <LogoGrowth /> },
    // Duplicate for seamless loop
    { name: 'Qualify.com', icon: <LogoQualify /> },
    { name: 'OnboardFlow', icon: <LogoOnboard /> },
    { name: 'Mighty', icon: <LogoMighty /> },
    { name: 'NP Digital', icon: <LogoNPDigital /> },
    { name: 'Growth Collective', icon: <LogoGrowth /> },
  ];

  return (
    <section className="w-full py-20 overflow-hidden bg-[#F0F9FF]">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center gap-12">
        {/* 1. FIXED TEXT */}
        <div className="flex-shrink-0 z-10 relative">
          <h3 className="font-bold text-sm tracking-widest leading-tight text-gray-500">
            TRUSTED <br /> BY :
          </h3>
        </div>

        {/* 2. SCROLLING CONTAINER */}
        <div className="flex-1 overflow-hidden relative mask-linear-fade">
          {/* 
            'animate-scroll-left-to-right' class handles the movement.
            The pause logic is now handled in the <style> tag below.
          */}
          <div className="flex w-max gap-24 items-center animate-scroll-left-to-right">
            {logos.map((logo, index) => (
              <div
                key={index}
                // REMOVED: hover:opacity-100, hover:grayscale-0 (Visual hover effects removed)
                // ADDED: cursor-pointer
                className="opacity-60 grayscale cursor-pointer"
              >
                <div className="h-14 w-auto flex items-center text-gray-800">
                  {logo.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes scrollLeftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left-to-right {
          animation: scrollLeftToRight 40s linear infinite;
        }

        /* 
           This acts like "removing keyframes" on hover.
           It freezes the animation exactly where it is.
        */
        .animate-scroll-left-to-right:hover {
          animation-play-state: paused;
        }

        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </section>
  );
};

// --- SVG Logo Placeholders ---

const LogoQualify = () => (
  <span className="text-3xl font-bold font-serif text-gray-900">alify.com</span>
);

const LogoOnboard = () => (
  <div className="flex items-center gap-3">
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-gray-800"
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </svg>
    <span className="text-2xl font-serif italic font-semibold text-gray-900">
      OnboardFlow
    </span>
  </div>
);

const LogoMighty = () => (
  <div className="flex items-center gap-2">
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      className="text-gray-900"
    >
      <path d="M4 16c0-3 2-5 5-5 2 0 3 2 3 2s1-2 3-2c3 0 5 2 5 5v4H4v-4z" />
    </svg>
    <span className="text-3xl font-bold lowercase text-gray-900">mighty</span>
  </div>
);

const LogoNPDigital = () => (
  <div className="flex items-center gap-3">
    <div className="border-2 border-gray-900 px-2 py-1 text-sm font-bold tracking-widest text-gray-900">
      NP
    </div>
    <span className="text-2xl font-semibold text-gray-700">digital</span>
  </div>
);

const LogoGrowth = () => (
  <div className="flex items-center gap-3">
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-gray-800"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <circle cx="12" cy="16" r="3" fill="currentColor" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-bold text-lg text-gray-900">growth</span>
      <span className="font-bold text-lg text-gray-500">collective</span>
    </div>
  </div>
);

export default TrustedBy;
