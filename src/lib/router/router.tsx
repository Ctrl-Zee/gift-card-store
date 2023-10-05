import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../../layouts/RootLayout';
import { ErrorPage } from '../../pages/ErrorPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { HomePage } from '../../pages/HomePage';

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
        path: 'Products',
        element: <ProductsPage />,
      },
    ],
  },
]);
