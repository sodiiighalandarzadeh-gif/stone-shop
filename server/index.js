const express = require("express")
const cors = require("cors")
const sequelize = require("./db")
const Product = require("./models/Product")

const app = express()

app.use(cors())
app.use(express.json())

// تست سرور
app.get("/", (req, res) => {
  res.send("Server is running 🚀")
})

// گرفتن همه محصولات
app.get("/products", async (req, res) => {
  try {
    console.log("GET /products hit")

    const products = await Product.findAll()

    console.log("Products:", products)

    res.json(products)
  } catch (error) {
    console.log("ERROR:", error)
    res.status(500).json({ error: "خطا در دریافت محصولات" })
  }
})

// افزودن محصول
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.json(product)
  } catch (error) {
    console.log("POST ERROR:", error)
    res.status(500).json({ error: "خطا در افزودن محصول" })
  }
})

// اتصال دیتابیس و اجرای سرور
sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000 🚀")
  })
})
.catch(err => {
  console.log("DB CONNECTION ERROR:", err)
})