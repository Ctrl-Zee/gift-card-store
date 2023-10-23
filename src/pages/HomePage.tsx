import { ProductCard } from '../components/ProductCard';
import { useGet } from '../hooks/useGet';
import { ProductSummary } from '../models/product-summary';

export const HomePage = () => {
  const { data } = useGet<ProductSummary>('Catalog');

  return (
    <>
      <div className="relative">
        <div className="bg-hero-img-1 bg-no-repeat bg-cover bg-center w-screen h-96  mb-16 blur-sm"></div>
        <div className="w-1/2 p-8 text-center text-surface-b absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-surface-900 bg-opacity-50 border border-gray-500">
          <p className="text-lg">
            In a world where appreciation is the currency, Nexa Card is your
            ultimate partner in recognizing and motivating your most valuable
            assets - your people. Whether you're thanking clients, incentivizing
            your workforce, or celebrating corporate milestones, our versatile
            gift cards are the key to personalized, memorable rewards.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 place-items-center lg:flex lg:flex-row lg:gap-4 lg:justify-around ">
        {data &&
          data?.products
            .slice(0, 4)
            .map((product) => <ProductCard key={product.id} {...product} />)}
      </div>
    </>
  );
};

export default HomePage;
