"use client"
import { MaxValue, ProductGrid, SearchFilter, SortPrice, Title } from "@/components";
import { initialData } from "@/seed/seed";
const products = initialData.products;
export default function Home() {

 
  return (
    <div className="px-10  sm:px-10">
      <Title title="Tienda" subtitle="Todos los productos" classname="mb-2" />
      <div className=" justify-between grid grid-cols-1 sm:grid-cols-2" >
        <div className="col-span-1">
         <SearchFilter  products={products} />
        </div>
        <div className="col-span-1 flex flex-col sm:flex-row w-full">
          <div className="w-[80%] sm:w-[30%]  mx-auto">
            <h3>Precio maximo</h3>
            <MaxValue/>
          </div>
          <div className="w-[80%] sm:w-[30%] mx-auto">
            <h3>Ordenar por precio:</h3>
            <SortPrice/>
          </div>
        </div>
      </div>
      <ProductGrid
        products={products}
      />
    </div>
  );
}
