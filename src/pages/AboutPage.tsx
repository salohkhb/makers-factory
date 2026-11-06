import React from 'react';
import studio from '../assets/images/studio.jpg';
import { CtaBand } from '../components/Sections';
import Seo from '../components/Seo';
import { useI18n } from '../lib/i18n';

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <Seo title={t('meta.aboutTitle')} description={t('about.title')} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs font-bold text-[#9A7B45]">{t('about.eyebrow')}</p>
          <h1 className="mt-3 font-serif-luxury text-4xl sm:text-5xl font-semibold text-[#080C34] leading-tight">{t('about.title')}</h1>
          <p className="mt-6 text-[#111424]/75 leading-relaxed">{t('about.p1')}</p>
          <p className="mt-4 text-[#111424]/75 leading-relaxed">{t('about.p2')}</p>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#EFEDE6]">
          <img src={studio} alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="bg-white border-y border-[#080C34]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="font-serif-luxury text-4xl font-semibold text-[#080C34]">{t('about.whoTitle')}</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n}>
                <h3 className="font-bold text-[#080C34]">{t(`about.who${n}`)}</h3>
                <p className="mt-1.5 text-sm text-[#111424]/70 leading-relaxed">{t(`about.who${n}Text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
