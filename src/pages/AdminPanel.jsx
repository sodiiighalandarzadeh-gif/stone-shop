import { useEffect, useState } from "react"

function AdminPanel() {

  const [products, setProducts] = useState([])

  const [form, setForm] = useState({
    title: "",
    price: "",
    oldPrice: "",
    image: "",
    description: "",
    isAmazing: false
  })

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products")
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const addProduct = async () => {

    const newProduct = {
      ...form,
      price: Number(form.price),
      oldPrice: Number(form.oldPrice)
    }

    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    setForm({
      title: "",
      price: "",
      oldPrice: "",
      image: "",
      description: "",
      isAmazing: false
    })

    fetchProducts()
  }

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE"
    })

    fetchProducts()
  }

  return (
    <div style={{
      padding: 30,
      fontFamily: "sans-serif",
      background: "#f8fafc",
      minHeight: "100vh"
    }}>

      <h2>🛠 پنل ادمین</h2>

      {/* FORM */}
      <div style={{
        background: "white",
        padding: 20,
        borderRadius: 15,
        marginTop: 20
      }}>

        <input
          placeholder="عنوان محصول"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          style={input}
        />

        <input
          placeholder="قیمت"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          style={input}
        />

        <input
          placeholder="قیمت قبلی"
          value={form.oldPrice}
          onChange={(e) => setForm({ ...form, oldPrice: e.target.value })}
          style={input}
        />

        <input
          placeholder="لینک عکس"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          style={input}
        />

        <input
          placeholder="توضیحات"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          style={input}
        />

        {/* ⭐ AMAZING TOGGLE */}
        <label style={{ display: "block", marginTop: 15 }}>
          <input
            type="checkbox"
            checked={form.isAmazing}
            onChange={(e) =>
              setForm({ ...form, isAmazing: e.target.checked })
            }
          />
          💥 شگفت‌انگیز باشد؟
        </label>

        <button onClick={addProduct} style={btn}>
          ➕ افزودن محصول
        </button>

      </div>

      {/* LIST */}
      <div style={{ marginTop: 30 }}>

        {products.map(p => (
          <div key={p.id} style={{
            background: "white",
            padding: 15,
            borderRadius: 15,
            marginTop: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>

            <div>
              <h4>
                {p.title} {p.isAmazing && "🔥"}
              </h4>
              <p>{p.price} تومان</p>
            </div>

            <button
              onClick={() => deleteProduct(p.id)}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: 10
              }}
            >
              حذف
            </button>

          </div>
        ))}

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

const btn = {
  width: "100%",
  marginTop: 15,
  padding: 12,
  borderRadius: 12,
  border: "none",
  background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
  color: "white",
  fontWeight: "bold"
}

export default AdminPanel