function CategoryBar({ setCategory, category }) {

  const categories = [
    "همه",
    "دکور",
    "سنگ",
    "لوکس",
    "پرفروش",
    "جدید"
  ]

  return (
    <div style={{
      display: "flex",
      gap: "10px",
      margin: "15px 0",
      overflowX: "auto"
    }}>

      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          style={{
            padding: "8px 14px",
            borderRadius: "20px",
            border: "1px solid #ddd",
            cursor: "pointer",
            background: category === cat ? "#111" : "white",
            color: category === cat ? "white" : "#111",
            whiteSpace: "nowrap"
          }}
        >
          {cat}
        </button>
      ))}

    </div>
  )
}

export default CategoryBar