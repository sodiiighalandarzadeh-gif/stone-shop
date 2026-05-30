import { useState, useEffect } from "react"
import axios from "axios"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function Home() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { addToCart, toggleWishlist, isWish } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
  }, [])

  const banner = {
    title: "تجربه خرید حرفه‌ای 🛍",
    desc: "بهترین محصولات با قیمت واقعی",
  }

  return (
    <div style={{ padding: "20px" }}>

      {/* 🌸 HERO BANNER */}
      <div style={{
        background: "linear-gradient(135deg,#a5b4fc,#f9a8d4)",
        padding: "40px",
        borderRadius: "20px",
        color: "white",
        marginBottom: "20px"
      }}>
        <h1>{banner.title}</h1>
        <p>{banner.desc}</p>
      </div>

      {/* 🔥 QUICK CATEGORIES */}
      <div style={{
        display: "flex",
        gap: "10px",
        overflowX: "auto",
        marginBottom: "20px"
      }}>
        {["موبایل", "دکور", "سنگ", "لوکس", "پرفروش"].map(i => (
          <div key={i} style={{
            padding: "10px 15px",
            background: "#f3f4f6",
            borderRadius: "20px",
            whiteSpace: "nowrap",
            cursor: "pointer"
          }}>
            {i}
          </div>
        ))}
      </div>

      {/* 🛍 PRODUCTS GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: "15px"
      }}>

        {loading ? "loading..." : products.map(p => (
          <div
            key={p.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "15px",
              padding: "10px",
              position: "relative"
            }}
          >

            {/* ❤️ */}
            <div
              onClick={() => toggleWishlist(p)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                color: isWish(p.id) ? "red" : "#aaa"
              }}
            >
              ❤️
            </div>

            <img
              src={p.image}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h4>{p.title}</h4>
            <p style={{ color: "red" }}>{p.price} تومان</p>

            <button
              onClick={() => addToCart(p)}
              style={{
                width: "100%",
                padding: "8px",
                background: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "10px"
              }}
            >
              افزودن به سبد
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Home