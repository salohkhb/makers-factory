import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { useI18n } from '../lib/i18n';

export default function NotFoundPage() {
  const { t } = useI18n();
  return (
    <section className="max-w-xl mx-auto px-4 sm:px-6 py-28 text-center">
      <Seo title={t('meta.notFoundTitle')} />
      <h1 className="font-serif-luxury text-5xl font-semibold text-[#080C34]">{t('notFound.title')}</h1>
      <p className="mt-4 text-[#111424]/70">{t('notFound.text')}</p>
      <Link to="/" className="mt-8 inline-block px-7 py-4 rounded-xl bg-[#080C34] text-white text-sm font-bold hover:bg-[#161C57]">
        {t('notFound.home')}
      </Link>
    </section>
  );
}
