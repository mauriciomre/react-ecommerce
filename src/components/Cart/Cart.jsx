import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartIcon from "../icons/CartIcon";
import Badge from "react-bootstrap/Badge";
import CartList from "../CartList/CartList";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const { cart, totalQuantity } = useCartContext();

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <Button className="d-flex flex-row-reverse position-relative" variant="outline-dark" onClick={handleShow}>
                <Badge
                    pill
                    className="front mx-1 position-absolute top-90 start-50"
                    bg={cart.length ? "success" : "secondary"}
                >
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
                                navigate(`/checkout/start`);
                            }}
                        >
                            <p className="pb-1 my-auto text-center bold">INICIAR COMPRA</p>
                        </Button>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Cart;
