import React from 'react';
import { CtaBand, ProductGrid, SectionHeading } from '../components/Sections';
import Seo from '../components/Seo';
import { useI18n } from '../lib/i18n';

export default function ProductsPage() {
  const { t } = useI18n();
  return (
    <>
      <Seo title={t('meta.productsTitle')} description={t('products.subtitle')} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading eyebrow={t('products.eyebrow')} title={t('products.title')} subtitle={t('products.subtitle')} />
        <div className="mt-12">
          <ProductGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
