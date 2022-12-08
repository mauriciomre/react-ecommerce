import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
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
            </Card>
        </Col>
    );
};

export default Item;
