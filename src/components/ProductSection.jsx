import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import ProductCard from "./ProductCard"
import HeroBanner from "./HeroBanner"
import AmazingSection from "./AmazingSection"
import CategoryBar from "./CategoryBar"
import Footer from "./Footer"

function ProductSection() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")
  const [maxPrice, setMaxPrice] = useState(1000000)
  const [category, setCategory] = useState("همه")

  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
  }, [])

  return (
    <div style={{
      minHeight: "100vh",
      padding: "25px 35px",
      background: "#f8fafc",
      fontFamily: "sans-serif"
    }}>

      {/* HERO */}
      <HeroBanner />

      {/* CATEGORY */}
      <CategoryBar category={category} setCategory={setCategory} />

      {/* FLASH SALE */}
      {!loading && <AmazingSection products={products} />}

      {/* SEARCH */}
      <div style={{ margin: "20px 0" }}>
        <input
          placeholder="جستجو محصول..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #ddd"
          }}
        />
      </div>

      {/* PRODUCTS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "15px"
      }}>

        {loading ? (
          <p>در حال بارگذاری...</p>
        ) : (
          products
            .filter(p =>
              (category === "همه" || p.category === category) &&
              p.title.toLowerCase().includes(search.toLowerCase()) &&
              p.price <= maxPrice
            )
            .map(p => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => navigate(`/product/${p.id}`)}
              />
            ))
        )}

      </div>

      {/* FOOTER */}
      

    </div>
  )
}

export default ProductSection