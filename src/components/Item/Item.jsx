import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Item = ({ producto }) => {
    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} unidades a tu carrito`);
    };

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={producto.img} />
                <Card.Body>
                    <Link className="nav-link" to={`/item/${producto.id}`}>
                        <Card.Title>{producto.name}</Card.Title>
                    </Link>
                    <Card.Text></Card.Text>
                </Card.Body>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </Card>
        </Col>
    );
};

export default Item;
