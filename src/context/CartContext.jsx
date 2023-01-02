import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((product) => {
                    return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product;
                })
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const clearCart = () => setCart([]);

    const isInCart = (id) => (cart.find((product) => product.id === id) ? true : false);

    const removeProduct = (id) => setCart(cart.filter((product) => product.id !== id));

    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const totalQuantity = cart.reduce((acc, product) => acc + 1 * product.quantity, 0);

    return (
        <CartContext.Provider value={{ clearCart, isInCart, removeProduct, addProduct, total, totalQuantity, cart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
