import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card";

const ItemDetail = ({ data }) => {
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        addProduct(data, quantity);
    };

    return (
        <div className="container mt-3 d-flex justify-content-center">
            <div className="row justify-content-center">
                <div className="col">
                    <img className="itemDetailImg" src={data.img} alt={data.name} />
                </div>
                <div className="col">
                    <div className="detailContainer">
                        <span className="fs-2 bold">{data.name}</span>
                        <span className="fs-4">${data.price}</span>
                        <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
