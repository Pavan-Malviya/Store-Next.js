import { ProductType } from "@/types/ProductTypes"
import FormatPrice from "@/utils/PriceFormat"
import Image from "next/image"



export default  function Product({name, image, unit_amount, description, id} : ProductType){
 
return (
   
        <div className="text-gray-600 py-2">
       <Image src={image} alt={name}  width={400} height={400} className="w-full h-80 object-cover rounded-lg"/>
       <div className="font-medium">
        <h1>{name}</h1>
        <p className="text-sm text-teal-800">{unit_amount && FormatPrice(unit_amount)}</p>
        </div>
        </div>
      
    
)
}