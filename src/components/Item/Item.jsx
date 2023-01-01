import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Item = ({ producto }) => {
    return (
        <Col>
            <Link className="nav-link" to={`/item/${producto.id}`}>
                <Card className="p-1" border="light">
                    <Card.Img variant="top" src={producto.img} />
                    <Card.Body>
                        <Card.Text>{producto.name}</Card.Text>
                        <Card.Title>${producto.price}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default Item;
