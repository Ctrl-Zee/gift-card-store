import { ProgressSpinner } from 'primereact/progressspinner';

export const Loading = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex justify-center items-center">
      <ProgressSpinner />
    </div>
  );
};
