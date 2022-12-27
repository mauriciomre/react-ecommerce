import React from "react";
import Item from "../Item/Item";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Productos, categorias } from "../../mock";

const ItemListContainer = () => {
    const [item, setItem] = useState(Productos);
    const { id } = useParams();

    const FilterCategory = new Promise((resolve, reject) => {
        const newProductos = Productos.filter((p) => p.category == id);
        resolve(id ? newProductos : Productos);
    });

    useEffect(() => {
        FilterCategory.then((response) => {
            setItem(response);
        });
    }, [id]);

    return (
        <div className="listContainer">
            <Row xs={1} md={3} className="g-4 container-fluid px-5 pt-4">
                {item &&
                    item.map((producto) => {
                        return <Item producto={producto} />;
                    })}
            </Row>
        </div>
    );
};

export default ItemListContainer;
