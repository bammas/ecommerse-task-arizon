import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'

export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  if (cartItems.length === 0)
    return <div className="text-center py-20 text-xl font-medium">Your cart is empty</div>

  return (
    <>
          <Navbar />
  
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center bg-white shadow p-4 rounded-lg"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4 w-full md:w-1/2">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div>
                <Link href={`/products/${item.id}`} className="text-lg font-medium hover:underline">
                  {item.title}
                </Link>
                <p className="text-blue-600 font-bold">${item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
              >
                -
              </button>
              <span className="min-w-[32px] text-center">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 mt-4 md:mt-0"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer />
      </>
  )
}
