import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../../layouts/RootLayout';
import { lazy } from 'react';

const ProductsPage = lazy(() => import('../../pages/ProductsPage'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage'));
const HomePage = lazy(() => import('../../pages/HomePage'));
const CheckoutPage = lazy(() => import('../../pages/CheckoutPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
    ],
  },
]);
