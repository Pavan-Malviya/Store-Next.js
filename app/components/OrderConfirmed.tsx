"use client"

import { animate, motion } from "framer-motion"
import Image from "next/image"
import dance from "@/public/dance.gif"
import { useCartStore } from "@/store"

export default function OrderConfirmed(){
    const cartStore = useCartStore()
    return(
        <motion.div initial={{scale:0.5, opacity:0} }
        animate = {{scale: 1, opacity:1}}
        className=" flex flex-col item-center my-8 h-screen w-full bg-white absolute top-0 gap-4"
         >
            {cartStore.cart.map((item) => (
                  <div key={item.id}>
                  <p className="font-bold">Your Order has been placed.</p>
                  <Image src={dance} alt="dancing-kid" className="py-4 w-60 " />
                  <button onClick={() => {
                     cartStore.toggleCart()
                  }}>Go to cart</button>
                  </div>

            ))}
          
        </motion.div>
    )
}