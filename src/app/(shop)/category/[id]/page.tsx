"use client"

import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { MaxValue, ProductGrid, SearchFilter, SortPrice, Title } from "@/components";
import { Category } from "@/interfaces";
const seedProducts = initialData.products;

interface Props {
  params : {
    id:Category
  }
}

export default function Page({ params } : Props) {
  const { id } = params;
  const productos = seedProducts.filter( prod => prod.gender == id)

  const labels : Record<Category,string> = {
    'men' : 'Hombres',
    'women' : 'Muejeres',
    'kid' : 'Niños',
    'unisex': 'para Todos'
  }
  // if (id === 'kids'){
  //   notFound();
  // }
  return (
    <div className=" sm:px-10">
      <Title title={`Articulos de ${ (labels as any)[id] }`} subtitle="Todos los productos" classname="mb-2"/>
      <div className=" justify-between grid grid-cols-1 sm:grid-cols-2" >
        <div className="col-span-1">
         <SearchFilter  products={productos} />
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
        products={productos}
      />
    </div>
  )
}
