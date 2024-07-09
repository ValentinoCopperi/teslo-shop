"use client"
import { Product } from "@/interfaces"
import { ProductGridIten } from "./ProductGridIten"
import { useStoreFilter } from "@/store"
interface Props {
    products : Product[]
}
export const ProductGrid = ({products} : Props) => {
    const maxValue = useStoreFilter(state => state.maxValue)
    const sortMaxToMin = useStoreFilter(state => state.sortMaxToMin)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 ">

        {
            products.filter(prod => prod.price <= maxValue)
            .sort((a, b) => sortMaxToMin ? b.price - a.price : a.price - b.price)
            .map((prod) => (
                <ProductGridIten
                    key={prod.slug}
                    product={prod}
                />
            ))
        }


    </div>
  )
}
