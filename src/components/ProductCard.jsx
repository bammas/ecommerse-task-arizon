import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import toast from 'react-hot-toast'

export default function ProductCard({ product }) {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()
  const cartItem = cartItems.find(item => item.id === product.id)

  const handleAddToCart = () => {
    addToCart(product)
    toast.success('Added to cart', { duration: 1500 })
  }

  return (
    <div className="border p-4 rounded-2xl shadow-md hover:shadow-xl transition bg-white flex flex-col justify-between">
      <Link href={`/products/${product.id}`} className="block text-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 mx-auto object-contain transition-transform duration-300 hover:scale-105"
        />
        <h2 className="mt-3 text-md font-semibold text-gray-800 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h2>
        <p className="text-blue-700 font-bold text-lg mt-1">${product.price}</p>
      </Link>

      {cartItem ? (
        <div className="mt-5 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-4 w-full">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 text-xl font-bold text-gray-700 transition"
            >
              −
            </button>
            <span className="text-sm font-semibold px-3 py-2 bg-gray-50 rounded shadow-inner">
              {cartItem.quantity}
            </span>
            <button
              onClick={() => increaseQuantity(product.id)}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 text-xl font-bold text-gray-700 transition"
            >
              +
            </button>
          </div>

          <button
            onClick={() => {
              removeFromCart(product.id)
              toast.success('Removed from cart')
            }}
            className="text-sm text-red-600 hover:text-red-800 underline transition"
          >
            Remove from Cart
          </button>
        </div>
      ) : (
        <button
          className="mt-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition w-full shadow"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  )
}
