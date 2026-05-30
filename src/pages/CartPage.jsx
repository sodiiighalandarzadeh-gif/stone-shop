import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function CartPage() {

  const { cart, removeFromCart, addToCart, clearCart } = useCart()
  const navigate = useNavigate()

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.count || 1),
    0
  )

  if (!cart.length) {
    return (
      <div style={{
        padding: "50px",
        textAlign: "center",
        fontFamily: "sans-serif"
      }}>
        <h2>🛒 سبد خرید خالی است</h2>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
            color: "white",
            cursor: "pointer"
          }}
        >
          رفتن به فروشگاه
        </button>
      </div>
    )
  }

  return (
    <div style={{
      padding: "30px",
      fontFamily: "sans-serif",
      background: "#f8fafc",
      minHeight: "100vh"
    }}>

      <h2>🛒 سبد خرید شما</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "20px",
        marginTop: "20px"
      }}>

        {/* PRODUCTS */}
        <div>

          {cart.map(item => (
            <div key={item.id} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "white",
              padding: "15px",
              borderRadius: "15px",
              marginBottom: "10px"
            }}>

              <img
                src={item.image}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />

              <div style={{ flex: 1, marginLeft: "15px" }}>
                <h4>{item.title}</h4>
                <p>{item.price.toLocaleString()} تومان</p>
              </div>

              {/* COUNTER */}
              <div style={{ display: "flex", gap: "10px" }}>

                <button
                  onClick={() => addToCart(item)}
                  style={btn}
                >
                  +
                </button>

                <span>{item.count || 1}</span>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    ...btn,
                    background: "#ef4444"
                  }}
                >
                  حذف
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* SUMMARY */}
        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          height: "fit-content"
        }}>

          <h3>خلاصه سفارش</h3>

          <p style={{ marginTop: "10px" }}>
            تعداد: {cart.length}
          </p>

          <p>
            مجموع: {totalPrice.toLocaleString()} تومان
          </p>

          <button
            onClick={() => alert("پرداخت (نمونه)")}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(135deg,#34d399,#60a5fa)",
              color: "white",
              cursor: "pointer"
            }}
          >
            ادامه خرید
          </button>

          <button
            onClick={clearCart}
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "10px",
              borderRadius: "12px",
              border: "none",
              background: "#f87171",
              color: "white"
            }}
          >
            خالی کردن سبد
          </button>

        </div>

      </div>

    </div>
  )
}

const btn = {
  padding: "6px 12px",
  borderRadius: "10px",
  border: "none",
  background: "#3b82f6",
  color: "white",
  cursor: "pointer"
}

export default CartPage