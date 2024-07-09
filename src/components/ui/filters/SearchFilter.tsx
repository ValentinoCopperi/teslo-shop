"use client"
import { Product } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

interface Props {
    products : Product[]
}

export const SearchFilter = ({products} : Props) => {
    
    const [filterProducts, setFilterProducts] = useState<Product[]>([])

    const handleFilterProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") {
        setFilterProducts([])
      } else {
        const newProductsFilter = products.filter(prod => prod.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilterProducts(newProductsFilter)
      }
  
    }
  return (
    <div className="relative w-[90%]   mb-5">
        <IoSearchOutline size={20} className="absolute top-2 left-2" />
        <input
          type="text"
          placeholder="Buscar producto"
          className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          onChange={handleFilterProducts}
        />
        <div className="absolute w-full bg-gray-200  z-10 max-h-[500px] overflow-auto rounded">
          {
            filterProducts.length ? filterProducts.map((prod) => (
              <div key={prod.slug} className="text-white flex justify-between items-center py-3 border px-3 transition-all duration-300 hover:bg-gray-300">
                <div className="flex items-center">
                  <Image
                    src={`/products/${prod.images[0]}`}
                    width={100}
                    height={100}
                    className="rounded-lg"
                    alt={prod.slug}
                  />
                  <h3 className="font-bold mx-2">{prod.title}</h3>
                </div>
                <Link href={`/product/${prod.slug}`}>
                  Ver Producto
                </Link>
              </div>
            ))
              : ''
          }
        </div>
      </div>
  )
}
