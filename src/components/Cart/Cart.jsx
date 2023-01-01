import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartIcon from "../icons/CartIcon";
import ItemRemoveIcon from "../icons/ItemRemoveIcon";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Cart() {
    const [show, setShow] = useState(false);

    const { cart } = useCartContext();

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
                    <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="listContainer">
                        {cart &&
                            cart.map((producto) => {
                                return (
                                    <Card>
                                        <Card.Img className="col-2" variant="top" src={producto.img} />

                                        <Card.Body className="col-10">
                                            <Card.Text>{producto.name}</Card.Text>
                                            <Button>
                                                <ItemRemoveIcon />
                                            </Button>
                                            <Badge bg="secondary">{producto.quantity}</Badge>
                                            <Badge bg="secondary">${producto.price * producto.quantity}</Badge>
                                        </Card.Body>
                                    </Card>
                                );
                            })}
                        // PONER EL TOTAL
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Cart;
