import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import toast from 'react-hot-toast'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const { cartItems, addToCart, removeFromCart } = useCart()

  useEffect(() => {
    if (!id) return
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    fetchProduct()
  }, [id])

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    toast.success(`${quantity} item(s) added to cart`)
  }

  const handleRemove = () => {
    removeFromCart(product.id)
    toast.success('Removed from cart')
  }

  const inCart = cartItems.find(item => item.id === product?.id)

  if (!product) return <div className="container mx-auto p-4">Loading...</div>

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-700">${product.price}</p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
              className="bg-gray-200 text-xl w-10 h-10 rounded-full hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-xl font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(prev => prev + 1)}
              className="bg-gray-200 text-xl w-10 h-10 rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition"
            >
              Add {quantity > 1 ? `${quantity} items` : 'to Cart'}
            </button>
            {inCart && (
              <button
                onClick={handleRemove}
                className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition"
              >
                Remove from Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
