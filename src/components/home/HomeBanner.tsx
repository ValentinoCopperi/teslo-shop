import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const HomeBanner = () => {
    return (
        <div className="relative">
            <div className=" min-h-screen" style={{ backgroundImage: 'url(/imgs/homebanner.jpg)', backgroundAttachment:'fixed', backgroundPosition: 'top', backgroundSize: 'cover', filter: 'brightness(50%)' }} />
            <div className="absolute top-10 w-full text-center" >
                <h1 className={`${titleFont.className}antialiased text-white text-5xl sm:text-7xl underline`} ><span className="font-bold">Teslo</span> Shop</h1>
                <h5 className="text-gray-200 pt-12 text-xl px-10 sm:text-2xl">Moda para todos los días: tu estilo, nuestra pasión</h5>
            </div>
            <div className="absolute bottom-24 w-full flex flex-col  justify-center items-center sm:flex-row" >
                <Link href='/products' className="mx-3 my-3 w-1/2 sm:w-1/4 bg-gray-300 rounded-lg text-center p-3 text-gray-700 font-medium transition-all duration-300 hover:bg-gray-400">
                    Comprar ya
                </Link>
                <Link href='/auth/login' className="mx-3 my-3 w-1/2 sm:w-1/4 bg-gray-800 rounded-lg text-center p-3 text-gray-200 font-medium transition-all duration-300 hover:bg-gray-900">
                    Ingresar
                </Link>
            </div>
        </div>

    )
}
