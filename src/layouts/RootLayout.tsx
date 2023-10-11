import { Outlet } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export const RootLayout = () => {
  const { openCart, getCartQuantity } = useShoppingCart();

  return (
    <div>
      <header className="px-4 flex justify-between border-b items-center h-16">
        <div className="text-3xl font-medium">Nexa Card</div>
        <div className="flex justify-between">
          <Link className="text-xl mx-4" to="/">
            Home
          </Link>
          <Link className="text-xl mx-4" to="products">
            Products
          </Link>
          <Link className="text-xl mx-4" to="checkout">
            Checkout
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
      <div>
        <Outlet />
      </div>
    </div>
  );
};
