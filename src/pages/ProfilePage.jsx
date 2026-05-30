import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function ProfilePage() {

  const { user, logout } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    return (
      <div style={{ padding: 40 }}>
        <h2>کاربر وارد نشده ❌</h2>
        <button onClick={() => navigate("/auth")}>
          ورود / ثبت‌نام
        </button>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "sans-serif",
      background: "#f8fafc"
    }}>

      <div style={{
        maxWidth: "500px",
        margin: "auto",
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
      }}>

        <h2>👤 پروفایل کاربر</h2>

        <p>نام: {user.name || "-"}</p>
        <p>ایمیل: {user.email}</p>
        <p>تلفن: {user.phone}</p>

        <button
          onClick={() => {
            logout()
            navigate("/")
          }}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            background: "red",
            color: "white"
          }}
        >
          خروج
        </button>

      </div>

    </div>
  )
}

export default ProfilePage