import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import { useState } from "react";

export default function Main() {
    const products = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category === "All") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === category));
        }
    };

    const categories = ["All", "Laptops", "Phones", "Tablets", "Watch"]; 
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-[#0B0B0B] text-center text-[40px] font-bold mt-45 md:mt-[360px] lg:mt-[500px]">
                Explore Cutting-Edge Gadgets
            </h1>

            {/* Content div */}
            <div className="md:flex mt-10">
                {/*  Category buttons div */ }
                <div className="flex flex-col mt-6 bg-white border border-[#09080F1A] shadow-md rounded-lg p-4 md:h-[50%]">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`py-2 px-4 rounded-full m-2 font-bold ${
                                selectedCategory === category
                                    ? "bg-purple-600 text-white"
                                    : "bg-[#F2F2F2] text-[#0B0B0B]"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                {/* Product cards div */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.product_title} className="card bg-white shadow-md rounded-xl p-4 flex flex-col">
                                <figure className="bg-gray-200 rounded-md flex-grow flex items-center justify-center overflow-hidden">
                                    <img src={product.product_image} alt={product.product_title} className="object-cover h-full w-full" />
                                </figure>
                                <div className="mt-4 space-y-1 flex-grow flex flex-col justify-between">
                                    <h2 className="text-lg font-semibold">{product.product_title}</h2>
                                    <p className="text-sm text-gray-600">Price: {product.price}</p>
                                    <button
                                        className="btn btn-outline btn-sm text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white mt-2"
                                        onClick={() => navigate('/productdetails', { state: { product } })}
                                    >
                                        View Details <FaArrowRight className="ml-2 text-sm" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">No products available in this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
}



// import { useLoaderData } from "react-router-dom";
// import { FaArrowRight } from 'react-icons/fa';
// import { useState } from "react";

// export default function Main() {
//     const products = useLoaderData();
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [filteredProducts, setFilteredProducts] = useState(products);

//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category);
//         if (category === "All") {
//             setFilteredProducts(products);
//         } else {
//             setFilteredProducts(products.filter(product => product.category === category));
//         }
//     };

//     const categories = ["All", "Laptops", "Phones", "Tablets", "Watch"]; 

//     return (
//         <div>
//             <h1 className="text-[#0B0B0B] text-center text-[40px] font-bold mt-45 md:mt-[360px] lg:mt-[500px]">
//                 Explore Cutting-Edge Gadgets
//             </h1>

//             {/* Content div */}
//             <div className="md:flex mt-10">
//                 {/*  Category buttons div */ }
//                                 <div className="flex flex-col mt-6 bg-white border border-[#09080F1A] shadow-md rounded-lg p-4 md:h-[50%]">
//                                     {categories.map(category => (
//                                         <button
//                                             key={category}
//                                             onClick={() => handleCategoryClick(category)}
//                                             className={`py-2 px-4 rounded-full m-2 font-bold ${
//                                                 selectedCategory === category
//                                                     ? "bg-purple-600 text-white"
//                                                     : "bg-[#F2F2F2] text-[#0B0B0B]"
//                                             }`}
//                                         >
//                                             {category}
//                                         </button>
//                                     ))}
//                                 </div>
//                                 {/* Product cards div */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//                     {filteredProducts.length > 0 ? (
//                         filteredProducts.map(({ product_image, product_title, price }) => (
//                             <div key={product_title} className="card bg-white shadow-md rounded-xl p-4 flex flex-col">
//                                 <figure className="bg-gray-200 rounded-md flex-grow flex items-center justify-center overflow-hidden">
//                                     <img src={product_image} alt={product_title} className="object-cover h-full w-full" />
//                                 </figure>
//                                 <div className="mt-4 space-y-1 flex-grow flex flex-col justify-between">
//                                     <h2 className="text-lg font-semibold">{product_title}</h2>
//                                     <p className="text-sm text-gray-600">Price: {price}</p>
//                                     <button className="btn btn-outline btn-sm text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white mt-2">
//                                         View Details <FaArrowRight className="ml-2 text-sm" />
//                                     </button>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-center text-gray-500 col-span-full">No products available in this category.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

