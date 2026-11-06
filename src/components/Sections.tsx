import { ArrowRight, CheckCircle2, Copyright, Factory, MessagesSquare } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { Product, PRODUCTS } from '../lib/products';

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold text-[#9A7B45]">{eyebrow}</p>
      <h2 className="mt-3 font-serif-luxury text-4xl sm:text-5xl font-semibold text-[#080C34] leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-[#111424]/70 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { t } = useI18n();
  return (
    <Link
      to={`/products/${product.id}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-[#080C34]/10 hover:border-[#080C34]/30 transition-colors"
    >
      <div className="aspect-[4/5] overflow-hidden bg-[#EFEDE6]">
        <img
          src={product.image}
          alt={t(`products.items.${product.id}.name`)}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#080C34]">{t(`products.items.${product.id}.name`)}</h3>
        <p className="mt-1.5 text-sm text-[#111424]/70 leading-relaxed">{t(`products.items.${product.id}.desc`)}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#080C34]">
          {t('products.details')}
          <ArrowRight size={15} className="rtl:rotate-180" />
        </span>
      </div>
    </Link>
  );
}

export function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export function ModelSection() {
  const { t } = useI18n();
  const cards = [
    { icon: Factory, title: t('model.c1Title'), text: t('model.c1Text') },
    { icon: MessagesSquare, title: t('model.c2Title'), text: t('model.c2Text') },
    { icon: CheckCircle2, title: t('model.c3Title'), text: t('model.c3Text') },
    { icon: Copyright, title: t('model.c4Title'), text: t('model.c4Text') },
  ];
  return (
    <section className="bg-white border-y border-[#080C34]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading eyebrow={t('model.eyebrow')} title={t('model.title')} subtitle={t('model.subtitle')} />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon size={24} className="text-[#9A7B45]" />
              <h3 className="mt-4 text-base font-bold text-[#080C34]">{title}</h3>
              <p className="mt-2 text-sm text-[#111424]/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StepsList() {
  const { t } = useI18n();
  return (
    <ol className="grid gap-8 md:grid-cols-5">
      {[1, 2, 3, 4, 5].map((n) => (
        <li key={n}>
          <span className="w-9 h-9 rounded-full bg-[#080C34] text-white text-sm font-bold flex items-center justify-center">{n}</span>
          <h3 className="mt-4 text-base font-bold text-[#080C34]">{t(`how.s${n}Title`)}</h3>
          <p className="mt-2 text-sm text-[#111424]/70 leading-relaxed">{t(`how.s${n}Text`)}</p>
        </li>
      ))}
    </ol>
  );
}

export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="bg-[#080C34] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="font-serif-luxury text-4xl sm:text-5xl font-semibold leading-tight">{t('cta.title')}</h2>
        <p className="mt-4 text-white/70">{t('cta.text')}</p>
        <Link
          to="/start"
          className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#C8A66A] text-[#080C34] text-sm font-bold hover:bg-[#D6B883] transition-colors"
        >
          {t('cta.button')}
          <ArrowRight size={16} className="rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}
