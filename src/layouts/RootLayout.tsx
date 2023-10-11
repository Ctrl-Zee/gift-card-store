import { NavLink, Outlet } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import clsx from 'clsx';

export const RootLayout = () => {
  const { openCart, getCartQuantity } = useShoppingCart();

  return (
    <div>
      <header className="px-4 flex justify-between border-b border-gray-400 items-center h-16">
        <div className="text-3xl font-medium text-primary-color">Nexa Card</div>
        <div className="flex justify-between">
          <NavLink
            className={({ isActive }) =>
              clsx(
                'text-xl mx-4',
                isActive ? 'border-b-2 border-primary-400' : ''
              )
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(
                'text-xl mx-4',
                isActive ? 'border-b-2 border-primary-400' : ''
              )
            }
            to="products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(
                'text-xl mx-4',
                isActive ? 'border-b-2 border-primary-400' : ''
              )
            }
            to="checkout"
          >
            Checkout
          </NavLink>
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
      <div>
        <Outlet />
      </div>
    </div>
  );
};
