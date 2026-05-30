import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"

function Header() {

  const navigate = useNavigate()
  const { cart } = useCart()
  const { user, logout } = useAuth()

  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)

  // تعداد کل آیتم‌ها
  const totalItems = cart.reduce((sum, item) => sum + item.count, 0)

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/search?q=${search}`)
    }
  }

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 20px",
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #eee",
      fontFamily: "sans-serif"
    }}>

      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
          color: "#111827"
        }}
      >
        🛍 StoneShop
      </div>

      {/* SEARCH */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
        placeholder="جستجو در محصولات..."
        style={{
          width: "40%",
          padding: "10px 14px",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          outline: "none",
          background: "#f9fafb"
        }}
      />

      {/* RIGHT SIDE */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "15px"
      }}>

        {/* CART */}
        <div
          onClick={() => navigate("/cart")}
          style={{
            position: "relative",
            cursor: "pointer",
            fontSize: "20px"
          }}
        >
          🛒

          {totalItems > 0 && (
            <span style={{
              position: "absolute",
              top: "-6px",
              right: "-10px",
              background: "#ef4444",
              color: "white",
              fontSize: "11px",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {totalItems}
            </span>
          )}
        </div>

        {/* USER SECTION */}
        {user ? (
          <div style={{ position: "relative" }}>

            <div
              onClick={() => setOpen(!open)}
              style={{
                padding: "7px 12px",
                borderRadius: "12px",
                background: "#f3f4f6",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "500"
              }}
            >
              👤 {user.name ? user.name : user.phone}
            </div>

            {/* DROPDOWN */}
            {open && (
              <div style={{
                position: "absolute",
                right: 0,
                top: "40px",
                background: "white",
                border: "1px solid #eee",
                borderRadius: "12px",
                width: "160px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}>

                <div
                  onClick={() => {
                    navigate("/profile")
                    setOpen(false)
                  }}
                  style={itemStyle}
                >
                  👤 پروفایل
                </div>

                <div
                  onClick={() => {
                    navigate("/cart")
                    setOpen(false)
                  }}
                  style={itemStyle}
                >
                  🛒 سبد خرید
                </div>

                <div
                  onClick={() => {
                    logout()
                    navigate("/")
                    setOpen(false)
                  }}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    color: "#ef4444",
                    fontSize: "13px"
                  }}
                >
                  خروج
                </div>

              </div>
            )}

          </div>
        ) : (
          <button
            onClick={() => navigate("/auth")}
            style={{
              padding: "8px 12px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              color: "white",
              background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
              fontSize: "13px"
            }}
          >
            ورود / ثبت‌نام
          </button>
        )}

      </div>

    </header>
  )
}

const itemStyle = {
  padding: "10px",
  cursor: "pointer",
  fontSize: "13px",
  borderBottom: "1px solid #f3f4f6"
}

export default Header