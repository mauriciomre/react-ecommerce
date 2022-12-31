import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartIcon from "../icons/CartIcon";
import Badge from "react-bootstrap/Badge";

function Cart() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="d-flex flex-row-reverse" variant="outline-dark" onClick={handleShow}>
                <Badge className="mx-1" bg="success">
                    9
                </Badge>
                <CartIcon />
            </Button>

            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Cart;
