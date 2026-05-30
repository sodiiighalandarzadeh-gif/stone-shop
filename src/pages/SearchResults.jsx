import { useEffect, useState } from "react"
import axios from "axios"
import { useSearchParams, useNavigate } from "react-router-dom"
import ProductCard from "../components/ProductCard"

function SearchResults() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const [params] = useSearchParams()
  const query = params.get("q") || ""

  const navigate = useNavigate()

  useEffect(() => {

    axios.get("http://localhost:5000/products")
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })

  }, [])

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div style={{
      padding: "30px",
      fontFamily: "sans-serif",
      background: "#f8fafc",
      minHeight: "100vh"
    }}>

      <h2>🔍 نتایج جستجو برای: {query}</h2>

      {loading ? (
        <p>در حال جستجو...</p>
      ) : filtered.length === 0 ? (
        <p>محصولی پیدا نشد ❌</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px",
          marginTop: "20px"
        }}>
          {filtered.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => navigate(`/product/${p.id}`)}
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default SearchResults