import { ShoppingCartList } from '../components/ShoppingCartList';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CheckOutForm } from '../components/CheckOutForm';

export const CheckoutPage = () => {
  const { getCartItems } = useShoppingCart();

  return (
    <div className="m-8 flex justify-between">
      <div>
        <CheckOutForm />
      </div>
      <div className="flex flex-col items-center w-1/4">
        <h1 className="text-2xl">Cart</h1>
        <ShoppingCartList cartItems={getCartItems()} />
      </div>
    </div>
  );
};
