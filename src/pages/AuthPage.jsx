import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function AuthPage() {

  const { login } = useAuth()
  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [mode, setMode] = useState("new") // new | login

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    password: ""
  })

  // بررسی کاربر قبلی
  const checkUser = () => {
    const saved = JSON.parse(localStorage.getItem("user"))

    if (saved && saved.phone === phone) {
      setMode("login")
    } else {
      setMode("new")
    }

    setStep(2)
  }

  // OTP (شبیه‌سازی)
  const verifyOtp = () => {
    if (otp === "1234") {
      setStep(3)
    } else {
      alert("کد اشتباه ❌")
    }
  }

  // ثبت‌نام
  const register = () => {

    const newUser = {
      phone,
      name: form.name,
      lastName: form.lastName,
      password: form.password
    }

    login(newUser)
    navigate("/")
  }

  // ورود با رمز
  const loginUser = () => {

    const saved = JSON.parse(localStorage.getItem("user"))

    if (saved?.password === form.password) {
      login(saved)
      navigate("/")
    } else {
      alert("رمز اشتباه ❌")
    }
  }

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#f8fafc,#e0f2fe,#ede9fe)",
      fontFamily: "sans-serif"
    }}>

      <div style={{
        width: "380px",
        padding: "25px",
        borderRadius: "18px",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 15px 40px rgba(0,0,0,0.1)"
      }}>

        <h2 style={{ textAlign: "center" }}>
          🔐 ورود / ثبت‌نام
        </h2>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <input
              placeholder="شماره موبایل"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={input}
            />

            <button onClick={checkUser} style={btn}>
              ادامه
            </button>
          </>
        )}

        {/* STEP 2 OTP */}
        {step === 2 && (
          <>
            {mode === "new" ? (
              <>
                <p style={{ fontSize: "12px" }}>کد تایید (1234)</p>

                <input
                  placeholder="کد ۴ رقمی"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={input}
                />

                <button onClick={verifyOtp} style={btn}>
                  تایید
                </button>
              </>
            ) : (
              <>
                <p style={{ fontSize: "12px" }}>وارد کردن رمز عبور</p>

                <input
                  type="password"
                  placeholder="رمز عبور"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  style={input}
                />

                <button onClick={loginUser} style={btn}>
                  ورود
                </button>
              </>
            )}
          </>
        )}

        {/* STEP 3 REGISTER */}
        {step === 3 && mode === "new" && (
          <>
            <input
              placeholder="نام"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              style={input}
            />

            <input
              placeholder="نام خانوادگی"
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
              style={input}
            />

            <input
              type="password"
              placeholder="رمز عبور"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              style={input}
            />

            <button onClick={register} style={btn}>
              تکمیل ثبت‌نام
            </button>
          </>
        )}

      </div>

    </div>
  )
}

const input = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  outline: "none"
}

const btn = {
  width: "100%",
  marginTop: "15px",
  padding: "12px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
}

export default AuthPage