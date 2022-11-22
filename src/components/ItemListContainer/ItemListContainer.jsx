import React from "react";
import Badge from "react-bootstrap/Badge";

const ItemListContainer = (props) => {
    return (
        <>
            <h3>
                <Badge bg="secondary">Hola {props.name}, bienvenido! </Badge>
            </h3>
        </>
    );
};

export default ItemListContainer;
