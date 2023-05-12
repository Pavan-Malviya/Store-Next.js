import {create} from "zustand"
import {persist} from 'zustand/middleware'
import { AddCartType } from "./types/CartType"

type CartItem = {
    name: string,
    id: string, 
    images?: [],
    description?: string,
    unit_amount?: number,
    quantity?: number,
}

type CartState = {
    cart: AddCartType[],
    isOpen: boolean,
    toggleCart: () => void,
    clearCart: () => void
    addProduct: (item:AddCartType) => void,
    removeProduct: (item:AddCartType) => void,

}



export const useCartStore = create<CartState>()(
    persist(
      (set) => ({
        isOpen: false,
        cart: [],
        toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
        addProduct: (item: AddCartType) =>
          set((state) => {
            const existingItem = state.cart.find(
              (cartItem) => cartItem.id === item.id
            );
            if (existingItem) {
              const updatedCart = state.cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                  return { ...cartItem, quantity:cartItem.quantity + 1 };
                }
                return cartItem;
              });
              return { cart: updatedCart };
            } else {
              return { cart: [...state.cart, { ...item, quantity: 1 }] };
            }
          }),
        removeProduct: (item: AddCartType) => {},
        clearCart: () => {},
      }),
      { name: "cart-store" }
    )
  );
  
