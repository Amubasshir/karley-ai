import React from 'react';
import {
  CheckCircle,
  MoreHorizontal,
  Search,
  Filter,
  MessageSquare,
} from 'lucide-react';

const StackedCards = () => {
  // কার্ড এবং টেক্সট ডাটা
  const cards = [
    {
      id: 1,
      step: '01 / 03 ',
      text: 'Buyer Confidence',
      title: 'Give Customers the Clarity They Need to Buy with Confidence.',
      description:
        'Karley, the leading AI Shopping Assistant, delivers the critical information customers need to make confident, informed buying decisions.',
      bgColor: 'bg-[#111111]', // Dark Card Background
      textColor: 'text-white',
      content: <CardContentOne />,
    },
    {
      id: 2,
      step: '02 / 03',
      text: 'Drive Conversions',
      title: 'Predicts the Questions That Unlock Buying Decisions.',
      description:
        'Karley generates tailored, conversion-optimized questions for every product automatically, Karley guides customers through their buying journey—removing doubt, building confidence, and unlocking more sales.',
      bgColor: 'bg-gradient-to-br from-[#FF9A9E] to-[#FECFEF]', // Gradient Background
      textColor: 'text-gray-900',
      content: <CardContentTwo />,
    },
    {
      id: 3,
      step: '03 / 03',
      text: 'Personalized UX',
      title: 'Turn AI into Personalized Shopping That Converts.',
      description:
        'Karley, your AI Shopping Assistant, delivers tailored answers and smart product recommendations to guide every shopper—optimizing their journey and driving more sales automatically.',
      bgColor: 'bg-[#F0F9FF]', // Light Blue Background
      textColor: 'text-gray-900',
      content: <CardContentThree />,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#F0F9FF] via-[#F0F9FF] to-[#90C8E8] py-6 md:py-10 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* লুপিং কার্ডস */}
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="sticky top-24 min-h-[600px] flex items-start justify-center py-10 "
            // 'top-24' দেওয়া হয়েছে যাতে Navbar এর নিচে আটকে থাকে
          >
            {/* মেইন কন্টেইনার (সাদা ব্যাকগ্রাউন্ড যাতে আগের কার্ড ঢেকে যায়) */}
            <div className="w-full bg-white rounded-3xl shadow-none border border-transparent overflow-hidden flex flex-col lg:flex-row gap-10 lg:gap-20">
              {/* --- LEFT SIDE: TEXT --- */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center py-10 lg:py-20 space-y-6 px-6 lg:px-12">
                <span className="text-xl font-medium text-gray-500 tracking-widest">
                  {card.step}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                  {card.text}
                </h3>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {card.title}
                </h2>
                <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-md">
                  {card.description}
                </p>

                <button className="hover:bg-gray-400 border border-gray-400 px-4 py-2 rounded-2xl text-black font-semibold w-max mt-4 transition-colors">
                  Start Free Trial
                </button>
              </div>

              {/* --- RIGHT SIDE: VISUAL CARD --- */}
              <div
                className={`w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl ${card.bgColor} ${card.textColor} p-8 relative md:min-h-[500px] flex flex-col`}
              >
                {card.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- কার্ড ১ এর ডিজাইন (Dark UI) ---
const CardContentOne = () => (
  <div className="flex flex-col h-full font-sans">
    <img
      src="https://i.ibb.co.com/1JmvqcPs/68a353a8308077778322e005-1of3.jpg"
      alt="Profile"
      className=""
    />
  </div>
);

// --- কার্ড ২ এর ডিজাইন (Chat/Notification UI) ---
const CardContentTwo = () => (
  <div className="relative h-full flex items-center justify-center">
    {/* Floating Chat Card */}
    <img
      src="https://i.ibb.co.com/v6qkRCQc/68a354a263ee0a1e2831015a-2of3.jpg"
      alt=""
    />
  </div>
);

// --- কার্ড ৩ এর ডিজাইন (Graph/Stats UI) ---
const CardContentThree = () => (
  <div className="h-full flex flex-col justify-center items-center">
    <img
      src="https://i.ibb.co.com/93yz9Q7c/68a35741130620a763fbf2a9-3of3.jpg"
      alt=""
    />
  </div>
);

export default StackedCards;
