import { ProductCard } from '../components/ProductCard';
import { useGet } from '../hooks/useGet';
import { ProductSummary } from '../models/product-summary';

export const ProductsPage = () => {
  const { data, isLoading, isError } = useGet<ProductSummary>('Catalog');

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data && (
        <div className="p-8 flex justify-center flex-wrap gap-4">
          {data.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};
