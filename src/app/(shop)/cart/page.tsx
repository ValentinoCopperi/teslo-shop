"use client"
import { QuantitySelector, Title } from "@/components";
import { useAuthContext } from "@/context/AuthContext";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import getDeliveredCart from './../../../services/delivered-cart';
import { useCartContext } from "@/context/CartContext";
import getTotalProducts from './../../../services/cant-productos';
import getTotalPrize from './../../../services/total-prize';
const carte = [
  initialData.products[0],
  initialData.products[1]
]
export default function () {

  const { user } = useAuthContext()
  const { cart, deleteAllProducts ,deleteOneProduct } = useCartContext()
  const deliveredCart = getDeliveredCart(cart)
  const cantidad = getTotalProducts(cart)
  const total = getTotalPrize(cart)
  const totalImpuestos = total * 0.15

  if (cart.length < 1 || !user) {
    redirect('/empty')
  }

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0 ">
      <div className="flex flex-col w-[1200px]">
        <Title title="Carrito" subtitle="Mi carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas items</span>
            <Link href='products' className="underline mb-5">Continua comprando</Link>


            {
              deliveredCart.map(product => (
                <div key={product.producto.slug} className="flex mb-5">
                  <Image src={`/products/${product.producto.images[0]}`} width={100} height={100} alt={product.title} className="mr-5 rounded" />

                  <div>
                    <p className='font-bold'>{product.producto.title}</p>
                    <p>Unitario: ${product.producto.price}</p>
                    <p>Subtotal: ${product.producto.price * product.cantidad}</p>
                    <p>Cantidad:{product.cantidad}</p>

                    <div className="flex">
                      <button className="underline mt-3 mx-3" onClick={() => deleteAllProducts(product)}>
                        Remover  todos
                      </button>
                      <button className="underline mt-3" onClick={() => deleteOneProduct(product)}>
                        Remover unitario
                      </button>
                    </div>
                  </div>

                </div>
              ))
            }
          </div>

          <div className="bg-white rounded-xl shadow-xl p-7 font-medium">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span>Nro. Productos</span>
              <span className="text-right">{cantidad}</span>
              <span>Subtotal</span>
              <span className="text-right">${total}</span>
              <span>Impuestos (15%)</span>
              <span className="text-right">$ {totalImpuestos}</span>
              <span className="mt-5 text-2xl font-bolder" >Total</span>
              <span className="mt-5 text-2xl text-right font-bolder">$ {total + totalImpuestos}</span>
            </div>

            <div className="w-full mt-5 mx-3" >
              <Link href='' className="flex btn-primary justify-center">
                Checkout
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
