import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

function CartDrawer({ open, setOpen }) {

  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div style={{
      position: "fixed",
      top: 0,
      right: open ? 0 : "-400px",
      width: "360px",
      height: "100vh",
      background: "white",
      boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
      transition: "0.3s",
      zIndex: 2000,
      display: "flex",
      flexDirection: "column"
    }}>

      {/* HEADER */}
      <div style={{
        padding: "15px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <h3>🛒 سبد خرید</h3>
        <button onClick={() => setOpen(false)}>✖</button>
      </div>

      {/* ITEMS */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>

        {cart.length === 0 ? (
          <p>سبد خرید خالیه</p>
        ) : (
          cart.map(item => (
            <div key={item.id} style={{
              display: "flex",
              gap: "10px",
              marginBottom: "10px",
              borderBottom: "1px solid #f1f1f1",
              paddingBottom: "10px"
            }}>

              <img src={item.image} style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "10px"
              }} />

              <div style={{ flex: 1 }}>

                <p style={{ fontSize: "12px" }}>{item.title}</p>

                <p style={{ color: "#ef4444", fontWeight: "bold" }}>
                  {item.price.toLocaleString()}
                </p>

                {/* qty */}
                <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

              </div>

              <button onClick={() => removeFromCart(item.id)}>
                🗑
              </button>

            </div>
          ))
        )}

      </div>

      {/* FOOTER */}
      <div style={{
        borderTop: "1px solid #eee",
        padding: "15px"
      }}>

        <h4>جمع کل: {total.toLocaleString()} تومان</h4>

        <Link to="/cart">
          <button style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            background: "#111",
            color: "white",
            border: "none",
            borderRadius: "10px"
          }}>
            رفتن به پرداخت
          </button>
        </Link>

      </div>

    </div>
  )
}

export default CartDrawer