import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { OrderProvider } from "./context/OrderContext"

import Header from "./components/Header"
import Footer from "./components/Footer"

import ProductSection from "./components/ProductSection"
import ProductPage from "./pages/ProductPage"

import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"

import AuthPage from "./pages/AuthPage"
import ProfilePage from "./pages/ProfilePage"
import OrdersPage from "./pages/OrdersPage"

import AdminPanel from "./pages/AdminPanel"
import AmazingProducts from "./pages/AmazingProducts"

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>

          <BrowserRouter>

            {/* HEADER */}
            <Header />

            {/* ROUTES */}
            <Routes>

              {/* HOME */}
              <Route path="/" element={<ProductSection />} />

              {/* PRODUCT DETAIL */}
              <Route path="/product/:id" element={<ProductPage />} />

              {/* CART */}
              <Route path="/cart" element={<CartPage />} />

              {/* CHECKOUT */}
              <Route path="/checkout" element={<CheckoutPage />} />

              {/* AUTH (login/register) */}
              <Route path="/auth" element={<AuthPage />} />

              {/* PROFILE */}
              <Route path="/profile" element={<ProfilePage />} />

              {/* ORDERS */}
              <Route path="/orders" element={<OrdersPage />} />

              {/* ADMIN PANEL */}
              <Route path="/admin" element={<AdminPanel />} />

              {/* AMAZING PRODUCTS */}
              <Route path="/amazing" element={<AmazingProducts />} />

            </Routes>

            {/* FOOTER */}
            <Footer />

          </BrowserRouter>

        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App