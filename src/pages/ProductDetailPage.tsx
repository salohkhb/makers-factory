import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { useI18n } from '../lib/i18n';
import { PRODUCTS } from '../lib/products';
import NotFoundPage from './NotFoundPage';

// Products that already have a MAKERS technical file. The others are defined with the client.
const WITH_TECH_FILE = ['t-shirts', 'hoodies', 'tracksuits', 'corporate-wear'];

export default function ProductDetailPage() {
  const { t } = useI18n();
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return <NotFoundPage />;

  const key = `products.items.${product.id}`;
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
      <Seo title={`${t(`${key}.name`)} | MAKERS`} description={t(`${key}.desc`)} />
      <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#080C34]/70 hover:text-[#080C34]">
        <ArrowLeft size={15} className="rtl:rotate-180" />
        {t('products.back')}
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 items-start">
        <div className="rounded-2xl overflow-hidden bg-[#EFEDE6] aspect-[4/5]">
          <img src={product.image} alt={t(`${key}.name`)} className="w-full h-full object-cover" />
        </div>

        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-[#C8A66A]/20 text-[#6E5529] text-xs font-bold">
            {WITH_TECH_FILE.includes(product.id) ? t('products.kitBadge') : t('products.onRequest')}
          </span>
          <h1 className="mt-4 font-serif-luxury text-5xl font-semibold text-[#080C34] leading-tight">{t(`${key}.name`)}</h1>
          <p className="mt-4 text-lg text-[#111424]/75 leading-relaxed">{t(`${key}.desc`)}</p>

          <div className="mt-8 border-t border-[#080C34]/15 pt-6">
            <h2 className="text-sm font-bold text-[#080C34]">{t('products.specsTitle')}</h2>
            <p className="mt-2 text-[#111424]/80 leading-relaxed">{t(`${key}.spec`)}</p>
          </div>
          <div className="mt-6 border-t border-[#080C34]/15 pt-6">
            <h2 className="text-sm font-bold text-[#080C34]">{t('products.customTitle')}</h2>
            <p className="mt-2 text-[#111424]/80 leading-relaxed">{t(`${key}.custom`)}</p>
          </div>

          <p className="mt-6 text-sm text-[#111424]/60 leading-relaxed">{t('products.specsNote')}</p>

          <Link
            to={`/start?product=${product.id}`}
            className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#080C34] text-white text-sm font-bold hover:bg-[#161C57] transition-colors"
          >
            {t('products.request')}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
