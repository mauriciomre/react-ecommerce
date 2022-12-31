import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartContext";
import { menus } from "./mock";

function App() {
    return (
        <CartProvider>
            <BrowserRouter ClassName="App">
                <NavBar menus={menus} />
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />} />

                    <Route exact path="/category/:categoriaId" element={<ItemListContainer />} />

                    <Route exact path="/item/:productoId" element={<ItemDetailContainer />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
