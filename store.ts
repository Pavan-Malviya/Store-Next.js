import {create} from "zustand"
import {persist} from 'zustand/middleware'
import { AddCartType } from "./types/CartType"

type cartItem = {
    name: string,
    id: string, 
    images?: [],
    description?: string,
    unit_amount?: number,
    quantity?: number | 1,
}

type CartState = {
    cart: AddCartType[],
    isOpen: boolean,
    toggleCart: () => void,
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
          const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
          if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! + 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),
      removeProduct: (item: AddCartType) => 
        set((state) => {
          // check if item exists and remove quantity by 1
          const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
          if (existingItem && existingItem.quantity! > 1) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! - 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            // remove item from cart
            const filteredCart = state.cart.filter((cartItem) => cartItem.id !== item.id);
            return { cart: filteredCart }
          }}
    )}),
    { name: "cart-store" }
  )
);
