"use client"
import { titleFont } from "@/config/fonts"
import { Span } from "next/dist/trace"
import Link from "next/link"
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'
import { useStore } from "@/store"
import { useAuthContext } from "@/context/AuthContext"
import { useCartContext } from "@/context/CartContext"
import getTotalProducts from "@/services/cant-productos"
export const TopMenu = () => {
  const openSideMenu = useStore(state => state.openSideMenu)
  const { user } = useAuthContext()
  const {cart} = useCartContext()
  const cantidad = getTotalProducts(cart)
  return (
    <nav className="flex px-5 justify-between items-center w-full">

      {/* Logo */}
      <div>
        <Link
          href="/"
        >
          <span className={`${titleFont.className}antialised font-bold`}>Teslo</span>

          <span> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/products">Todos</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">Hombres</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/women">Mujeres</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/kid">Niños</Link>
      </div>

      {/* Serch,Cart,Menu */}
      <div className="flex items-center">
        {
          user && (
            <Link href='' className="mx-2 text-xl font-bold bg-gray-300 border-white p-2 rounded-full flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
              <span>{user.slice(0, 1).toUpperCase()}</span>
            </Link>
          )
       }

        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-500 text-white">{user ?cantidad : 0}</span>
            <IoCartOutline className="w-8 h-8" />
          </div>
        </Link>

        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" onClick={openSideMenu}>
          Menu
        </button>
      </div>
    </nav>
  )
}
