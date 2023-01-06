import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartIcon from "../icons/CartIcon";
import Badge from "react-bootstrap/Badge";
import CartList from "../CartList/CartList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const { cart, totalQuantity, total, addOrder } = useCartContext();

    const order = {
        buyer: {
            name: "Mauricio",
            surname: "Encina",
            email: "maurixmre@gmail.com",
            phone: "543534277226",
            province: "Córdoba",
            city: "Villa Maria",
            address: "Mejico 1086",
        },
        items: cart.map((product) => ({
            id: product.id,
            name: product.name,
            img: product.img,
            price: product.price,
            quantity: product.quantity,
        })),
        total: total,
    };

    return (
        <>
            <Button className="d-flex flex-row-reverse position-relative" variant="outline-dark" onClick={handleShow}>
                <Badge pill className="front mx-1 position-absolute top-90 start-50 " bg="success">
                    {totalQuantity > 99 ? "99+" : totalQuantity}
                </Badge>
                <CartIcon />
            </Button>

            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header className="bg-info text-light" closeButton>
                    <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <CartList />
                    {cart.length > 0 && (
                        <Button
                            className="container-fluid fs-5"
                            variant="dark"
                            text="light"
                            onClick={() => {
                                handleClose();
                                addOrder(order);
                                console.log(order);
                            }}
                        >
                            <p className="pb-1 my-auto text-center bold">FINALIZAR COMPRA</p>
                        </Button>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Cart;
