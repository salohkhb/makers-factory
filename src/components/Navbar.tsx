import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoNavy from '../assets/images/logo_navy.png';
import { whatsappLink } from '../lib/api';
import { useI18n } from '../lib/i18n';
import { Language } from '../types';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'ع' },
  { code: 'en', label: 'EN' },
];

export default function Navbar() {
  const { language, setLanguage, t } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/products', label: t('nav.products') },
    { to: '/how-it-works', label: t('nav.how') },
    { to: '/about', label: t('nav.about') },
  ];

  const languageSwitch = (
    <div className="flex items-center gap-1" role="group" aria-label={t('nav.language')}>
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={`min-w-9 h-9 px-2 rounded-lg text-xs font-bold transition-colors ${
            language === code ? 'bg-[#080C34] text-white' : 'text-[#080C34]/70 hover:bg-[#080C34]/5'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-[#080C34] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-center gap-3 text-center">
          <span>{t('bar.text')}</span>
          <a
            href={whatsappLink(t('whatsapp.default'))}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline font-bold text-[#C8A66A] hover:underline"
          >
            {t('bar.cta')}
          </a>
        </div>
      </div>

      <nav className="bg-[#FAF9F5]/95 backdrop-blur border-b border-[#080C34]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" aria-label="MAKERS" onClick={() => setOpen(false)} className="shrink-0">
            <img src={logoNavy} alt="MAKERS" width={592} height={138} className="h-9 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive ? 'text-[#080C34]' : 'text-[#080C34]/60 hover:text-[#080C34]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {languageSwitch}
            <Link
              to="/start"
              className="px-5 py-2.5 rounded-xl bg-[#080C34] text-white text-sm font-bold hover:bg-[#161C57] transition-colors"
            >
              {t('nav.cta')}
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden w-11 h-11 -me-2 flex items-center justify-center text-[#080C34]"
            aria-label={t('nav.menu')}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-[#080C34]/10 px-4 py-4 space-y-1 bg-[#FAF9F5]">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-semibold text-[#080C34]"
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-2">{languageSwitch}</div>
            <Link
              to="/start"
              onClick={() => setOpen(false)}
              className="block mt-3 px-5 py-3.5 rounded-xl bg-[#080C34] text-white text-center text-sm font-bold"
            >
              {t('nav.cta')}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
