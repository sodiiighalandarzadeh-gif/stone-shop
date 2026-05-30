function FeaturesBar() {

  const items = [
    { icon: "💳", text: "پرداخت درب منزل" },
    { icon: "🚚", text: "ارسال سریع" },
    { icon: "🔒", text: "پرداخت امن" },
    { icon: "🎧", text: "پشتیبانی ۲۴ ساعته" }
  ]

  return (
    <div style={{
      display: "flex",
      gap: "12px",
      margin: "20px 0",
      flexWrap: "wrap"
    }}>

      {items.map((item, i) => (
        <div key={i} style={{
          flex: 1,
          minWidth: "180px",
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "15px",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
        }}>
          <div style={{ fontSize: "22px" }}>{item.icon}</div>
          <div style={{
            marginTop: "8px",
            fontWeight: "600",
            color: "#1f2937"
          }}>
            {item.text}
          </div>
        </div>
      ))}

    </div>
  )
}

export default FeaturesBar