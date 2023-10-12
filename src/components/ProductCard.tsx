import { Card } from 'primereact/card';
import { Product } from '../models/product';
import { Button } from 'primereact/button';
import { useShoppingCartStore } from '../store/shopping-cart-store';

export const ProductCard = (product: Product) => {
  const increaseCartQuantity = useShoppingCartStore(
    (state) => state.increaseCartQuantity
  );

  const decreaseCartQuantity = useShoppingCartStore(
    (state) => state.decreaseCartQuantity
  );

  const getItemTotal = useShoppingCartStore((state) => state.getItemTotal);

  const quantity = useShoppingCartStore((state) =>
    state.getItemQuantity(product.id)
  );

  return (
    <Card className="w-64 h-72">
      <img
        src={product.imageUrl}
        alt={product.description}
        className="w-full h-32 object-contain"
      />
      <div className="flex flex-col items-center">
        <p className="my-4 truncate">{product.description}</p>
        <div className="flex">
          {quantity === 0 ? (
            <Button
              className="w-full"
              label="Add To Cart"
              size="small"
              onClick={() => increaseCartQuantity(product)}
            />
          ) : (
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-xs text-gray-400">Points</p>
                <p className="text-sm">{getItemTotal(product.id)}</p>
              </div>
              <div className="flex justify-between items-center">
                <Button
                  icon="pi pi-minus"
                  rounded
                  text
                  size="small"
                  aria-label="minus"
                  onClick={() => decreaseCartQuantity(product)}
                />
                <div className="flex flex-col items-center mx-2">
                  <p>{quantity}</p>
                  <p className="text-xs text-gray-400">in cart</p>
                </div>
                <Button
                  icon="pi pi-plus"
                  rounded
                  text
                  size="small"
                  aria-label="add"
                  onClick={() => increaseCartQuantity(product)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
