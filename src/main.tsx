import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import './index.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { RouterProvider } from 'react-router-dom';
import Tailwind from 'primereact/passthrough/tailwind';
import { router } from './lib/router/router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
