import { Product } from './product';

export interface Order {
  cartItems: CartItems[];
  paymentType: string;
  user: User;
}

export interface CartItems {
  cost: number;
  id: number;
  quantity: number;
}

export interface User {
  address1: string;
  address2: string;
  city: string;
  country: string;
  email: string;
  name: string;
  phone: string;
  points: number;
  state: string;
  zipcode: string;
}

export interface OrderResponse {
  id: string;
  orderDate: Date;
  paymentType: string;
  totalCost: number;
  products: Product;
  userId: string;
  remainingCostUser: number;
}
