import { Category } from './category';
import { DeliveryMethod } from './delivery-method';
import { Product } from './product';

export type ProductSummary = {
  products: Product[];
  categories: Category[];
  deliveryMethods: DeliveryMethod[];
};
