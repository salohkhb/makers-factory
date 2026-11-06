import React from 'react';
import SampleForm from '../components/SampleForm';
import Seo from '../components/Seo';
import { useI18n } from '../lib/i18n';

export default function StartPage() {
  const { t } = useI18n();
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
      <Seo title={t('meta.startTitle')} description={t('form.subtitle')} />
      <p className="text-xs font-bold text-[#9A7B45]">{t('form.eyebrow')}</p>
      <h1 className="mt-3 font-serif-luxury text-4xl sm:text-5xl font-semibold text-[#080C34] leading-tight">{t('form.title')}</h1>
      <p className="mt-4 text-[#111424]/70 leading-relaxed">{t('form.subtitle')}</p>
      <div className="mt-8">
        <SampleForm />
      </div>
    </section>
  );
}
