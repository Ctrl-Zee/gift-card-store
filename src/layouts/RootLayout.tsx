import { Button } from 'primereact/button';
import { Link, Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <header className="">
        <div className="">Nexa Card</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
        </div>
        <div>
          <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
        </div>
      </header>
      <aside>filters here</aside>
      <Outlet />
    </>
  );
};
