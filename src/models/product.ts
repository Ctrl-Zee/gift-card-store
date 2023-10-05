import { StatusCode } from './enumerations';

export type Product = {
  id: number;
  companyName: string;
  description: string;
  cost: number;
  imageUrl: string;
  categoryIds: number[];
  deliveryMethodsIds: number[];
  deliveryMethod: number[];
  status?: StatusCode;
  inCart?: boolean;
  quantity?: number | null;
  code?: number;
};
