import Image from "next/image"
import { SearchParamsType } from "@/types/SearchParamsType"
import FormatPrice from "@/utils/PriceFormat"
import AddCart from "./AddCart"


export default async function Product({searchParams}: SearchParamsType){
    

    return(
        <div className="flex justify-between gap-24 p-12 text-gray-700">
             <Image src={searchParams.image} alt={searchParams.name}  width={300} height={300}/>

            <div className="font-medium text-gray-700 ">
                <h1 className="text-2xl py-2 ">
                 {searchParams.name}
                </h1>
                <p className="py-2 ">{searchParams.description}</p>
                <p>{searchParams.features}</p>
               
            
            <div className="flex gap-12">
            <p className="font-bold text-teal-800">{searchParams.unit_amount && FormatPrice(searchParams.unit_amount)}</p>
            
            </div>
            <AddCart {...searchParams} />
            </div>
        </div>

    )
}