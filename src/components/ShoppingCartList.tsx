import { Button } from 'primereact/button';
import { CartItem } from '../context/ShoppingCartContext';
import { useShoppingCart } from '../context/ShoppingCartContext';

type ShoppingCartListProps = {
  cartItems: CartItem[];
};

export const ShoppingCartList = ({ cartItems }: ShoppingCartListProps) => {
  const {
    getCartTotal,
    removeFromCart,
    decreaseCartQuantity,
    increaseCartQuantity,
  } = useShoppingCart();
  return (
    <>
      <div>
        {cartItems.map((item) => (
          <div key={item.product.id}>
            <div className="flex justify-between items-center">
              <p className="font-bold">{item.product.description}</p>
              <Button
                className=" hover:text-red-500"
                icon="pi pi-times"
                rounded
                text
                severity="secondary"
                aria-label="delete"
                size="small"
                onClick={() => removeFromCart(item.product)}
              />
            </div>
            <div className="h-12 flex justify-between items-center">
              <div className="flex justify-between items-center">
                <Button
                  icon="pi pi-minus"
                  rounded
                  text
                  size="small"
                  aria-label="minus"
                  onClick={() => decreaseCartQuantity(item.product)}
                />
                <p className="mx-2">{item.quantity}</p>
                <Button
                  icon="pi pi-plus"
                  rounded
                  text
                  size="small"
                  aria-label="add"
                  onClick={() => increaseCartQuantity(item.product)}
                />
              </div>
              <p>Points: {item.product.cost * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 flex justify-between border-t">
        <p>Total:</p>
        <p>{getCartTotal()} Points</p>
      </div>
    </>
  );
};
