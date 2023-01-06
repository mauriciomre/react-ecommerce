import React, { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const navigate = useNavigate();

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

    const addOrder = (order) => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => {
            clearCart();
            navigate(`/checkout/start/${id}`);
        });
    };

    return (
        <CartContext.Provider
            value={{ clearCart, isInCart, removeProduct, addProduct, addOrder, total, totalQuantity, cart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
