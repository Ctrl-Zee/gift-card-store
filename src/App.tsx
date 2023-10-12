import { RouterProvider } from 'react-router-dom';
import { router } from './lib/router/router';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-teal/theme.css';

function App() {
  return (
    <PrimeReactProvider>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </PrimeReactProvider>
  );
}

export default App;
