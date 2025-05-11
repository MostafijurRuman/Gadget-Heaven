import { useContext, useEffect, useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import { CartContext, WishlistContext } from "../../Context/Cart&WishlistContext";
import { useLoaderData } from "react-router-dom";
import { FaCheckCircle,FaCartPlus,FaTimesCircle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Dashboard() {
  const { cart, setCart,addToCart, removeFromCart } = useContext(CartContext);
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const Products = useLoaderData();

  const [cartProduct, setCartProduct] = useState([]);
  const [wishlistProduct, setWishlistProduct] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [modalTotalCost, setModalTotalCost] = useState(0);
  const [activeSection, setActiveSection] = useState("cart"); // State to track active section

  useEffect(() => {
    // Filter products for the cart
    const filteredCartProducts = Products.filter((product) =>
      cart.includes(product.product_id)
    );
    setCartProduct(filteredCartProducts);

    // Calculate total cost
    const cost = filteredCartProducts.reduce((acc, product) => acc + product.price, 0);
    setTotalCost(cost);
  }, [Products, cart]);

  useEffect(() => {
    // Filter products for the wishlist
    const filteredWishlistProducts = Products.filter((product) =>
      wishlist.includes(product.product_id)
    );
    setWishlistProduct(filteredWishlistProducts);
  }, [Products, wishlist]);

  const handleSortByPrice = () => {
    const sortedProducts = [...cartProduct].sort((a, b) => b.price - a.price); // Sort in descending order
    setCartProduct(sortedProducts);
  };

  const handlePurchase = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }
    setModalTotalCost(totalCost); 
    document.getElementById("payment_modal").showModal();
    setCart([]); 
    setCartProduct([]); 
    setTotalCost(0); 
  };

  const handelAddToCartFromWishlist = (productId) => {
    addToCart(productId);
    removeFromWishlist(productId);
  }

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    toast.error("Product Removed From Your Wishlist");
  }

  return (
    <div>
      {/* Header Section */}
      <div className="bg-purple-600 text-white py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="mb-6 max-w-xl mx-auto">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to
          the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-4">
          <button
            className={`btn rounded-full px-8 font-semibold ${
              activeSection === "cart"
                ? "bg-white text-purple-600"
                : "bg-transparent border-white text-white"
            }`}
            onClick={() => setActiveSection("cart")}
          >
            Cart
          </button>
          <button
            className={`btn rounded-full px-8 font-semibold ${
              activeSection === "wishlist"
                ? "bg-white text-purple-600"
                : "bg-transparent border-white text-white"
            }`}
            onClick={() => setActiveSection("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Cart Section */}
      {activeSection === "cart" && (
        <div>
          <div className="md:flex justify-between items-center mt-12">
            <h1 className="text-[24px] font-bold">Cart</h1>
            <div className="md:flex gap-6">
              <h1 className="text-[24px] font-bold mt-2 md:mt-1 mb-2 md:mb-1">Total cost: ${totalCost}</h1>
              <button
                className="btn text-[18px] font-semibold text-[#9538E2] bg-white border-[#9538E2] rounded-4xl hover:bg-[#9538E2] hover:text-white mr-4"
                onClick={handleSortByPrice}
              >
                Sort by Price <LuArrowUpDown />
              </button>
              <button
                onClick={handlePurchase}
                className="btn text-[18px] font-medium bg-[#9538E2] text-white rounded-4xl hover:bg-white hover:text-[#9538E2] hover:border-[#9538E2]"
              >
                Purchase
              </button>
            </div>
          </div>

          {/* Show Cart Data */}
          <div>
            <div className="grid grid-cols-1 gap-6 mt-8">
              {cartProduct.map((product) => (
                <div
                  key={product.product_id}
                  className="flex items-center bg-white rounded-xl shadow-md p-4 space-x-4"
                >
                  <div className="w-[120px] h-[85px] bg-gray-200 rounded-lg flex-shrink-0">
                    <img
                      src={product.product_image}
                      alt={product.product_title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-lg font-bold">{product.product_title}</h2>
                    <p className="text-gray-500 text-sm">{product.description}</p>
                    <p className="text-md font-semibold mt-2">Price: ${product.price}</p>
                  </div>
                  <div>
                    <button onClick={() => removeFromCart(product.product_id)}>
                      <FaTimesCircle className="text-red-500 text-xl hover:text-red-700" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Wishlist Section */}
      {activeSection === "wishlist" && (
        <div>
          <h1 className="text-[24px] font-bold mt-12">Wishlist</h1>
          <div className="grid grid-cols-1 gap-6 mt-8">
            {wishlistProduct.map((product) => (
              <div
                key={product.product_id}
                className="flex items-center bg-white rounded-xl shadow-md p-4 space-x-4"
              >
                <div className="w-[120px] h-[85px] bg-gray-200 rounded-lg flex-shrink-0">
                  <img
                    src={product.product_image}
                    alt={product.product_title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-lg font-bold">{product.product_title}</h2>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                  <p className="text-md font-semibold mt-2">Price: ${product.price}</p>
                  <button onClick={()=>handelAddToCartFromWishlist(product.product_id)} className="btn bg-purple-600 text-white rounded-4xl mt-4 hover:bg-purple-700">
                                                  Add To Card <FaCartPlus className="ml-2" />
                                              </button>
                </div>
                <div>
                  <button onClick={() => handleRemoveFromWishlist(product.product_id)}>
                    <FaTimesCircle className="text-red-500 text-xl hover:text-red-700" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Purchase Modal */}
      <div>
        <dialog id="payment_modal" className="modal">
          <div className="modal-box w-[350px] text-center rounded-xl">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full shadow-inner">
                <FaCheckCircle className="text-green-600 text-5xl" />
              </div>
            </div>
            <h3 className="font-bold text-xl text-gray-800">Payment Successfully</h3>
            <div className="border-t my-3"></div>
            <p className="text-gray-500 mb-1">Thanks for purchasing.</p>
            <p className="text-md font-semibold text-gray-700">
              Total: <span>${modalTotalCost}</span>
            </p>
            <div className="modal-action justify-center mt-4">
              <form method="dialog">
                <button className="bg-gray-200 text-black py-2 px-6 rounded-full hover:bg-gray-300 transition">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}