import { ShoppingCartList } from '../components/ShoppingCartList';
import { CheckOutForm } from '../components/CheckOutForm';
import { useShoppingCartStore } from '../store/shopping-cart-store';

export const CheckoutPage = () => {
  const cartItems = useShoppingCartStore((state) => state.items);

  return (
    <div className="m-8 flex justify-between">
      <div>
        <CheckOutForm />
      </div>
      <div className="flex flex-col items-center w-1/4">
        <h1 className="text-2xl">Cart</h1>
        <ShoppingCartList cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CheckoutPage;
