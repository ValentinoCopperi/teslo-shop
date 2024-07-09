import { titleFont } from '@/config/fonts'
import './home-category.css'
import Link from 'next/link'
export const HomeCategorySection = () => {
  return (
    <div className='pb-12'>
      <h1 className={`${titleFont.className} antialiased text-center text-4xl py-12`}>PRODUCTOS</h1>
      <div className="flex justify-evenly">
        <div className="w-1/4 div-categories shadow-lg">
          <div className="background div-categories-men"></div>
          <Link href='/category/men' className="content px-14 py-28 text-2xl text-white font-semibold">HOMBRES</Link>
        </div>
        <div className="w-1/4 div-categories shadow-lg">
          <div className="background div-categories-women"></div>
          <Link href='/category/women' className="content px-14 py-28 text-2xl text-white font-semibold">MUJERES</Link>
        </div>
        <div className="w-1/4 div-categories shadow-lg">
          <div className="background div-categories-kid"></div>
          <Link href='/category/kid' className="content px-14 py-28 text-2xl text-white font-semibold">NIÑOS</Link>
        </div>
      </div>
    </div>

  )
}
