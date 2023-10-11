import { createContext, useContext, ReactNode, useState } from 'react';
import { Product } from '../models/product';
import { ShoppingCartSidebar } from '../components/ShoppingCartSidebar';

// define types
type ShoppingCartProviderProps = {
  children: ReactNode;
};

// defines the functions that will be available to components
// these will effect the state defined in the provider
type ShoppingCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getCartQuantity: () => number;
  getCartTotal: () => number;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (product: Product) => void;
  decreaseCartQuantity: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  getCartItems: () => CartItem[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};

// create context
const ShoppingCartContext = createContext({} as ShoppingCartContextType);

// custom hook
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

// create and export provider
export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  const getCartQuantity = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.product.cost * item.quantity,
      0
    );
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.product.id === id)?.quantity ?? 0;
  };

  const increaseCartQuantity = (product: Product) => {
    setCartItems((items) => {
      // check if item is in cart
      if (items.find((item) => item.product.id === product.id) == null) {
        return [...items, { product: product, quantity: 1 }];
      } else {
        return items.map((item) => {
          // increase quantity
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (product: Product) => {
    setCartItems((items) => {
      // remove item from cart
      if (
        items.find((item) => item.product.id === product.id)?.quantity === 1
      ) {
        return items.filter((item) => item.product.id !== product.id);
      } else {
        return items.map((item) => {
          // decrease quantity
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (product: Product) => {
    setCartItems((items) => {
      return items.filter((item) => item.product.id !== product.id);
    });
  };

  const getCartItems = () => {
    return cartItems;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        getCartQuantity,
        getCartTotal,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        getCartItems,
      }}
    >
      {children}
      {/* could be moved to a layout component */}
      <ShoppingCartSidebar
        isOpen={isOpen}
        closeCart={closeCart}
        items={cartItems}
      />
    </ShoppingCartContext.Provider>
  );
};
