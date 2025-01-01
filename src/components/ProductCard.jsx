const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-6"
      />
      <h3 className="font-bold text-lg mb-2">{product.title}</h3>
      <p className="text-slate-600 font-bold mb-1">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-400"
      >
        Buy now
      </button>
    </div>
  );
};

export default ProductCard;
