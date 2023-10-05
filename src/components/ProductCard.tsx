import { Card } from 'primereact/card';
import { Product } from '../models/product';
import { Button } from 'primereact/button';

export const ProductCard = (product: Product) => {
  const quantity = 1;
  return (
    <Card
      pt={{
        root: {
          className:
            'bg-white text-black border rounded-xl w-64 h-64 border-round-lg',
        },
        body: { className: 'p-0' },
      }}
    >
      <img
        src={product.imageUrl}
        alt={product.description}
        className="w-full h-32 object-contain"
      />
      <div className="flex flex-col items-center">
        <p className="m-0">{product.description}</p>
        <div className="flex">
          {quantity === 0 ? (
            <Button className="w-full" label="Add To Cart" />
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center">
                <Button
                  icon="pi pi-minus"
                  rounded
                  text
                  size="small"
                  aria-label="minus"
                />
                <p className="m-0">{quantity}</p>
                <Button
                  icon="pi pi-plus"
                  rounded
                  text
                  size="small"
                  aria-label="add"
                />
              </div>
              <Button
                className="w-full"
                label="Remove"
                size="small"
                severity="danger"
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
