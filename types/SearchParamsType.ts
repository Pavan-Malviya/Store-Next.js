type Params =  {
    id: string
}
type SearchParams = {
    name: string,
    unit_amount: number | null,
    image: string,
    id: string,
    description: string | null,
    currency: string,
    features: string,
    
}





export type SearchParamsType = {
    params: Params,
    searchParams: SearchParams
}