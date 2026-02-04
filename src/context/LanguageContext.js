'use client';
import React, { createContext, useContext, useState } from 'react';

// 1. Translation Data
const translations = {
  en: {
    // Navbar Keys
    product: 'Product',
    pricing: 'Pricing',
    // ... (Add other Navbar keys here)

    // Hero Keys
    heroHeadline1: '#1 AI Shopping',
    heroHeadline2: 'Assistant - Smart',
    heroHeadline3: 'FAQs that Sell',
    heroSubtext:
      'Your visitors have questions. Karley has instant answers. Anticipate buying intent in real time, crush objections, and turn on-page conversations into revenue driving conversions.',
    startTrial: 'Start Free Trial',
    viewDemo: 'View Demo',
    trustedBy: '300+ sites trust Karley',
  },
  bn: {
    // Navbar Keys
    product: 'পণ্য',
    pricing: 'মূল্য',

    // Hero Keys
    heroHeadline1: '#১ এআই শপিং',
    heroHeadline2: 'অ্যাসিস্ট্যান্ট - স্মার্ট',
    heroHeadline3: 'FAQs যা বিক্রি বাড়ায়',
    heroSubtext:
      'আপনার ভিজিটরদের প্রশ্ন আছে। কার্লির কাছে আছে তাৎক্ষণিক উত্তর। রিয়েল টাইমে কেনার আগ্রহ বুঝুন, আপত্তি দূর করুন এবং কনভারসেশনকে বিক্রয়ে রূপান্তর করুন।',
    startTrial: 'ফ্রি ট্রায়াল শুরু করুন',
    viewDemo: 'ডেমো দেখুন',
    trustedBy: '৩০০+ সাইট কার্লিকে বিশ্বাস করে',
  },
  es: {
    heroHeadline1: '#1 Asistente de',
    heroHeadline2: 'Compras IA - FAQs',
    heroHeadline3: 'Inteligentes que Venden',
    heroSubtext:
      'Tus visitantes tienen preguntas. Karley tiene respuestas instantáneas. Anticípate a la intención de compra en tiempo real.',
    startTrial: 'Prueba Gratis',
    viewDemo: 'Ver Demo',
    trustedBy: 'Más de 300 sitios confían en Karley',
  },
  fr: {
    heroHeadline1: '#1 Assistant',
    heroHeadline2: 'Shopping IA - FAQs',
    heroHeadline3: 'Intelligentes qui Vendent',
    heroSubtext:
      "Vos visiteurs ont des questions. Karley a des réponses instantanées. Anticipez l'intention d'achat en temps réel.",
    startTrial: 'Essai Gratuit',
    viewDemo: 'Voir la Démo',
    trustedBy: '300+ sites font confiance à Karley',
  },
};

// 2. Create Context
const LanguageContext = createContext();

// 3. Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = key => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4. Hook to use it
export const useLanguage = () => useContext(LanguageContext);
