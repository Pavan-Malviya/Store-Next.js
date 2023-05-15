"use client"


import Link from "next/link"
import Cart from "./Cart"
import { useCartStore } from "@/store"
import {AiFillShopping} from "react-icons/ai"
import { motion ,AnimatePresence } from "framer-motion"



export default function Nav(){
    const cartStore = useCartStore()
    return (

       <nav className="flex justify-between items-center py-8">
         <Link href={"/"}>
        <p className=" text-2xl text-primary">Store</p>
        </Link>
        <ul>
            {/* toggle the cart */}
        <li onClick={() => {
            cartStore.toggleCart()
        }}  className="flex items-center text-3xl relative cursor-pointer text-primary">
            <AiFillShopping/>

            {/* animation added to cart length */}
            <AnimatePresence>
            {cartStore.cart.length > 0 && (
                <motion.span animate={{scale: 1}}
                 initial={{scale:0}} 
                 exit={{scale:0}}
                className="bg-teal-700 text-white text-sm font-bold w-5 h-5 rounded-full absolute bottom-4 left-4 flex items-center justify-center">
                {cartStore.cart.length}
            </motion.span>
            )}
            </AnimatePresence>
            
        </li>
        
        </ul>
        <AnimatePresence>        
       {cartStore.isOpen && <Cart/>}
       </AnimatePresence>
       </nav>
        
    )
} 