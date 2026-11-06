import React from 'react';
import { CtaBand, ModelSection, SectionHeading, StepsList } from '../components/Sections';
import Seo from '../components/Seo';
import { useI18n } from '../lib/i18n';

export default function HowItWorksPage() {
  const { t } = useI18n();
  return (
    <>
      <Seo title={t('meta.howTitle')} description={t('how.subtitle')} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading eyebrow={t('how.eyebrow')} title={t('how.title')} subtitle={t('how.subtitle')} />
        <div className="mt-12">
          <StepsList />
        </div>
      </section>

      <ModelSection />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="font-serif-luxury text-4xl font-semibold text-[#080C34]">{t('how.faqTitle')}</h2>
        <dl className="mt-8 divide-y divide-[#080C34]/10">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="py-5">
              <dt className="font-bold text-[#080C34]">{t(`how.q${n}`)}</dt>
              <dd className="mt-2 text-[#111424]/70 leading-relaxed">{t(`how.a${n}`)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaBand />
    </>
  );
}
