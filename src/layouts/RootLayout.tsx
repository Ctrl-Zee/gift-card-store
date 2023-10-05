import { Outlet } from 'react-router-dom';
import { Filters } from '../components/Filters';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div>
      <header className="px-4 flex justify-between border items-center h-16">
        <div className="text-3xl font-medium">Nexa Card</div>
        <div className="flex justify-between w-48">
          <Link className="text-xl" to="/">
            Home
          </Link>
          <Link className="text-xl" to="Products">
            Products
          </Link>
        </div>
        <div>
          <Button
            icon="pi pi-shopping-cart"
            rounded
            outlined
            aria-label="Filter"
          />
        </div>
      </header>
      <div className="flex">
        <aside className="w-48 border-r h-[calc(100vh-4rem)] ">
          <Filters />
        </aside>
        <main className="w-[calc(100vw-12rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
