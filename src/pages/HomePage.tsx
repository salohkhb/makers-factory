import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import branding from '../assets/images/branding.jpg';
import tshirtPrint from '../assets/images/tshirt-print.jpg';
import { CtaBand, ModelSection, ProductGrid, SectionHeading, StepsList } from '../components/Sections';
import Seo from '../components/Seo';
import { useI18n } from '../lib/i18n';

export default function HomePage() {
  const { t } = useI18n();
  const facts = [1, 2, 3];

  return (
    <>
      <Seo title={t('meta.homeTitle')} description={t('meta.homeDesc')} />

      <section className="bg-gradient-to-b from-[#EFE7DC] via-[#FAF9F5] to-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-bold text-[#9A7B45]">{t('hero.eyebrow')}</p>
            <h1 className="mt-4 font-serif-luxury text-5xl sm:text-6xl font-semibold text-[#080C34] leading-[1.05]">
              {t('hero.line1')}
              <span className="block text-[#9A7B45]">{t('hero.line2')}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-[#111424]/75 leading-relaxed">{t('hero.text')}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/start"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#080C34] text-white text-sm font-bold hover:bg-[#161C57] transition-colors"
              >
                {t('hero.ctaPrimary')}
                <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-[#080C34]/25 text-[#080C34] text-sm font-bold hover:bg-[#080C34]/5 transition-colors"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-[#080C34]/15 pt-6">
              {facts.map((n) => (
                <div key={n}>
                  <dt className="text-sm font-bold text-[#080C34]">{t(`hero.fact${n}`)}</dt>
                  <dd className="mt-0.5 text-xs text-[#111424]/65">{t(`hero.fact${n}Sub`)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="animate-float-garment rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-[#EFEDE6]">
              <img src={tshirtPrint} alt={t('products.items.t-shirts.name')} className="w-full h-full object-cover" />
            </div>
            <div className="animate-float-shadow mx-auto mt-5 h-3 w-2/3 rounded-full bg-[#080C34]/40 blur-md" aria-hidden="true" />
            <div className="hidden sm:block absolute -bottom-4 -start-8 w-40 rounded-2xl overflow-hidden border-4 border-[#FAF9F5] shadow-xl">
              <img src={branding} alt="" className="w-full aspect-square object-cover" />
            </div>
            <p className="mt-3 text-center text-xs text-[#111424]/50">{t('hero.photoNote')}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading eyebrow={t('products.eyebrow')} title={t('products.title')} subtitle={t('products.subtitle')} />
        <div className="mt-12">
          <ProductGrid />
        </div>
      </section>

      <ModelSection />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading eyebrow={t('how.eyebrow')} title={t('how.title')} subtitle={t('how.subtitle')} />
        <div className="mt-12">
          <StepsList />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
