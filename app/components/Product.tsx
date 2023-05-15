import { ProductType } from "@/types/ProductTypes"
import FormatPrice from "@/utils/PriceFormat"
import Image from "next/image"
import Link  from "next/link"


export default  function Product({name, image, unit_amount, description, id} : ProductType){
 
return (
        <Link href={{pathname: `product/${id}`,query:{name, image, unit_amount, description, id}}}>

        <div className="card-compact rounded-lg w-72 mx-auto flex flex-col justify-between shadow-xl py-6">
  <figure className="px-5"><Image src={image} alt={name}  width={400} height={400} className="w-full h-72 object-cover rounded-lg"/></figure>
  <div className="card-body p-0">
   
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-end">
    <p className=" bg-primary text-white text-center rounded-md font-bold my-2 p-1 mb-0 ">{unit_amount && FormatPrice(unit_amount)}</p>
   
    </div>
  </div>
</div>

        </Link>
      
    
)
}