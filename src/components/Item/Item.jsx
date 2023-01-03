import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { v4 as uuid } from "uuid";

const Item = ({ producto }) => {
    return (
        <Col key={uuid()}>
            <Link key={uuid()} className="nav-link" to={`/item/${producto.id}`}>
                <Card key={uuid()} className="p-1" border="light">
                    <Card.Img key={uuid()} variant="top" src={producto.img} />
                    <Card.Body key={uuid()}>
                        <Card.Text key={uuid()}>{producto.name}</Card.Text>
                        <Card.Title key={uuid()}>${producto.price}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default Item;
