import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"

function AmazingSection({ products }) {

  const { addToCart } = useCart()

  const [time, setTime] = useState({
    h: 2,
    m: 59,
    s: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev

        if (s > 0) s--
        else {
          s = 59
          if (m > 0) m--
          else {
            m = 59
            if (h > 0) h--
          }
        }

        return { h, m, s }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{
      marginTop: "35px",
      padding: "22px",
      borderRadius: "22px",
      background: "linear-gradient(135deg,#e0f2fe,#fce7f3,#e9d5ff)",
      boxShadow: "0 10px 35px rgba(0,0,0,0.05)"
    }}>

      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "15px",
        fontFamily: "sans-serif"
      }}>

        <h2 style={{
          fontSize: "18px",
          fontWeight: "700",
          color: "#334155"
        }}>
          ✨ پیشنهاد ویژه
        </h2>

        <div style={{
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px)",
          padding: "8px 12px",
          borderRadius: "12px",
          fontSize: "13px",
          fontWeight: "600",
          color: "#334155",
          border: "1px solid rgba(255,255,255,0.4)"
        }}>
          ⏳ {time.h}:{time.m}:{time.s}
        </div>

      </div>

      {/* PRODUCTS */}
      <div style={{
        display: "flex",
        overflowX: "auto",
        gap: "14px",
        paddingBottom: "8px"
      }}>

        {products.slice(0, 10).map(p => (
          <div key={p.id} style={{
            minWidth: "180px",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            padding: "10px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            fontFamily: "sans-serif"
          }}>

            <img
              src={p.image}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "12px"
              }}
            />

            <h4 style={{
              fontSize: "13px",
              marginTop: "8px",
              color: "#1f2937",
              fontWeight: "600"
            }}>
              {p.title}
            </h4>

            <p style={{
              color: "#f43f5e",
              fontWeight: "700",
              marginTop: "5px"
            }}>
              {p.price.toLocaleString()} تومان
            </p>

            <button
              onClick={() => addToCart(p)}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                color: "#1f2937",
                background: "linear-gradient(135deg,#c7d2fe,#fbcfe8,#bae6fd)"
              }}
            >
              خرید سریع
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default AmazingSection