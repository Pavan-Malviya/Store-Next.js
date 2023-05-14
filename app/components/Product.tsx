import { ProductType } from "@/types/ProductTypes"
import FormatPrice from "@/utils/PriceFormat"
import Image from "next/image"
import Link  from "next/link"


export default  function Product({name, image, unit_amount, description, id} : ProductType){
 
return (
        <Link href={{pathname: `product/${id}`,query:{name, image, unit_amount, description, id}}}>
        <div className="text-gray-600 py-2">
       <Image src={image} alt={name}  width={400} height={400} className="w-full h-72 object-cover rounded-lg"/>
       <div className="font-bold text-center">
        <h1>{name}</h1>
        </div>
        <p className=" text-center font-bold text-teal-800">{unit_amount && FormatPrice(unit_amount)}</p>
        </div>

        </Link>
      
    
)
}