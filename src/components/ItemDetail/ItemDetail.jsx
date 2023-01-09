import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        addProduct(data, quantity);
    };

    return (
        <div className="container d-flex flex-wrap justify-content-left minHeight maxWidth">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-7">
                    <img className="itemDetailImg" src={data.img} alt={data.name} />
                </div>
                <div className="col-sm-12 col-md-5">
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
