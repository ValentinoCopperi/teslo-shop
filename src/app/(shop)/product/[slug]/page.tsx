"use client"
import { QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { ProductSlider } from "@/components";
import { useCartContext } from "@/context/CartContext";
import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";
interface Props {
  params: {
    slug: string;
  }
}

export default function ({ params }: Props) {

  const { slug } = params;
  const product = initialData.products.find(prod => prod.slug === slug);
  const[warning,setWarning] = useState<string | null>(null)
  const{ user } = useAuthContext()
  const { addProductToCart } = useCartContext()
  const[quantity,setQuantity] = useState(1)

  const onQuantityChange = (value:number) => {
    if(quantity + value  < 1) return;
    setQuantity(prev => prev + value)
}
  
  const handleAddCart = () => {
    if (user) {
      addProductToCart(product,quantity);
    } else {
      setWarning('Must be logged in to buy products');
    }
  }
 
  if (!product) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-3">
      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2">
          <ProductSlider title={product.title}  images={product.images}/>
      </div>
      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{product.price}</p>

        <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes} />

        <QuantitySelector onQuantityChange={onQuantityChange} quantity={quantity}/>

        <button className="btn-primary my-5" onClick={handleAddCart}>
          Agregar al carrito
        </button>

        {warning && <span className="my-3 text-red-600">{warning}</span>}

        <h3 className="font-bold text-sm">
          Descripcion
        </h3>

        <p className="font-light">
          {product.description}
        </p>
      </div>
    </div>
  )
}
