"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import qualitylogo from "../../public/images/QualityLogo.png";
import { FiUser, FiShoppingCart, FiEye } from "react-icons/fi";
import { useCart } from "@/context/CartContext"; 

export default function Navbar() {
  const [products, setProducts] = useState([]);
  const { cartItems } = useCart()
const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10)));
  }, []);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-4">
        <div className="flex items-center space-x-4 w-full md:w-1/2">
          <Link href="/">
            <Image
              src={qualitylogo}
              alt="Quality Bearings Online"
              width={160}
              height={60}
              className="h-auto w-auto"
              priority
            />
          </Link>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by reference"
              className="w-full border px-3 py-2 rounded text-sm"
            />
          </div>
          <button className="bg-blue-900 text-white px-4 py-2 rounded text-sm">
            Search
          </button>
        </div>
        <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-gray-700">
          <div className="text-center hover:text-blue-700 cursor-pointer">
            <FiUser className="mx-auto text-lg" />
            <p className="font-semibold">Sign In</p>
            <p className="text-xs">Register</p>
          </div>

          <div className="text-center hover:text-blue-700 cursor-pointer">
            <FiEye className="mx-auto text-lg" />
            <p>Recently</p>
            <p className="text-xs">Viewed</p>
          </div>

          <div className="relative cursor-pointer hover:text-blue-700">
           <Link href="/cart" className="relative hover:text-blue-700">
  <FiShoppingCart className="text-2xl mx-auto" />
  {cartCount > 0 && (
    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {cartCount}
    </span>
  )}
</Link>
          </div>
        </div>
      </div>

      <nav className="bg-[#0c1445] text-white text-sm font-semibold tracking-wide uppercase">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-5 overflow-x-auto whitespace-nowrap gap-6">
          <Link href="/products" className="cursor-pointer hover:text-yellow-300">
            Full Product List
          </Link>

          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="cursor-pointer hover:text-yellow-300"
              title={product.title}
            >
              {product.title.length > 8
                ? product.title.slice(0, 8)
                : product.title}
            </Link>
          ))}
        </div>

        <div className="h-[3px] bg-yellow-400 w-full" />
      </nav>
    </header>
  );
}
