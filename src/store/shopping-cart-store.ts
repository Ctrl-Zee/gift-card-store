import { create } from 'zustand';
import { Product } from '../models/product';
import { CartItems } from '../models/order';

type ShoppingCartContextType = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  getCartQuantity: () => number;
  getCartTotal: () => number;
  getItemQuantity: (id: number) => number;
  getItemTotal: (id: number) => number;
  increaseCartQuantity: (product: Product) => void;
  decreaseCartQuantity: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  getCartItems: () => CartItem[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};

const getCartQuantity = (items: CartItem[]) => {
  return items.reduce((acc, item) => acc + item.quantity, 0);
};

const getCartTotal = (items: CartItem[]) => {
  return items.reduce(
    (acc, item) => acc + item.product.cost * item.quantity,
    0
  );
};

const getItemQuantity = (id: number, items: CartItem[]) => {
  return items.find((item) => item.product.id === id)?.quantity ?? 0;
};

const getItemTotal = (id: number, items: CartItem[]) => {
  const item = items.find((item) => item.product.id === id);
  return (item?.product.cost ?? 0) * (item?.quantity ?? 0);
};

const increaseCartQuantity = (product: Product, items: CartItem[]) => {
  if (items.find((item) => item.product.id === product.id) == null) {
    return [...items, { product: product, quantity: 1 }]; // item not in cart: add item with quantity 1
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
};

const decreaseCartQuantity = (product: Product, items: CartItem[]) => {
  if (items.find((item) => item.product.id === product.id)?.quantity === 1) {
    return items.filter((item) => item.product.id !== product.id); // remove item from cart
  } else {
    return items.map((item) => {
      if (item.product.id === product.id) {
        return { ...item, quantity: item.quantity - 1 }; // decrease quantity
      } else {
        return item;
      }
    });
  }
};

const removeFromCart = (product: Product, items: CartItem[]) => {
  return items.filter((item) => item.product.id !== product.id);
};

const useShoppingCartStore = create<ShoppingCartContextType>((set, get) => ({
  items: [],
  isOpen: false,
  getCartQuantity: () => {
    const { items } = get();
    return getCartQuantity(items);
  },
  getCartTotal: () => {
    const { items } = get();
    return getCartTotal(items);
  },
  getItemQuantity: (id: number) => {
    const { items } = get();
    return getItemQuantity(id, items);
  },
  getItemTotal: (id: number) => {
    const { items } = get();
    return getItemTotal(id, items);
  },
  increaseCartQuantity: (product: Product) => {
    const { items } = get();
    set({ items: increaseCartQuantity(product, items) });
  },
  decreaseCartQuantity: (product: Product) => {
    const { items } = get();
    set({ items: decreaseCartQuantity(product, items) });
  },
  removeFromCart: (product: Product) => {
    const { items } = get();
    set({ items: removeFromCart(product, items) });
  },
  getCartItems: () => {
    return get().items;
  },
  openCart: () => {
    return set({ isOpen: true });
  },
  closeCart: () => {
    return set({ isOpen: false });
  },
}));