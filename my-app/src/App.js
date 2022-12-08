import ItemListContainer from './routes/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";
import Home from './Home/Home';
import ItemDetailContainer from './routes/ItemDetailContainer/ItemDetailContainer';
import Cart from './routes/Cart/Cart';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/productos" element={<ItemListContainer/>}></Route>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
