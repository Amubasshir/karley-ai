'use client';
import React, { useState } from 'react';
import {
  ChevronDown,
  Globe,
  BookOpen,
  MessageSquare,
  FileText,
  Users,
  Layout,
  Zap,
  List,
  GitPullRequest,
  ArrowRight,
  Menu,
  X,
  Check,
} from 'lucide-react';

// Import shared context
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const { language, setLanguage, t } = useLanguage();

  const toggleMobileDropdown = label => {
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
  };

  // --- ARRAYS OF KEYS (Not hardcoded text) ---
  const categoryKeys = [
    'Productivity',
    'Education',
    'Entertainment',
    'Health & Wellness',
    'E-commerce & Retail',
    'Finance',
  ];

  const roleKeys = [
    'Product Management',
    'Operations',
    'Marketing & Sales Automation',
    'HR & Recruitment',
    'Dev Productivity',
    'Business Intelligence & Analytics',
  ];

  return (
    <nav className="w-full bg-[#F0F9FF] border-b border-gray-200 sticky top-0 z-50 font-sans shadow-sm">
      <div className="max-w-[1380px] mx-auto px-4 h-20 flex items-center justify-between">
        {/* --- Logo --- */}
        <a
          href="/"
          className="flex items-center gap-2 flex-shrink-0 z-50 h-30 w-30"
        >
          <img
            src="https://i.ibb.co.com/pvm33Rgf/684736d8b4182238dbdfb4e8-karley-3.png"
            alt="Logo"
          />
        </a>

        {/* --- DESKTOP Navigation Links --- */}
        <ul className="hidden lg:flex items-center gap-1 h-full">
          {/* 1. PRODUCT */}
          <NavItem label={t('product')}>
            <div className="w-[600px] grid grid-cols-3 gap-8">
              <div className="space-y-6">
                <MenuLink
                  icon={<List className="w-5 h-5" />}
                  title={t('features')}
                  desc={t('featuresDesc')}
                />
                <MenuLink
                  icon={<GitPullRequest className="w-5 h-5" />}
                  title={t('roadmap')}
                  desc={t('roadmapDesc')}
                />
              </div>
              <div className="space-y-6">
                <MenuLink
                  icon={<Zap className="w-5 h-5" />}
                  title={t('integrations')}
                  desc={t('integrationsDesc')}
                />
                <MenuLink
                  icon={<Layout className="w-5 h-5" />}
                  title={t('templates')}
                  desc={t('templatesDesc')}
                />
              </div>
              <div className="space-y-6">
                <MenuLink
                  icon={<FileText className="w-5 h-5" />}
                  title={t('changelog')}
                  desc={t('changelogDesc')}
                />
              </div>
            </div>
          </NavItem>

          {/* 2. USE CASES (Dynamic List) */}
          <NavItem label={t('useCases')}>
            <div className="w-[500px]">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-bold text-gray-400 tracking-wider mb-4 uppercase">
                    {t('category')}
                  </h3>
                  <ul className="space-y-3">
                    {/* Mapping over keys and translating them */}
                    {categoryKeys.map(key => (
                      <li key={key}>
                        <a
                          href="#"
                          className="text-sm text-gray-700 hover:text-black block font-medium"
                        >
                          {t(key)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-400 tracking-wider mb-4 uppercase">
                    {t('roles')}
                  </h3>
                  <ul className="space-y-3">
                    {/* Mapping over keys and translating them */}
                    {roleKeys.map(key => (
                      <li key={key}>
                        <a
                          href="#"
                          className="text-sm text-gray-700 hover:text-black block font-medium"
                        >
                          {t(key)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="flex items-center text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                >
                  {t('See all categories')}{' '}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </NavItem>

          {/* 3. RESOURCES */}
          <NavItem label={t('resources')}>
            <div className="w-[380px] grid grid-cols-2">
              <div className="space-y-6">
                <MenuLink
                  icon={<BookOpen className="w-5 h-5" />}
                  title={t('docs')}
                  desc={t('docsDesc')}
                />
                <MenuLink
                  icon={<MessageSquare className="w-5 h-5" />}
                  title={t('community')}
                  desc={t('communityDesc')}
                />
              </div>
              <div className="space-y-6">
                <MenuLink
                  icon={<FileText className="w-5 h-5" />}
                  title={t('blog')}
                  desc={t('blogDesc')}
                />
                <MenuLink
                  icon={<Users className="w-5 h-5" />}
                  title={t('hire')}
                  desc={t('hireDesc')}
                />
              </div>
            </div>
          </NavItem>

          <li className="h-full flex items-center px-4">
            <a
              href="#"
              className="text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('pricing')}
            </a>
          </li>
          <li className="h-full flex items-center px-4">
            <a
              href="#"
              className="text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('enterprise')}
            </a>
          </li>
        </ul>

        {/* --- DESKTOP Right Actions --- */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative group py-4">
            <button className="text-gray-900 hover:text-gray-600 transition-colors cursor-pointer flex items-center gap-1">
              <Globe className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <div className="absolute top-full right-0 w-48 bg-white border border-gray-100 shadow-xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="text-xs font-bold text-gray-400 px-3 py-2 uppercase tracking-wider">
                Select Language
              </div>
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                    language === lang.code
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{lang.flag}</span> {lang.name}
                  </span>
                  {language === lang.code && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>
          <a
            href="#"
            className="bg-[#E4FA9E] hover:bg-[#D7F580] text-gray-900 font-semibold px-6 py-2.5 rounded-full border border-green-200 shadow-sm transition-all text-sm cursor-pointer"
          >
            {t('startTrial')}
          </a>
        </div>

        {/* --- MOBILE Hamburger Button --- */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            className="text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto z-40 pb-10">
          <div className="flex flex-col p-4 space-y-1">
            <MobileNavItem
              label={t('product')}
              isOpen={activeMobileDropdown === 'Product'}
              onClick={() => toggleMobileDropdown('Product')}
            >
              <div className="space-y-4 pl-2">
                <MenuLink
                  icon={<List className="w-5 h-5" />}
                  title={t('features')}
                  desc=""
                />
                <MenuLink
                  icon={<GitPullRequest className="w-5 h-5" />}
                  title={t('roadmap')}
                  desc=""
                />
                <MenuLink
                  icon={<Zap className="w-5 h-5" />}
                  title={t('integrations')}
                  desc=""
                />
                <MenuLink
                  icon={<Layout className="w-5 h-5" />}
                  title={t('templates')}
                  desc=""
                />
              </div>
            </MobileNavItem>

            <MobileNavItem
              label={t('useCases')}
              isOpen={activeMobileDropdown === 'Use Cases'}
              onClick={() => toggleMobileDropdown('Use Cases')}
            >
              <div className="pl-2 space-y-4">
                <div className="font-semibold text-gray-900 text-sm">
                  {t('category')}
                </div>
                <ul className="pl-4 space-y-2 border-l border-gray-200">
                  {/* Dynamic Mobile Categories */}
                  {categoryKeys.map(key => (
                    <li key={key} className="text-sm text-gray-600">
                      {t(key)}
                    </li>
                  ))}
                </ul>
                <div className="font-semibold text-gray-900 text-sm pt-2">
                  {t('roles')}
                </div>
                <ul className="pl-4 space-y-2 border-l border-gray-200">
                  {/* Dynamic Mobile Roles */}
                  {roleKeys.map(key => (
                    <li key={key} className="text-sm text-gray-600">
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>
            </MobileNavItem>

            <MobileNavItem
              label={t('resources')}
              isOpen={activeMobileDropdown === 'Resources'}
              onClick={() => toggleMobileDropdown('Resources')}
            >
              <div className="space-y-4 pl-2">
                <MenuLink
                  icon={<BookOpen className="w-5 h-5" />}
                  title={t('docs')}
                  desc=""
                />
                <MenuLink
                  icon={<MessageSquare className="w-5 h-5" />}
                  title={t('community')}
                  desc=""
                />
                <MenuLink
                  icon={<FileText className="w-5 h-5" />}
                  title={t('blog')}
                  desc=""
                />
                <MenuLink
                  icon={<Users className="w-5 h-5" />}
                  title={t('hire')}
                  desc=""
                />
              </div>
            </MobileNavItem>

            <a
              href="#"
              className="block px-4 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              {t('pricing')}
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              {t('enterprise')}
            </a>

            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3 px-4">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-500 uppercase">
                  {t('regionLang')}
                </span>
                <div className="flex gap-2 flex-wrap">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`px-3 py-1 text-sm border rounded-md ${language === lang.code ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="#"
                className="bg-[#E4FA9E] text-center text-gray-900 font-semibold px-6 py-3 rounded-full border border-green-200 shadow-sm mt-2"
              >
                {t('startTrial')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Sub-Components ---
const NavItem = ({ label, children }) => {
  return (
    <li className="group h-full flex items-center relative px-4">
      <button className="flex items-center gap-1 text-[15px] font-medium text-gray-700 group-hover:text-gray-900 transition-colors outline-none h-full">
        {label}
        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 overflow-hidden">
          {children}
        </div>
      </div>
    </li>
  );
};

const MobileNavItem = ({ label, isOpen, onClick, children }) => {
  return (
    <div className="block">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-1 bg-gray-50 rounded-b-lg mx-2 mb-2">
          {children}
        </div>
      )}
    </div>
  );
};

const MenuLink = ({ icon, title, desc }) => {
  return (
    <a
      href="#"
      className="flex gap-4 group/item hover:bg-gray-50 -mx-3 p-3 rounded-lg transition-colors"
    >
      <div className="w-8 h-8 flex-shrink-0 text-gray-600 group-hover/item:text-black">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-gray-900 text-[15px]">{title}</div>
        {desc && (
          <div className="text-sm text-gray-500 mt-0.5 leading-relaxed">
            {desc}
          </div>
        )}
      </div>
    </a>
  );
};

export default Navbar;
