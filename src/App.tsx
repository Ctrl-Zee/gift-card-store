import { RouterProvider } from 'react-router-dom';
import { router } from './lib/router/router';
import { PrimeReactProvider } from 'primereact/api';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Tailwind from 'primereact/passthrough/tailwind';

function App() {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <ShoppingCartProvider>
        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </PrimeReactProvider>
  );
}

export default App;
