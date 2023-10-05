import { Checkbox } from 'primereact/checkbox';

export const Filters = () => {
  return (
    <>
      <div className="py-6 pl-4 text-blue-400 text-xl border-b">Filter</div>
      <div>
        <Checkbox
          inputId="ingredient1"
          name="filter"
          value="filter"
          checked={true}
        />
      </div>
    </>
  );
};
