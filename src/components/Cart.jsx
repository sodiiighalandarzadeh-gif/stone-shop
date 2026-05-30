import { useCart } from "../context/CartContext"

function Cart() {

  const { cart, removeFromCart, clearCart } = useCart()

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        سبد خرید شما
      </h1>

      {cart.length === 0 ? (
        <p>سبد خرید خالی است</p>
      ) : (
        <div className="space-y-6">

          {cart.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl flex justify-between items-center">

              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p>{item.price} هزار تومان</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-400 text-white px-4 py-2 rounded-xl"
              >
                حذف
              </button>

            </div>
          ))}

          <button
            onClick={clearCart}
            className="bg-black text-white px-6 py-3 rounded-2xl"
          >
            خالی کردن سبد
          </button>

        </div>
      )}

    </div>
  )
}

export default Cart