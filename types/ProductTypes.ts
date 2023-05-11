export type ProductType = {
    name: string,
    unit_amount: number | null,
    image: string,
    id: string,
    description: string | null,
    currency: string,
    quantity?: number | 1,
    metadata: MetaDataType

}

type MetaDataType ={
    features: string
}