

import Image from "next/image"
import { useCartStore } from "@/store"
import FormatPrice from "@/utils/PriceFormat"
import{ IoAddCircle ,IoRemoveCircle} from "react-icons/io5"
import market from "@/public/market.png"

export default function Cart(){
    const cartStore = useCartStore()
    return(
        <div onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen left-0 top-0 bg-black/25">
            <div onClick={(e) => e.stopPropagation()} className="bg-white absolute right-0 top-0 w:1/2 md:w-1/4 h-screen p-12 overflow-y-scroll text-gray-700">
            <p className="text-sm mb-4">Heres is yours shopping list</p>
           {
            
            cartStore.cart.map((item) => (
                <div key ={item.id} className="flex py-2 gap-4">
                    <Image className="rounded-md h-28" src={item.image} alt={item.name} width={100} height={100} />
               <div>
                    <p className="text-sm font-bold">{item.name}</p>
                    <div className="flex gap-1 ">
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => {
                        cartStore.removeProduct({id:item.id,
                            image:item.image, 
                            quantity:item.quantity,
                            unit_amount:item.unit_amount,
                            name:item.name})
                    }}><IoRemoveCircle /></button>
                    <button onClick={() => {
                        cartStore.addProduct(
                              { id:item.id,
                                 image:item.image, 
                                 quantity:item.quantity,
                                 unit_amount:item.unit_amount,
                                 name:item.name})
                    }}><IoAddCircle/></button>
                 </div>
                    <p className="font-bold text-teal-800">{item.unit_amount && FormatPrice(item.unit_amount)}</p>
                </div>
            </div>
            )) }

                {cartStore.cart.length > 0 && (

                <button className="py-2 mt-4 bg-teal-700 rounded-md text-white w-full">Checkout</button>

                )}

                {!cartStore.cart.length && (
                    <div className="flex flex-col gap-10 items-center text-2xl font-medium pt-36 opacity-75">
                        <h1>uhh ohh...it`s empty</h1>
                       <Image src={market} alt="empty cart" width={200} height={200}/>
                    </div>

                )


                }
           
            </div>
            
        </div>

    )
}