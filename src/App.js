import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer name="Mauricio" />
        </>
    );
}

export default App;
