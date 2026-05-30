import { useOrder } from "../context/OrderContext"

function OrdersPage() {

  const { orders } = useOrder()

  return (
    <div style={{
      padding: 30,
      fontFamily: "sans-serif",
      background: "#f8fafc",
      minHeight: "100vh"
    }}>

      <h2>📦 سفارش‌های من</h2>

      {orders.length === 0 ? (
        <p>هیچ سفارشی ثبت نشده</p>
      ) : (
        orders.map(order => (
          <div key={order.id} style={{
            background: "white",
            padding: 15,
            marginTop: 15,
            borderRadius: 15
          }}>

            <h4>سفارش #{order.id}</h4>
            <p>📅 {order.date}</p>
            <p>📞 {order.phone}</p>
            <p>📍 {order.address}</p>

            <hr />

            {order.items.map(item => (
              <p key={item.id}>
                {item.title} × {item.count || 1}
              </p>
            ))}

            <h3>💰 {order.total.toLocaleString()} تومان</h3>

          </div>
        ))
      )}

    </div>
  )
}

export default OrdersPage