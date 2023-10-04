import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
    <App />
  </PrimeReactProvider>
);
