import React, { useState } from "react";
import Dessert from "./Dessert";
import Cart from "./Cart";
import "./App.css";
import dessertProducts from "./data.json";

function App() {
  const [cart, setCart] = useState({});

  const addToCart = (dessert) => {
    setCart((prevCart) => ({
      ...prevCart,
      [dessert.name]: {
        ...dessert,
        quantity: (prevCart[dessert.name]?.quantity || 0) + 1,
      },
    }));
  };

  const decrementQuantity = (dessert) => {
    const updatedCart = { ...cart };
    if (updatedCart[dessert.name]?.quantity > 1) {
      updatedCart[dessert.name].quantity -= 1;
    } else {
      delete updatedCart[dessert.name];
    }
    setCart(updatedCart);
  };

  const incrementQuantity = (dessert) => {
    setCart((prevCart) => ({
      ...prevCart,
      [dessert.name]: {
        ...dessert,
        quantity: (prevCart[dessert.name]?.quantity || 0) + 1,
      },
    }));
  };

  const removeFromCart = (dessert) => {
    const updatedCart = { ...cart };
    delete updatedCart[dessert.name];
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return Object.keys(cart).reduce((total, key) => {
      const item = cart[key];
      return total + item.quantity * item.price;
    }, 0);
  };

  return (
    <div className="all">
      <Dessert
        products={dessertProducts}
        cart={cart}
        addToCart={addToCart}
        decrementQuantity={decrementQuantity}
        incrementQuantity={incrementQuantity}
      />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        calculateTotal={calculateTotal}
      />
    </div>
  );
}

export default App;
