import { createContext, useContext, useState } from "react"

const OrderContext = createContext()

export function OrderProvider({ children }) {

  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || []
  })

  const addOrder = (order) => {
    const updated = [...orders, order]
    setOrders(updated)
    localStorage.setItem("orders", JSON.stringify(updated))
  }

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => useContext(OrderContext)