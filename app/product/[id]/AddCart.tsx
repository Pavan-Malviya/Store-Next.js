"use client"

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/CartType";


export default function AddCart({name, id, unit_amount, image, quantity} : AddCartType){
    const cartStore = useCartStore()
    
    return(
        <>
         <button onClick={()=> cartStore.addProduct({ id, name, unit_amount, image, quantity})}
          className="my-4 btn btn-primary w-80">Add to Cart</button>
        </>
    )
}