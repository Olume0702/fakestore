
import "./App.css";

import Home from "./componenets/Home";
import About from "./componenets/About";
import Products from "./componenets/Products";
import Error from "./componenets/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componenets/Footer";
import Navbar from "./componenets/Navbar";
import SingleProduct from "./componenets/SingleProduct";
import Carts from "./componenets/Carts";
import { useEffect, useState } from "react";

const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cartItem")) || [];
function App() {
  const [cartItem, setCartItems] = useState(cartItemsFromLocalStorage);
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);
  return (
    <div className="App">  
      <BrowserRouter>
        <Navbar cartItem={cartItem} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route
            path="Products"
            element={
              <Products cartItem={cartItem} setCartItems={setCartItems} />
            }
          />
            <Route
            path="Carts"
            element={
              <Carts cartItem={cartItem} setCartItems={setCartItems} />
            }
          />
          <Route path="SingleProduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Fetcher/> */}
    </div>
  );
}

export default App;
