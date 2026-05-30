import { useState } from "react"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"
import { useOrder } from "../context/OrderContext"
import { useNavigate } from "react-router-dom"

function CheckoutPage() {

  const { cart, clearCart } = useCart()
  const { user } = useAuth()
  const { addOrder } = useOrder()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    phone: "",
    address: ""
  })

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.count || 1),
    0
  )

  const submitOrder = () => {

    if (!user) {
      alert("ابتدا وارد شوید")
      navigate("/auth")
      return
    }

    if (!form.phone || !form.address) {
      alert("اطلاعات کامل نیست")
      return
    }

    const newOrder = {
      id: Date.now(),
      user,
      items: cart,
      total,
      phone: form.phone,
      address: form.address,
      date: new Date().toLocaleString()
    }

    addOrder(newOrder)
    clearCart()

    alert("🎉 سفارش ثبت شد")
    navigate("/orders")
  }

  return (
    <div style={{
      padding: 30,
      fontFamily: "sans-serif",
      background: "#f8fafc",
      minHeight: "100vh"
    }}>

      <h2>💳 تکمیل سفارش</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: 20,
        marginTop: 20
      }}>

        <div style={{
          background: "white",
          padding: 20,
          borderRadius: 15
        }}>

          <input
            placeholder="شماره تماس"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={input}
          />

          <textarea
            placeholder="آدرس کامل"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            style={textarea}
          />

          <button onClick={submitOrder} style={btn}>
            💳 پرداخت و ثبت سفارش
          </button>

        </div>

        <div style={{
          background: "white",
          padding: 20,
          borderRadius: 15
        }}>

          <h3>🧾 سفارش شما</h3>

          {cart.map(item => (
            <p key={item.id}>
              {item.title} × {item.count || 1}
            </p>
          ))}

          <hr />

          <h3>💰 {total.toLocaleString()} تومان</h3>

        </div>

      </div>

    </div>
  )
}

const input = {
  width: "100%",
  padding: 10,
  marginTop: 10,
  borderRadius: 10,
  border: "1px solid #ddd"
}

const textarea = {
  ...input,
  height: 100
}

const btn = {
  width: "100%",
  marginTop: 15,
  padding: 12,
  borderRadius: 12,
  border: "none",
  background: "linear-gradient(135deg,#34d399,#60a5fa)",
  color: "white",
  fontWeight: "bold"
}

export default CheckoutPage