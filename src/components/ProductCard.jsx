import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"

function ProductCard({ product }) {

  const navigate = useNavigate()
  const { addToCart, toggleWishlist, isWish } = useCart()

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        background: "white",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        transition: "0.3s",
        position: "relative"
      }}
    >

      {/* 💥 IMAGE */}
      <img
        src={product.image}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover"
        }}
      />

      {/* CONTENT */}
      <div style={{ padding: "12px" }}>

        <h3 style={{
          fontSize: "14px",
          fontWeight: "600",
          color: "#1f2937"
        }}>
          {product.title}
        </h3>

        <p style={{
          color: "#f43f5e",
          fontWeight: "700",
          marginTop: "6px"
        }}>
          {product.price.toLocaleString()} تومان
        </p>

        {/* 🛒 BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            addToCart(product)
          }}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontWeight: "700",
            background: "linear-gradient(135deg,#a5b4fc,#fbcfe8)"
          }}
        >
          افزودن به سبد 🛒
        </button>

      </div>

      {/* ❤️ Wishlist */}
      <div
        onClick={(e) => {
          e.stopPropagation()
          toggleWishlist(product)
        }}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "18px",
          color: isWish(product.id) ? "red" : "#bbb",
          cursor: "pointer"
        }}
      >
        ❤️
      </div>

    </div>
  )
}

export default ProductCard