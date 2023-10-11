import { RouterProvider } from 'react-router-dom';
import { router } from './lib/router/router';
import { PrimeReactProvider } from 'primereact/api';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import 'primereact/resources/themes/lara-light-teal/theme.css';

function App() {
  return (
    <PrimeReactProvider>
      <ShoppingCartProvider>
        <PrimeReactProvider>
          <RouterProvider router={router} />
        </PrimeReactProvider>
      </ShoppingCartProvider>
    </PrimeReactProvider>
  );
}

export default App;
