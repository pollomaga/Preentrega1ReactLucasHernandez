import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NoPage from "./components/NoPage/NoPage";
import Cart from "./components/CartWidget/Cart";
import { CartProvider } from "./components/CartWidget/CartContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} /> 
        <Route path="/detail/:id" element={<ItemDetailContainer />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
