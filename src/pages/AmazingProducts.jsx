import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function AmazingProducts() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const amazingProducts = products.filter(p => p.isAmazing === true)

  return (
    <div style={{
      padding: 20,
      fontFamily: "sans-serif",
      background: "#f8fafc",
      minHeight: "100vh"
    }}>

      <h2>🔥 شگفت‌انگیزها</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 15,
        marginTop: 20
      }}>

        {amazingProducts.length === 0 ? (
          <p>محصول شگفت‌انگیز وجود ندارد</p>
        ) : (
          amazingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}

      </div>

    </div>
  )
}

export default AmazingProducts