import Stripe from "stripe"
import Product from "./components/Product"

const getProduct = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY as string,{
    apiVersion : '2022-11-15'
  })
    const products = await stripe.products.list()
    const productWithPrices = await Promise.all(
      products.data.map(async (product) => {
              const prices = await stripe.prices.list({
                product: product.id
              })
              const features= product.metadata.features || ""
              return {
                id: product.id,
                name: product.name,
                description: product.description,
                image: product.images[0],
                unit_amount: prices.data[0].unit_amount,
                currency: prices.data[0].currency,
                metadata: {features},
            
                
              }
            })
           
    )
    return productWithPrices
    
  
}

export default async function Home() {
  const products = await getProduct() 
 
  return (
    
    <main className="grid grid-cols-fluid gap-12">
    {products.map((product) =>(
    <Product {...product} key={product.id}/>  
    ))}
    </main>
   
    
  )
}
