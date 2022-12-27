import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

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
