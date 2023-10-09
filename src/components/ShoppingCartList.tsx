import { Button } from 'primereact/button';
import { CartItem } from '../context/ShoppingCartContext';
import { InputText } from 'primereact/inputtext';

type ShoppingCartListProps = {
  cartItems: CartItem[];
};

export const ShoppingCartList = ({ cartItems }: ShoppingCartListProps) => {
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.product.id}>
          <div className="flex justify-between items-center">
            <p>{item.product.description}</p>
            <Button
              icon="pi pi-times"
              rounded
              text
              severity="secondary"
              aria-label="delete"
              size="small"
            />
          </div>
          <div className="flex justify-between items-baseline">
            <div className="flex flex-col">
              <p>Qty</p>
              <InputText
                pt={{
                  root: { className: 'w-8' },
                }}
              />
            </div>
            <p>Points: {item.product.cost * item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
