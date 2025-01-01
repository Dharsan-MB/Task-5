const CartModal = ({ cart, removeFromCart, closeCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-slate-200 p-4 rounded-2xl w-124 shadow-lg">
        <h2 className="text-lg font-bold mb-4 ml-2 te">Cart Items</h2>
        {cart.length === 0 ? (
          <p className="ml-2">Empty 🥲 Add items to proceed</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain"
              />
              <div className="flex-1 mx-4">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-white text-white px-2 py-1 rounded hover:bg-slate-400"
              >
                ❌
              </button>
            </div>
          ))
        )}
        <button
          onClick={closeCart}
          className="bg-slate-600 text-white px-4 py-2 rounded mt-4 w-full hover:bg-slate-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
