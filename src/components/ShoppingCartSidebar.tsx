import { Sidebar } from 'primereact/sidebar';
import { CartItem } from '../context/ShoppingCartContext';
import { ShoppingCartList } from './ShoppingCartList';

type ShoppingCartSidebarProps = {
  isOpen: boolean;
  closeCart: () => void;
  items: CartItem[];
};

export const ShoppingCartSidebar = ({
  isOpen,
  closeCart,
  items,
}: ShoppingCartSidebarProps) => {
  return (
    <Sidebar visible={isOpen} position="right" onHide={closeCart}>
      <h2>Shopping Cart</h2>
      <div>
        <ShoppingCartList cartItems={items} />
      </div>
    </Sidebar>
  );
};
