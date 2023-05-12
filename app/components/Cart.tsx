

import Image from "next/image"
import { useCartStore } from "@/store"
import FormatPrice from "@/utils/PriceFormat"

export default function Cart(){
    const cartStore = useCartStore()
    return(
        <div onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen left-0 top-0 bg-black/25">
            <div onClick={(e) => e.stopPropagation()} className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700">
            <p className="font-bold mb-4">Heres is yours shopping list</p>
           {
            
            cartStore.cart.map((item) => (
                <div key ={item.id} className="flex py-2 gap-4">
                    <Image className="rounded-md h-28" src={item.image} alt={item.name} width={120} height={120} />
                <div className="font-bold">
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p className="font-bold text-teal-800">{item.unit_amount && FormatPrice(item.unit_amount)}</p>
                </div>
            </div>
            )) }

            <button className="py-2 mt-4 bg-teal-700 rounded-md text-white w-full">Checkout</button>

            </div>
            
        </div>

    )
}