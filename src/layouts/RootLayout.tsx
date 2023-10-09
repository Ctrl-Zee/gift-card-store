import { Outlet } from 'react-router-dom';
import { Filters } from '../components/Filters';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export const RootLayout = () => {
  const { openCart, getCartQuantity } = useShoppingCart();

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
        <div className="relative">
          <Button
            icon="pi pi-shopping-cart"
            rounded
            outlined
            aria-label="Filter"
            onClick={openCart}
          />
          <span className="absolute bottom-0 right-0 z-10 translate-x-1/4 translate-y-1/4  w-6 h-6 rounded-full bg-red-500 flex justify-center items-center text-white">
            {getCartQuantity()}
          </span>
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
