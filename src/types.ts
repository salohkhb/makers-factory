export type Language = 'en' | 'fr' | 'ar';

export type ProductId = 't-shirts' | 'hoodies' | 'tracksuits' | 'corporate-wear' | 'linen' | 'modest-wear';

export interface SampleRequest {
  name: string;
  whatsapp: string;
  email: string;
  brand: string;
  products: string[];
  quantity: string;
  branding: string;
  message: string;
}
