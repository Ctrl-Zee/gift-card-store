import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../../layouts/RootLayout';
import { ErrorPage } from '../../pages/ErrorPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { HomePage } from '../../pages/HomePage';
import { CheckoutPage } from '../../pages/CheckoutPage';

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
