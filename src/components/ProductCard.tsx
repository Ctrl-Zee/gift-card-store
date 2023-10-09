import { Card } from 'primereact/card';
import { Product } from '../models/product';
import { Button } from 'primereact/button';
import { useShoppingCart } from '../context/ShoppingCartContext';

export const ProductCard = (product: Product) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(product.id);

  return (
    <Card
      pt={{
        root: {
          className:
            'bg-white text-black border rounded-xl w-64 h-64 border-round-lg',
        },
        body: { className: 'p-0' },
        content: { className: 'py-2' },
      }}
    >
      <img
        src={product.imageUrl}
        alt={product.description}
        className="w-full h-32 object-contain"
      />
      <div className="flex flex-col items-center">
        <p className="m-1 truncate">{product.description}</p>
        <div className="flex">
          {quantity === 0 ? (
            <Button
              className="w-full"
              label="Add To Cart"
              onClick={() => increaseCartQuantity(product)}
            />
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center">
                <Button
                  icon="pi pi-minus"
                  rounded
                  text
                  size="small"
                  aria-label="minus"
                  onClick={() => decreaseCartQuantity(product)}
                />
                <p className="mx-2">{quantity}</p>
                <Button
                  icon="pi pi-plus"
                  rounded
                  text
                  size="small"
                  aria-label="add"
                  onClick={() => increaseCartQuantity(product)}
                />
              </div>
              <Button
                className="w-full"
                label="Remove"
                size="small"
                severity="danger"
                onClick={() => removeFromCart(product)}
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
