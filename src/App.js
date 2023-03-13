import { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import Container from "./Components/Container";
import Filter from "./Components/Filters";
import Products from "./Components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const cartContext = createContext();

function App() {
  const [cart, updateCart] = useState([]);
  return (
    <>
      <Header />
      <cartContext.Provider value={{ cart, updateCart }}>
        <BrowserRouter>
          <Nav />
          <Container>
            <Routes>
              <Route path="/" element={<><Filter /><Products /></>} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </cartContext.Provider>
    </>
  );
}

export default App;
