import { AlertCircle, Check, CheckCircle2, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { requestSummary, submitSampleRequest, whatsappLink } from '../lib/api';
import { useI18n } from '../lib/i18n';
import { PRODUCTS } from '../lib/products';
import fr from '../messages/fr.json';
import { ProductId, SampleRequest } from '../types';

const QUANTITIES = ['20-50', '50-100', '100-300', '300+'];
const BRANDING_KEYS = ['bEmbroidery', 'bPrint', 'bUndecided', 'bNone'] as const;

const inputClass =
  'mt-1.5 w-full px-4 py-3 rounded-xl bg-white border border-[#080C34]/20 text-base text-[#111424] focus:outline-none focus:border-[#080C34] focus:ring-1 focus:ring-[#080C34]';
const labelClass = 'block text-sm font-semibold text-[#080C34]';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function SampleForm() {
  const { t } = useI18n();
  const [searchParams] = useSearchParams();

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [selected, setSelected] = useState<ProductId[]>(() => {
    const initial = searchParams.get('product');
    return PRODUCTS.filter((p) => p.id === initial).map((p) => p.id);
  });
  const [quantity, setQuantity] = useState('');
  const [branding, setBranding] = useState('');
  const [message, setMessage] = useState('');
  const [productsError, setProductsError] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  // Requests are stored in French so the Google Sheet and the WhatsApp message stay uniform for the team.
  const request: SampleRequest = {
    name: name.trim(),
    whatsapp: whatsapp.trim(),
    email: email.trim(),
    brand: brand.trim(),
    products: selected.map((id) => fr.products.items[id].name),
    quantity: quantity === 'unknown' ? fr.form.qUnknown : quantity,
    branding: branding ? fr.form[branding as (typeof BRANDING_KEYS)[number]] : '',
    message: message.trim(),
  };

  const toggle = (id: ProductId) => {
    setProductsError(false);
    setSelected((current) => (current.includes(id) ? current.filter((x) => x !== id) : [...current, id]));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (selected.length === 0) {
      setProductsError(true);
      return;
    }
    setStatus('sending');
    setStatus((await submitSampleRequest(request)) ? 'success' : 'error');
  };

  const reset = () => {
    setName('');
    setWhatsapp('');
    setEmail('');
    setBrand('');
    setSelected([]);
    setQuantity('');
    setBranding('');
    setMessage('');
    setStatus('idle');
  };

  const whatsappCta = (
    <a
      href={whatsappLink(requestSummary(request))}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1FA855] text-white text-sm font-bold hover:bg-[#178A45] transition-colors"
    >
      <MessageCircle size={18} />
      {t('form.whatsappCta')}
    </a>
  );

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white border border-[#080C34]/10 p-8 text-center" role="status">
        <CheckCircle2 size={44} className="mx-auto text-[#1FA855]" />
        <h2 className="mt-4 text-2xl font-bold text-[#080C34]">{t('form.successTitle')}</h2>
        <p className="mt-3 text-[#111424]/70 leading-relaxed">{t('form.successText')}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          {whatsappCta}
          <button
            type="button"
            onClick={reset}
            className="px-6 py-3.5 rounded-xl border border-[#080C34]/20 text-sm font-bold text-[#080C34] hover:bg-[#080C34]/5"
          >
            {t('form.another')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-[#080C34]/10 p-5 sm:p-8 space-y-8">
      <fieldset>
        <legend className="text-lg font-bold text-[#080C34]">{t('form.contact')}</legend>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            {t('form.name')} *
            <input required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
          </label>
          <label className={labelClass}>
            {t('form.whatsapp')} *
            <input
              required
              type="tel"
              dir="ltr"
              autoComplete="tel"
              pattern="[+0-9 ()\-]{9,}"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className={`${inputClass} rtl:text-end`}
            />
          </label>
          <label className={labelClass}>
            {t('form.brand')}
            <input autoComplete="organization" value={brand} onChange={(e) => setBrand(e.target.value)} className={inputClass} />
          </label>
          <label className={labelClass}>
            {t('form.email')}
            <input
              type="email"
              dir="ltr"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${inputClass} rtl:text-end`}
            />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-lg font-bold text-[#080C34]">{t('form.productsLabel')} *</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {PRODUCTS.map(({ id }) => {
            const checked = selected.includes(id);
            return (
              <label
                key={id}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border cursor-pointer transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#080C34] ${
                  checked ? 'border-[#080C34] bg-[#080C34]/5' : 'border-[#080C34]/20 hover:border-[#080C34]/40'
                }`}
              >
                <input type="checkbox" checked={checked} onChange={() => toggle(id)} className="sr-only" />
                <span
                  className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                    checked ? 'bg-[#080C34] border-[#080C34] text-white' : 'border-[#080C34]/30'
                  }`}
                >
                  {checked && <Check size={14} strokeWidth={3} />}
                </span>
                <span className="text-sm font-semibold text-[#080C34]">{t(`products.items.${id}.name`)}</span>
              </label>
            );
          })}
        </div>
        {productsError && (
          <p className="mt-3 text-sm font-semibold text-[#B42318]" role="alert">{t('form.productsError')}</p>
        )}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          {t('form.quantity')}
          <select value={quantity} onChange={(e) => setQuantity(e.target.value)} className={inputClass}>
            <option value="">-</option>
            {QUANTITIES.map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
            <option value="unknown">{t('form.qUnknown')}</option>
          </select>
        </label>
        <label className={labelClass}>
          {t('form.branding')}
          <select value={branding} onChange={(e) => setBranding(e.target.value)} className={inputClass}>
            <option value="">-</option>
            {BRANDING_KEYS.map((key) => (
              <option key={key} value={key}>{t(`form.${key}`)}</option>
            ))}
          </select>
        </label>
      </div>

      <label className={labelClass}>
        {t('form.message')}
        <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={inputClass} />
      </label>

      {status === 'error' && (
        <div className="rounded-xl border border-[#B42318]/30 bg-[#B42318]/5 p-4" role="alert">
          <p className="flex items-center gap-2 font-bold text-[#B42318]">
            <AlertCircle size={18} className="shrink-0" />
            {t('form.errorTitle')}
          </p>
          <p className="mt-1.5 text-sm text-[#111424]/80">{t('form.errorText')}</p>
          <div className="mt-3">{whatsappCta}</div>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#080C34] text-white text-sm font-bold hover:bg-[#161C57] disabled:opacity-60 transition-colors"
        >
          {status === 'sending' ? t('form.sending') : status === 'error' ? t('form.retry') : t('form.submit')}
        </button>
        <p className="mt-3 text-xs text-[#111424]/60">{t('form.note')}</p>
      </div>
    </form>
  );
}
