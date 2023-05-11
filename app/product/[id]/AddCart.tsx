"use client"

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/CartType";


export default function AddCart({name, id, unit_amount, image, quantity} : AddCartType){
    const cartStore = useCartStore()
    
    return(
        <>
         <button onClick={()=> cartStore.addProduct({ id, name, unit_amount, image, quantity})}
          className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700">Add to Cart</button>
        </>
    )
}