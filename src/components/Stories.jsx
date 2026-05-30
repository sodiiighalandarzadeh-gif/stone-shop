import { useState } from "react"

function Stories() {

  const [active, setActive] = useState(null)

  const stories = [
    {
      id: 1,
      title: "تخفیف ویژه",
      color: "#f87171",
      desc: "تا 50٪ تخفیف روی محصولات"
    },
    {
      id: 2,
      title: "جدیدترین‌ها",
      color: "#60a5fa",
      desc: "محصولات تازه رسیده"
    },
    {
      id: 3,
      title: "ارسال رایگان",
      color: "#34d399",
      desc: "برای خرید بالای 500 هزار"
    },
    {
      id: 4,
      title: "پرفروش‌ها",
      color: "#fbbf24",
      desc: "محبوب‌ترین محصولات"
    }
  ]

  return (
    <div style={{
      margin: "20px 0",
      padding: "10px 0"
    }}>

      {/* Story circles */}
      <div style={{
        display: "flex",
        gap: "15px",
        overflowX: "auto"
      }}>

        {stories.map(s => (
          <div
            key={s.id}
            onClick={() => setActive(s)}
            style={{
              minWidth: "70px",
              textAlign: "center",
              cursor: "pointer"
            }}
          >
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: `conic-gradient(${s.color}, #eee)`,
              margin: "auto"
            }} />

            <p style={{ fontSize: "12px" }}>{s.title}</p>
          </div>
        ))}

      </div>

      {/* Story modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          <div style={{
            width: "300px",
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center"
          }}>

            <div style={{
              width: "100%",
              height: "8px",
              background: active.color,
              borderRadius: "10px"
            }} />

            <h3 style={{ marginTop: "15px" }}>{active.title}</h3>
            <p>{active.desc}</p>

          </div>

        </div>
      )}

    </div>
  )
}

export default Stories