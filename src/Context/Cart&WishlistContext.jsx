import React, { createContext } from 'react';
 import { toast } from 'react-toastify';
export const CartContext = createContext();
export const WishlistContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);
    const [wishlist, setWishlist] = React.useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
        toast.success(`This Product Added To Your Cart`)
    }

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item !== itemId));
        toast.error(`Product Removed From Your Cart`)
    };

    const addToWishlist = (item) => {
        setWishlist((prevWishlist) => [...prevWishlist, item]);
        document.getElementById("wish-list").classList.add("btn-disabled");
        toast.success(`This Product Added To Your Wishlist`)
    };

    const removeFromWishlist = (itemId) => {
        setWishlist((prevWishlist) => prevWishlist.filter(item => item !== itemId));
    };

    return (
        
        <CartContext.Provider value={{ cart,setCart, addToCart, removeFromCart }}>
            <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
                {children}
            </WishlistContext.Provider>
        </CartContext.Provider>
    );
}