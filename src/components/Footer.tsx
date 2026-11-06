import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/images/logo_white.png';
import { CONTACT_EMAIL, INSTAGRAM_URL, whatsappLink } from '../lib/api';
import { useI18n } from '../lib/i18n';
import { PRODUCTS } from '../lib/products';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-[#080C34] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logoWhite} alt="MAKERS" width={592} height={138} className="h-10 w-auto" />
          <p className="mt-4 text-sm leading-relaxed">{t('footer.text')}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">{t('footer.pages')}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/how-it-works" className="hover:text-white">{t('nav.how')}</Link></li>
            <li><Link to="/about" className="hover:text-white">{t('nav.about')}</Link></li>
            <li><Link to="/start" className="hover:text-white">{t('nav.cta')}</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">{t('footer.productsTitle')}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {PRODUCTS.map(({ id }) => (
              <li key={id}>
                <Link to={`/products/${id}`} className="hover:text-white">{t(`products.items.${id}.name`)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">{t('footer.contact')}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={whatsappLink(t('whatsapp.default'))} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-white">
                <MessageCircle size={16} className="shrink-0" />
                <span dir="ltr">+213 662 25 05 26</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 hover:text-white break-all">
                <Mail size={16} className="shrink-0" />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-white">
                <Instagram size={16} className="shrink-0" />
                <span dir="ltr">@makers.label</span>
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={16} className="shrink-0" />
              {t('footer.location')}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 pb-24 sm:pb-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} MAKERS. {t('footer.rights')}</span>
          <span>{t('footer.photos')}</span>
        </div>
      </div>
    </footer>
  );
}
