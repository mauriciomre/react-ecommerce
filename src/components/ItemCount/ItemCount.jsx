import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    };

    const increase = () => {
        setCount(count + 1);
    };

    return (
        <div className="d-flex">
            <ButtonGroup size="sm" className="me-2 my-2" aria-label="Basic example">
                <Button disabled={count <= 1} onClick={decrease} variant="dark">
                    -
                </Button>
                <Button disabled variant="light">
                    {count}
                </Button>
                <Button disabled={count >= stock} onClick={increase} variant="dark">
                    +
                </Button>
            </ButtonGroup>
            <Button
                className="badge rounded-pill p-3"
                disabled={stock <= 0}
                onClick={() => {
                    onAdd(count);
                }}
                variant="primary"
            >
                AGREGAR AL CARRITO
            </Button>
        </div>
    );
};

export default ItemCount;
