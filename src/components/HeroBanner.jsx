import { useEffect, useState } from "react"

const slides = [
  {
    title: "فروش ویژه تابستانی ☀️",
    desc: "تا 50٪ تخفیف روی محصولات منتخب",
  },
  {
    title: "ارسال سریع 🚚",
    desc: "تحویل سریع در سراسر کشور",
  },
  {
    title: "پرداخت درب منزل 💳",
    desc: "خرید امن و راحت بدون نگرانی",
  }
]

function HeroBanner() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(t)
  }, [])

  const slide = slides[index]

  return (
    <div style={{
      marginBottom: "20px",
      padding: "40px",
      borderRadius: "22px",
      background: "linear-gradient(135deg,#a5b4fc,#fbcfe8,#bae6fd)",
      color: "#1f2937",
      transition: "0.5s",
      boxShadow: "0 15px 40px rgba(0,0,0,0.08)"
    }}>

      <h1 style={{ fontSize: "24px" }}>
        {slide.title}
      </h1>

      <p style={{ marginTop: "10px", opacity: 0.8 }}>
        {slide.desc}
      </p>

    </div>
  )
}

export default HeroBanner