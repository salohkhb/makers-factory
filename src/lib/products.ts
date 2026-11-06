import corporate from '../assets/images/corporate.jpg';
import hoodie from '../assets/images/hoodie.jpg';
import linen from '../assets/images/linen.jpg';
import modest from '../assets/images/modest.jpg';
import tracksuit from '../assets/images/tracksuit.jpg';
import tshirt from '../assets/images/tshirt.jpg';
import { ProductId } from '../types';

export interface Product {
  id: ProductId;
  image: string;
}

export const PRODUCTS: Product[] = [
  { id: 't-shirts', image: tshirt },
  { id: 'hoodies', image: hoodie },
  { id: 'tracksuits', image: tracksuit },
  { id: 'corporate-wear', image: corporate },
  { id: 'linen', image: linen },
  { id: 'modest-wear', image: modest },
];
