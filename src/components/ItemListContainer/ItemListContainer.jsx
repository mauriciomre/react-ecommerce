import React from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Item from "../Item/Item";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "productos");
        if (categoriaId) {
            const queryFilter = query(queryCollection, where("category", "==", parseInt(categoriaId)));
            getDocs(queryFilter).then((res) =>
                setItem(res.docs.map((producto) => ({ id: producto.id, ...producto.data() })))
            );
        } else {
            getDocs(queryCollection).then((res) =>
                setItem(res.docs.map((producto) => ({ id: producto.id, ...producto.data() })))
            );
        }
    }, [categoriaId]);

    return (
        <div className="listContainer">
            <Row xs={1} md={3} className="g-4 container-fluid px-5 pt-4">
                {item &&
                    item.map((producto) => {
                        return <Item key={producto.id} producto={producto} />;
                    })}
            </Row>
        </div>
    );
};

export default ItemListContainer;
