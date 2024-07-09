"use client"
import Link from "next/link"
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonAddOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"
import { useStore } from "@/store"
import clsx from "clsx"
import { useAuthContext } from "@/context/AuthContext"
export const SideBar = () => {
    const isSideMenuOpen = useStore(state => state.isSideMenuOpen)
    const closeSideMenu = useStore(state => state.closeSideMenu)
    const { user,authSignOut } = useAuthContext()
    return (
        <div>
            {/* Background black */}
            {
                isSideMenuOpen && (
                    <div
                        className="fixed top-0 w-screen h-screen z-10 bg-black opacity-30"
                    />
                )
            }

            {/* Blur */}
            {
                isSideMenuOpen && (
                    <div
                        onClick={closeSideMenu}
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                    />
                )
            }

            {/* SideMenu */}

            <nav

                className={
                    clsx(
                        "fixed p-5 right-0 top-0 w-screen overflow-y-auto   sm:w-[500px] h-screen bg-white z-20 shadow-2xl transform  transition-all duration-300",
                        {
                            "translate-x-full": !isSideMenuOpen
                        }

                    )
                }>

                <IoCloseOutline
                    size={50}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={closeSideMenu}
                />

                {/* Input Search */}

                <div className="relative mt-14">
                    <IoSearchOutline size={20} className="absolute top-2 left-2" />
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Menu */}
                <div
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoPersonOutline size={30} />
                    <p className="ml-3 text-xl">Perfil {user && <span>({user})</span>} </p>
                </div>

                

                {
                    user ? (
                        <button
                            
                            onClick={authSignOut}
                            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                        >
                            <IoLogOutOutline size={30} />
                            <span className="ml-3 text-xl">Salir</span>
                        </button>
                    )
                        : (

                            <Link
                                href="/auth/login"
                                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                            >
                                <IoLogInOutline size={30} />
                                <span className="ml-3 text-xl">Ingresar</span>
                            </Link>
                        )
                }



                <div className="w-full h-px bg-gray-200 my-10" />

                <Link
                    href="/products"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoShirtOutline size={30} />
                    <span className="ml-3 text-xl">Productos</span>
                </Link>

                <Link
                    href="/category/men"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoShirtOutline size={30} />
                    <span className="ml-3 text-xl">Productos hombres</span>
                </Link>

                <Link
                    href="/category/women"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoShirtOutline size={30} />
                    <span className="ml-3 text-xl">Productos mujeres</span>
                </Link>

                <Link
                    href="/category/kid"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoShirtOutline  size={30} />
                    <span className="ml-3 text-xl">Productos niños</span>
                </Link>

                


            </nav>


        </div>
    )
}
