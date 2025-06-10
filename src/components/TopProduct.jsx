import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'

export default function TopProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        // shuffle and pick 10 random products
        const shuffled = data.sort(() => 0.5 - Math.random())
        setProducts(shuffled.slice(0, 10))
      })
  }, [])

  return (
    <section className="py-10 px-4 bg-white max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Top Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
