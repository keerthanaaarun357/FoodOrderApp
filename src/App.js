import React from "react";
import { useState } from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu"
import Hours from "./Pages/Hours";
import Gallery from "./Pages/Gallery";
import SignIn from "./Pages/SignIn"
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartItem from "./Components/Cart/OrderDelivered";
import CartProvider from "./Store/CartProvider";
import { useEffect } from "react";
import axios from "axios";


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/api/items")
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  const [cartIsShown, setCartIsShown] = useState(false);


  const showCartHandler = () => {
    setCartIsShown(true);
  };


  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Hours&location" element={<Hours />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Order" element={<CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
          <main>
            <Meals />
          </main>
        </CartProvider>} />
        <Route path="/Cart" element={<CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
          <main>
            <CartItem />
          </main>
        </CartProvider>} />
      </Routes>
      <div>
      <h1></h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </Router>
  );
}


export default App;