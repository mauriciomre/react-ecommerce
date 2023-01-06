import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import CartProvider from "./context/CartContext";
import { menus } from "./mock";
import CheckoutStart from "./components/CheckoutStart/CheckoutStart";
import CheckoutFinish from "./components/CheckoutFinish/CheckoutFinish";

function App() {
    return (
        <BrowserRouter ClassName="App">
            <CartProvider>
                <NavBar menus={menus} />
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />} />

                    <Route exact path="/category/:categoriaId" element={<ItemListContainer />} />

                    <Route exact path="/item/:productoId" element={<ItemDetailContainer />} />

                    <Route exact path="/checkout/start/:orderId" element={<CheckoutStart />} />

                    <Route exact path="/checkout/finish/:orderId" element={<CheckoutFinish />} />
                </Routes>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
