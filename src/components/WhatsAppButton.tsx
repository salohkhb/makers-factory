import { MessageCircle } from 'lucide-react';
import React from 'react';
import { whatsappLink } from '../lib/api';
import { useI18n } from '../lib/i18n';

export default function WhatsAppButton() {
  const { t } = useI18n();
  return (
    <a
      href={whatsappLink(t('whatsapp.default'))}
      target="_blank"
      rel="noreferrer"
      aria-label={t('whatsapp.label')}
      className="fixed bottom-5 end-5 z-30 w-14 h-14 rounded-full bg-[#1FA855] text-white flex items-center justify-center shadow-lg hover:bg-[#178A45] transition-colors"
    >
      <MessageCircle size={26} />
    </a>
  );
}
