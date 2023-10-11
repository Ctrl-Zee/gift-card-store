import { InputText } from 'primereact/inputtext';
import { ProductCard } from '../components/ProductCard';
import { useGet } from '../hooks/useGet';
import { ProductSummary } from '../models/product-summary';
import { useState } from 'react';
import { Filters } from '../components/Filters';
import { Category } from '../models/category';
import { Product } from '../models/product';

export const ProductsPage = () => {
  const { data, isLoading, isError } = useGet<ProductSummary>('Catalog');
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<
    Category[] | null
  >(null);

  const filterProducts = (products: Product[], categories: Category[]) => {
    const matchesSearch = products.filter((product) => {
      return product.description
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    });
    return matchesSearch?.filter((p) =>
      categories.length > 0
        ? p.categoryIds.some((c) =>
            categories.some((category) => category.id === c)
          )
        : true
    );
  };

  const filteredProducts = filterProducts(
    data?.products ?? [],
    selectedCategories ?? []
  );

  return (
    <div className="flex">
      <aside className="w-48 border-r">
        <Filters
          categories={data?.categories ?? []}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </aside>
      <main className="w-[calc(100vw-12rem)]">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {data && (
          <>
            <div className="p-4">
              <InputText
                className="w-full"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div className="p-8 flex justify-center flex-wrap gap-4">
              {(filteredProducts?.length ?? 0) > 0 ? (
                filteredProducts?.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))
              ) : (
                <p>No products found for "{searchValue}"</p>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};
