import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi"

function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">

      <div className="flex items-center justify-between p-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-[#DDBEA9]">
          Stone Decor
        </h1>

        {/* Search */}
        <div className="w-[45%] relative">

          <input
            type="text"
            placeholder="جستجوی جاشمعی، سینی سنگی..."
            className="w-full p-3 pr-10 rounded-2xl bg-[#F8EDEB] outline-none"
          />

          <FiSearch className="absolute right-3 top-4 text-gray-500" />

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button className="bg-[#FFD6D6] p-3 rounded-xl hover:scale-105 duration-300">
            <FiUser />
          </button>

          <button className="bg-[#FFF1E6] p-3 rounded-xl hover:scale-105 duration-300">
            <FiShoppingCart />
          </button>

        </div>

      </div>

      {/* Menu */}
      <nav className="flex gap-8 px-6 pb-4 text-gray-600">

        <a href="#">خانه</a>
        <a href="#">فروشگاه</a>
        <a href="#">جاشمعی</a>
        <a href="#">دکور سنگی</a>
        <a href="#">جدیدترین‌ها</a>
        <a href="#">تماس با ما</a>

      </nav>

    </header>
  )
}

export default Navbar