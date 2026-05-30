import { useState } from "react"
import { useCart } from "../context/CartContext"
import { useParams } from "react-router-dom"

function ProductPage() {

  const { addToCart } = useCart()
  const { id } = useParams()

  const products = [
    {
      id: "1",
      title: "جاشمعی سنگی",
      price: 450,
      oldPrice: 600,
      desc: "طراحی دست‌ساز مینیمال، مناسب دکور مدرن و لاکچری",
      images: [
        "https://images.unsplash.com/photo-1517705008128-361805f42e86",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
      ]
    },
    {
      id: "2",
      title: "سینی مینیمال",
      price: 780,
      oldPrice: 950,
      desc: "مناسب پذیرایی و دکور میز",
      images: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
      ]
    }
  ]

  const product = products.find(p => p.id === id)

  const [mainImage, setMainImage] = useState(product?.images[0])
  const [count, setCount] = useState(1)

  if (!product) return <h1>محصول پیدا نشد</h1>

  return (
    <div className="p-10 grid grid-cols-2 gap-10">

      {/* Images */}
      <div>

        <img
          src={mainImage}
          className="w-full h-[500px] object-cover rounded-3xl"
        />

        <div className="flex gap-4 mt-4">

          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setMainImage(img)}
              className="w-24 h-24 object-cover rounded-xl cursor-pointer border"
            />
          ))}

        </div>

      </div>

      {/* Info */}
      <div>

        <h1 className="text-4xl font-bold text-[#A5A58D]">
          {product.title}
        </h1>

        <p className="mt-5 text-gray-600">
          {product.desc}
        </p>

        <div className="mt-6 flex items-center gap-4">

          <span className="text-3xl font-bold">
            {product.price} هزار تومان
          </span>

          <span className="line-through text-gray-400">
            {product.oldPrice}
          </span>

        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4 mt-8">

          <button
            onClick={() => setCount(count > 1 ? count - 1 : 1)}
            className="bg-gray-200 px-4 py-2 rounded-xl"
          >
            -
          </button>

          <span className="text-xl">{count}</span>

          <button
            onClick={() => setCount(count + 1)}
            className="bg-gray-200 px-4 py-2 rounded-xl"
          >
            +
          </button>

        </div>

        {/* Add to cart */}
        <button
          onClick={() =>
            addToCart({ ...product, count })
          }
          className="mt-10 bg-[#DDBEA9] text-white px-10 py-4 rounded-2xl text-lg"
        >
          افزودن به سبد خرید
        </button>

      </div>

    </div>
  )
}

export default ProductPage