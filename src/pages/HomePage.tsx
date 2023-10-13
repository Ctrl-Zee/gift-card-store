import { useEffect } from 'react';
import { usePost } from '../hooks/usePost';
import { Order, OrderResponse } from '../models/order';

const order: Order = {
  cartItems: [
    {
      cost: 100,
      id: 1,
      quantity: 2,
    },
  ],
  paymentType: 'Card',
  user: {
    address1: '123 Fake Street',
    address2: '',
    city: 'Indianapolis',
    country: 'US',
    email: 'Smith',
    name: 'Andrew',
    phone: '1234567890',
    points: 0,
    state: 'IN',
    zipcode: '46220',
  },
};

export const HomePage = () => {
  const post = usePost<Order, OrderResponse>('checkout/order', order);

  useEffect(() => {
    post.mutate();
  }, []);

  return <div></div>;
};

export default HomePage;
