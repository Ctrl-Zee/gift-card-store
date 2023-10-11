import { Category } from '../models/category';
import { MultiSelect } from 'primereact/multiselect';

type FiltersProps = {
  categories: Category[];
  setSelectedCategories: (value: Category[]) => void;
  selectedCategories: Category[] | null;
};

export const Filters = ({
  categories,
  setSelectedCategories,
  selectedCategories,
}: FiltersProps) => {
  return (
    <>
      <div className="py-6 pl-4 text-xl border-b">
        <span className="text-primary-500">Filter</span>
      </div>
      <div>
        <MultiSelect
          value={selectedCategories}
          onChange={(e) => setSelectedCategories(e.value)}
          options={categories}
          optionLabel="type"
          placeholder="Select Cities"
          className="!w-full"
        />
      </div>
    </>
  );
};
