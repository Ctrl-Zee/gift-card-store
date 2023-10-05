import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import './index.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { RouterProvider } from 'react-router-dom';
import Tailwind from 'primereact/passthrough/tailwind';
import { router } from './lib/router/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
