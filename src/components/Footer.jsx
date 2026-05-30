function Footer() {

  const box = {
    background: "rgba(255,255,255,0.65)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    color: "#1f2937"
  }

  return (
    <footer style={{
      marginTop: "50px",
      padding: "40px 25px",
      borderRadius: "25px 25px 0 0",
      background: "linear-gradient(135deg,#e2e8f0,#f1f5f9,#e0f2fe)",
      fontFamily: "sans-serif"
    }}>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "15px"
      }}>

        <div style={box}>
          <h3>🏪 درباره ما</h3>
          <p style={{ opacity: 0.8, lineHeight: "1.7" }}>
            فروشگاه ما تجربه خرید سریع، امن و حرفه‌ای را برای شما فراهم می‌کند.
          </p>
        </div>

        <div style={box}>
          <h3>⚡ خدمات</h3>
          <p>🚚 ارسال سریع در سراسر کشور</p>
          <p>💳 پرداخت در محل</p>
          <p>🔄 ضمانت بازگشت کالا</p>
        </div>

        <div style={box}>
          <h3>🎧 پشتیبانی</h3>
          <p>📞 پاسخگویی ۲۴ ساعته</p>
          <p>📦 پیگیری سفارش</p>
          <p>💬 پشتیبانی آنلاین</p>
        </div>

        <div style={box}>
          <h3>🔒 اعتماد</h3>
          <p>🛡 پرداخت امن</p>
          <p>📊 حفظ حریم شخصی</p>
          <p>✔ خرید مطمئن</p>
        </div>

      </div>

      {/* ENAMAD SECTION */}
      <div style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        flexWrap: "wrap"
      }}>

        <img
          src="https://trustseal.enamad.ir/logo.aspx"
          alt="enamad"
          style={{
            width: "90px",
            background: "white",
            padding: "6px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}
        />

        <div style={{
          fontSize: "13px",
          opacity: 0.7,
          textAlign: "center"
        }}>
          🔒 دارای نماد اعتماد الکترونیکی <br />
          خرید امن، سریع و مطمئن
        </div>

      </div>

      {/* COPYRIGHT */}
      <div style={{
        textAlign: "center",
        marginTop: "25px",
        opacity: 0.6,
        fontSize: "13px",
        color: "#334155"
      }}>
        © 2026 StoneShop - All rights reserved
      </div>

    </footer>
  )
}

export default Footer