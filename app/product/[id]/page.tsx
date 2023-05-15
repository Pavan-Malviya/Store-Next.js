import Image from "next/image"
import { SearchParamsType } from "@/types/SearchParamsType"
import FormatPrice from "@/utils/PriceFormat"
import AddCart from "./AddCart"


export default async function Product({searchParams}: SearchParamsType){
    

    return(
        <>
        <div className=" flex  flex-col items-center md:flex-row  gap-4 md:gap-10 shadow-lg rounded-lg my-6">
             <Image src={searchParams.image} alt={searchParams.name}  width={200} height={200} className="w-80  rounded-sm"/>

            <div className="font-medium">
                <h1 className="text-2xl py-2 ">
                 {searchParams.name}
                </h1>
                <p className="py-2 text-sm ">{searchParams.description}</p>
                <p>{searchParams.features}</p>
               
            
            <div className="flex gap-12">
            <p className="font-bold my-2 text-primary">{searchParams.unit_amount && FormatPrice(searchParams.unit_amount)}</p>
            
            </div>
            <AddCart {...searchParams} />
            </div>
        </div>
</>
    )
}