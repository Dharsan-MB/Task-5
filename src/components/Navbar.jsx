const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-slate-300 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold font-mono">🛒FastMart</h1>
      {/* <img src=""></img> */}
      <h1 className="text-xl text-slate-800">New Year Offer live!!</h1>
      <button
        onClick={openCart}
        className="bg-slate-400 text-slate-800 px-4 py-2 rounded hover:bg-slate-500 hover:text-white"
      >
        <span class="material-symbols-outlined">shopping_cart</span>({cartCount}
        )
      </button>
    </nav>
  );
};

export default Navbar;
