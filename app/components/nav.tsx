"use client"


import Link from "next/link"
import Cart from "./Cart"
import { useCartStore } from "@/store"
import {AiFillShopping} from "react-icons/ai"



export default function Nav(){
    const cartStore = useCartStore()
    return (

       <div className="flex justify-between items-center py-8">
         <Link href={"/"}>
        <h1 className=" text-2xl text-teal-600">Store</h1>
        </Link>
        <ul>
            {/* toggle the cart */}
        <li onClick={() => {
            cartStore.toggleCart()
        }}  className="flex items-center text-3xl relative cursor-pointer">
            <AiFillShopping/>
            <span className="bg-teal-700 text-white text-sm font-bold w-5 h-5 rounded-full absolute bottom-4 left-4 flex items-center justify-center">
                {cartStore.cart.length}
            </span>
        </li>
        
        </ul>

      
       <p> {cartStore.isOpen && <Cart/>}</p>
       </div>
        
    )
} 