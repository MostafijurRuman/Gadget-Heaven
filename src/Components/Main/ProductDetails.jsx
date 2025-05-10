import { useLocation } from "react-router-dom";
import { FaStar, FaRegStar, FaCartPlus, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext, WishlistContext } from "../../Context/Cart&WishlistContext";

export default function ProductDetails() {
    const location = useLocation();
    const { product } = location.state || {};

    const renderStars = () => {
        const fullStars = Math.floor(product?.rating || 0);
        const emptyStars = 5 - fullStars;
        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={i} className="text-yellow-400" />
                ))}
            </>
        );
    };

    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header Section */}
            <div className="bg-purple-500 text-white pt-12 pb-40 text-center relative z-0">
                <h1 className="text-3xl font-bold">Product Details</h1>
                <p className="text-sm mt-2">
                    Explore the latest gadgets that will take your experience to the next level.
                    From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            {/* Overlapping Card */}
            <div className="relative z-10 -mt-40 px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg mt-8 p-6 flex flex-col lg:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 rounded-lg h-72">
                        {product?.product_image ? (
                            <img
                                src={product.product_image}
                                alt={product.product_title}
                                className="max-h-full object-contain"
                            />
                        ) : (
                            <div className="w-full h-full rounded-lg bg-gray-300 animate-pulse"></div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                        <h2 className="text-xl font-bold">{product?.product_title}</h2>
                        <p className="text-lg font-semibold mt-1">Price: ${product?.price}</p>

                       {product?.inStock !== undefined && (
                            <div className="mt-2">
                                {product.inStock ? (
                                    <span className="badge badge-success badge-outline text-sm">
                                        In Stock
                                    </span>
                                ) : (
                                    <span className="badge badge-error badge-outline text-sm">
                                        Out of Stock
                                    </span>
                                )}
                            </div>
                        )}


                        {product?.description && (
                            <p className="text-sm mt-3 text-gray-700">{product.description}</p>
                        )}

                        {product?.Specification && product.Specification.length > 0 && (
                            <div className="mt-4">
                                <h4 className="font-semibold mb-1">Specification:</h4>
                                <ul className="list-disc ml-6 text-sm text-gray-800">
                                    {product.Specification.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {product?.rating !== undefined && (
                            <div className="mt-4 flex items-center gap-2">
                                <span className="font-semibold text-sm">Rating ✨:</span>
                                <div className="flex">{renderStars()}</div>
                                <span className="text-sm text-gray-600 bg-[#09080F0D] rounded-4xl p-2">
                                    {product.rating}
                                </span>
                            </div>
                        )}

                        <div className="mt-6 flex items-center gap-3">
                            <button onClick={()=>addToCart(product.product_id)} className="btn bg-purple-600 text-white hover:bg-purple-700">
                                Add To Card <FaCartPlus className="ml-2" />
                            </button>
                            <button className="btn btn-outline">
                                <FaHeart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}