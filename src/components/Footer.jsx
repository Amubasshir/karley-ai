'use client';

import React from 'react';
import { Twitter, Linkedin, Github, Disc } from 'lucide-react'; // সোশ্যাল আইকনগুলোর জন্য

const Footer = () => {
  const footerLinks = {
    product: [
      'Features',
      'Integrations',
      'Enterprise',
      'Pricing',
      'Roadmap',
      'Changelog',
      'Feature Request',
      'Use Cases',
      'Status',
    ],
    resources: [
      'Docs & FAQs',
      'Higher Ed',
      'Community',
      'Blog',
      'Hire a Partner',
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Security',
      'Report Misuse',
      'Responsible Use Policy',
      'Accessibility Statement',
    ],
  };

  return (
    <footer className="w-full bg-[#F0F9FF] pt-20 pb-10 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-[1380px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Section - Column 1 & 2 (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="flex items-center gap-2 flex-shrink-0 z-50 h-30 w-30"
            >
              <img
                src="https://i.ibb.co.com/pvm33Rgf/684736d8b4182238dbdfb4e8-karley-3.png"
                alt="Logo"
              />
            </a>

            <p className="text-gray-600 text-[15px] leading-relaxed max-w-sm mb-8">
              karley Ai is the AI-powered platform that lets users build fully
              functioning apps in minutes. Using nothing but natural language,
              karley Ai enables anyone to turn their words into personal
              productivity apps, back-office tools, customer portals, or
              complete enterprise products that are ready to use, no
              integrations required.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-black"
              >
                <Twitter size={20} fill="currentColor" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-black"
              >
                <Disc size={20} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-black"
              >
                <Linkedin size={20} fill="currentColor" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-black"
              >
                <Github size={20} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Links Section - Removed "Company" Column */}

          {/* Product Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm tracking-widest uppercase text-black">
              Product
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.product.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 text-[15px] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm tracking-widest uppercase text-black">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 text-[15px] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm tracking-widest uppercase text-black">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 text-[15px] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t text-center border-gray-300">
          <p className="text-gray-500 text-[15px]">
            © {new Date().getFullYear()} Base44 Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
