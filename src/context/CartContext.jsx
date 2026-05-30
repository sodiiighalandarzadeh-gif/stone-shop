import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  // لود از localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    const savedWish = localStorage.getItem("wishlist")

    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWish) setWishlist(JSON.parse(savedWish))
  }, [])

  // ذخیره cart
  const saveCart = (items) => {
    setCart(items)
    localStorage.setItem("cart", JSON.stringify(items))
  }

  // ذخیره wishlist
  const saveWishlist = (items) => {
    setWishlist(items)
    localStorage.setItem("wishlist", JSON.stringify(items))
  }

  // 🛒 ADD TO CART
  const addToCart = (product) => {
    const exist = cart.find(i => i.id === product.id)

    let updated

    if (exist) {
      updated = cart.map(i =>
        i.id === product.id
          ? { ...i, count: (i.count || 1) + 1 }
          : i
      )
    } else {
      updated = [...cart, { ...product, count: 1 }]
    }

    saveCart(updated)
  }

  // 🗑 REMOVE FROM CART
  const removeFromCart = (id) => {
    const updated = cart.filter(i => i.id !== id)
    saveCart(updated)
  }

  // ❤️ TOGGLE WISHLIST
  const toggleWishlist = (product) => {
    const exists = wishlist.find(i => i.id === product.id)

    let updated

    if (exists) {
      updated = wishlist.filter(i => i.id !== product.id)
    } else {
      updated = [...wishlist, product]
    }

    saveWishlist(updated)
  }

  // ❤️ CHECK WISHLIST
  const isWish = (id) => {
    return wishlist.some(i => i.id === id)
  }

  // 🧹 CLEAR CART
  const clearCart = () => {
    saveCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      toggleWishlist,
      isWish,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)