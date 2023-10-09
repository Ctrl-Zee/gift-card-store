import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
