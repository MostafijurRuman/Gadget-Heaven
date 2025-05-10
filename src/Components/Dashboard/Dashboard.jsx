import { useContext, useEffect, useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import { CartContext, WishlistContext } from "../../Context/Cart&WishlistContext";
import { useLoaderData } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";


export default function Dashboard() {
  const { cart, removeFromCart } = useContext(CartContext);
  const Products = useLoaderData();

  const [cartProduct, setCartProduct] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const filteredProducts = Products.filter((product) =>
      cart.includes(product.product_id)
    );
    setCartProduct(filteredProducts);

    // Calculate total cost
    const cost = filteredProducts.reduce((acc, product) => acc + product.price, 0);
    setTotalCost(cost);
  }, [Products, cart]);

  const handleSortByPrice = () => {
    const sortedProducts = [...cartProduct].sort((a, b) => b.price - a.price); // Sort in descending order
    setCartProduct(sortedProducts);
  };

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
          <button className="btn rounded-full px-8 font-semibold hover:bg-purple-100 hover:text-purple-600 bg-transparent border-white text-white">
            Cart
          </button>
          <button className="btn rounded-full px-8 font-semibold hover:bg-purple-100 hover:text-purple-600 bg-transparent border-white text-white">
            Wishlist
          </button>
        </div>
      </div>

      {/* Cart Section */}
      <div className="md:flex  justify-between items-center mt-12">
        <h1 className="text-[24px] font-bold ">Cart</h1>
        <div className="md:flex gap-6">
          <h1 className="text-[24px] font-bold mt-2 md:mt-1 mb-2 md:mb-1">Total cost: ${totalCost}</h1>
          <button
            className="btn text-[18px] font-semibold text-[#9538E2] bg-white border-[#9538E2] rounded-4xl hover:bg-[#9538E2] hover:text-white mr-4"
            onClick={handleSortByPrice}
          >
            Sort by Price <LuArrowUpDown />
          </button>
          <button className="btn text-[18px] font-medium bg-[#9538E2] text-white rounded-4xl hover:bg-white hover:text-[#9538E2] hover:border-[#9538E2]">
            Purchase
          </button>
        </div>
      </div>

      {/* Show Data */}
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
  );
}