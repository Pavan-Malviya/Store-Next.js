

import Image from "next/image"
import { useCartStore } from "@/store"
import FormatPrice from "@/utils/PriceFormat"
import{ IoAddCircle ,IoRemoveCircle} from "react-icons/io5"
import market from "@/public/market.png"
import {motion ,AnimatePresence} from "framer-motion"

export default function Cart(){
    const cartStore = useCartStore()
    const totalPrice = cartStore.cart.reduce((acc, item) =>{
        return acc + item.unit_amount! * item.quantity!
    }, 0)

    return(
        <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
         onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen left-0 top-0 bg-black/25">

            <motion.div
             
             onClick={(e) => e.stopPropagation()} className="bg-white absolute right-0 top-0  w-full lg:w-1/4 h-screen p-12 overflow-y-scroll text-gray-700">
            <button onClick={() =>{
                cartStore.toggleCart()
            }} className="text-sm font-bold pb-12" >Back to store... </button>    
           {
            
            cartStore.cart.map((item) => (
                <motion.div layout key ={item.id} className="flex py-2 gap-4">
                    <Image className="rounded-md h-28" src={item.image} alt={item.name} width={100} height={100} />
               <motion.div layout>
                    <p className="text-sm font-bold">{item.name}</p>
                    <motion.div layout className="flex gap-1 ">
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
                 </motion.div>
                    <p className="font-bold text-teal-800">{item.unit_amount && FormatPrice(item.unit_amount)}</p>
                </motion.div>
            </motion.div>
            )) }

            {/* checkout and total */}
            {cartStore.cart.length > 0 && (
            
            <motion.div layout>
                {totalPrice > 0 && (<p className="font-bold">Total: {FormatPrice (totalPrice)}</p>)}
                

                <button className="py-2 mt-4 bg-teal-700 rounded-md text-white w-full">Checkout</button>
            </motion.div>
                )}


                <AnimatePresence>
                {!cartStore.cart.length  && (
                    <motion.div
                     animate={{scale:1, rotateZ: 0, opacity: 0.75}}
                     initial={{scale:0.5, rotateZ: -10, opacity: 0}}
                     exit={{scale:0.5, rotateZ: -10, opacity: 0}}
                     className="flex flex-col gap-10 items-center text-2xl font-medium pt-36 opacity-75">
                        <h1>uhh ohh...it`s empty</h1>
                       <Image src={market} alt="empty cart" width={200} height={200}/>
                    </motion.div>
                ) }
                </AnimatePresence>

           
            </motion.div>
            
        </motion.div>

    )
}