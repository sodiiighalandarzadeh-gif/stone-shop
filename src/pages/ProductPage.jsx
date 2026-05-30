import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"

function ProductPage() {

  const { id } = useParams()
  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [mainImage, setMainImage] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => {

        const current = data.find(p => p.id == id)

        setProduct(current)
        setMainImage(current?.images?.[0] || current?.image)
        setSelectedColor(current?.colors?.[0] || "")

        // 🔥 related products
        const relatedItems = data.filter(
          p => p.category === current?.category && p.id != current?.id
        )

        setRelated(relatedItems)

        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })

  }, [id])

  if (loading) {
    return <div style={{ padding: 40 }}>⏳ Loading...</div>
  }

  if (!product) {
    return <div style={{ padding: 40 }}>❌ محصول پیدا نشد</div>
  }

  return (
    <div style={{
      padding: 30,
      fontFamily: "sans-serif"
    }}>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40
      }}>

        {/* LEFT - IMAGE */}
        <div>

          {/* MAIN IMAGE WITH ZOOM */}
          <div style={{
            overflow: "hidden",
            borderRadius: 20
          }}>

            <img
              src={mainImage}
              style={{
                width: "100%",
                height: 450,
                objectFit: "cover",
                borderRadius: 20,
                transition: "0.3s"
              }}
              onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
              onMouseOut={(e) => e.target.style.transform = "scale(1)"}
            />

          </div>

          {/* THUMBNAILS */}
          <div style={{
            display: "flex",
            gap: 10,
            marginTop: 15
          }}>

            {(product.images || [product.image]).map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImage(img)}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 10,
                  cursor: "pointer",
                  border: mainImage === img ? "2px solid #6366f1" : "1px solid #ddd"
                }}
              />
            ))}

          </div>

        </div>

        {/* RIGHT - INFO */}
        <div>

          <h1>{product.title}</h1>

          <p style={{ color: "#666", marginTop: 10 }}>
            {product.description}
          </p>

          {/* PRICE */}
          <div style={{ marginTop: 20 }}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>
              {product.price.toLocaleString()} تومان
            </span>

            {product.oldPrice && (
              <span style={{
                marginLeft: 10,
                textDecoration: "line-through",
                color: "#999"
              }}>
                {product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* COLORS */}
          {product.colors && (
            <div style={{ marginTop: 25 }}>
              <h4>رنگ:</h4>

              <div style={{ display: "flex", gap: 10, marginTop: 10 }}>

                {product.colors.map(color => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: color,
                      border: selectedColor === color ? "3px solid black" : "1px solid #ccc",
                      cursor: "pointer"
                    }}
                  />
                ))}

              </div>
            </div>
          )}

          {/* ADD TO CART */}
          <button
            onClick={() => addToCart({ ...product, selectedColor })}
            style={{
              marginTop: 30,
              width: "100%",
              padding: 15,
              borderRadius: 12,
              border: "none",
              background: "linear-gradient(135deg,#6366f1,#a78bfa)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            افزودن به سبد 🛒
          </button>

        </div>

      </div>

      {/* 🔥 RELATED PRODUCTS */}
      {related.length > 0 && (
        <div style={{ marginTop: 60 }}>

          <h2>🔥 محصولات مرتبط</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 15,
            marginTop: 20
          }}>

            {related.map(item => (
              <div
                key={item.id}
                onClick={() => window.location.href = `/product/${item.id}`}
                style={{
                  cursor: "pointer",
                  background: "white",
                  borderRadius: 15,
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
                }}
              >

                <img
                  src={item.image}
                  style={{
                    width: "100%",
                    height: 150,
                    objectFit: "cover"
                  }}
                />

                <div style={{ padding: 10 }}>
                  <h4>{item.title}</h4>
                  <p style={{ color: "#f43f5e" }}>
                    {item.price.toLocaleString()} تومان
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      )}

    </div>
  )
}

export default ProductPage