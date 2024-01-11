"use client";

import Link from "next/link";
import Cart from "./Cart";
import { useCartStore } from "@/store";
import { AiFillShopping } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Nav({ user }: Session) {
  const cartStore = useCartStore();
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <p className=" text-2xl text-primary">Store</p>
      </Link>
      <ul className="flex">
        {/* toggle the cart */}
        <li
          onClick={() => {
            cartStore.toggleCart();
          }}
          className="flex items-center text-3xl relative mx-5 cursor-pointer text-primary"
        >
          <AiFillShopping />

          {/* animation added to cart length */}
          <AnimatePresence>
            {cartStore.cart.length > 0 && (
              <motion.span
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                exit={{ scale: 0 }}
                className="bg-teal-700 text-white text-sm font-bold w-5 h-5 rounded-full absolute bottom-4 left-4 flex items-center justify-center"
              >
                {cartStore.cart.length}
              </motion.span>
            )}
          </AnimatePresence>
        </li>

        {/* {if the user is not sign in} */}
        {!user && (
          <li className="">
            <button
              onClick={() => {
                signIn();
              }}
              className="btn btn-primary px-4  py-2 rounded-md font-bold"
            >
              Sing In
            </button>
          </li>
        )}

        {user && (
          <li>
            <Image
              src={user.image as string}
              alt={user.name as string}
              width={48}
              height={48}
              className="rounded-full"
            ></Image>
          </li>
        )}
      </ul>
      <AnimatePresence>{cartStore.isOpen && <Cart />}</AnimatePresence>
    </nav>
  );
}
