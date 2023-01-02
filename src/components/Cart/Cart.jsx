import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartIcon from "../icons/CartIcon";
import Badge from "react-bootstrap/Badge";
import CartList from "../CartList/CartList";

const Cart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const { totalQuantity } = useCartContext();

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
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Cart;
