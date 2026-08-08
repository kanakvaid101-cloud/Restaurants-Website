'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUtensils, FaShoppingCart } from "react-icons/fa";

export default function Header() {
    const  pathname  = usePathname()
   
    const navitem =[
        {
            path:"/",
            element:"Home"
        },
         {
            path:"/menu",
            element:"Menu"
        },
        {
            path:"/gallery",
            element:"Gallery"
        },
         {
            path:"/about",
            element:"About"
        },
         {
            path:"/contact",
            element:"Contact"
        },
        
        
    ]
  return (
    <header className="bg-[#111827] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <FaUtensils className="text-2xl text-orange-500" />
          <span className="text-2xl font-bold">
            Food<span className="text-orange-500">Hub</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className=" md:flex items-center gap-8 text-sm font-medium">
            {
                navitem.map((item,index)=>{
                    const active = pathname == item.path;
                    return (
                        <Link key={index} href={item.path} className={`hover:text-orange-500 duration-300 px-4 rounded-sm py-2 ${active ? 'bg-orange-500 text-white':''}`}>
                            {item.element}
                        </Link>
                    )
                })
            }
            
          </ul>
        </nav>

        {/* Cart Button */}
        <button className="flex items-center gap-2 bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 duration-300">
          <FaShoppingCart />
          <span>Cart</span>

          <span className="bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            0
          </span>
        </button>

      </div>
    </header>
  );
}