import React, { useState } from "react";
import Dessert from "./Dessert";
import Cart from "./Cart";
import "./App.css";
import dessertProducts from "./data.json";

function App() {
  const [cart, setCart] = useState({});
// use state შევქმენი 
  const addToCart = (dessert) => {  // თავიდან ამატებს ერთ ცალ პროდუქტს
    
    setCart((prevCart) => ({
      ...prevCart,
      [dessert.name]: {
        ...dessert,
        quantity: (prevCart[dessert.name]?.quantity || 0) + 1,
      },
    }));
  };
  
  const decrementQuantity = (dessert) => { // ეს ხდება ანუ როცა დავაჭერთ გამოკლების ღილაკს  ანუ პროდუქტის ღილაკი ერთით მციდება . იმ კონკრეტულ პროდუქტს ერთით ამცირებს. 
    const updatedCart = { ...cart };
    if (updatedCart[dessert.name]?.quantity > 1) {
      updatedCart[dessert.name].quantity -= 1;
    } else {
      delete updatedCart[dessert.name];
    }
    setCart(updatedCart);
  };

  const incrementQuantity = (dessert) => { // ეს ხდება ანუ როცა დავაჭერთ დამატების ღილაკს  ანუ პროდუქტის ღილაკი  ერთით იზრდება. იმ კონკრეტულ პროდუქტს ერთით ზრდის.
    setCart((prevCart) => ({
      ...prevCart,
      [dessert.name]: {
        ...dessert,
        quantity: (prevCart[dessert.name]?.quantity || 0) + 1,
      },
    }));
  };

  const removeFromCart = (dessert) => { // ეს მთლიანად პროდუქტს შლის
    const updatedCart = { ...cart };
    delete updatedCart[dessert.name];
    setCart(updatedCart);
  };

  const calculateTotal = () => { // ემატება ყველაფერი და მთლიან თანხას ითვლის
    return Object.keys(cart).reduce((total, key) => {
      const item = cart[key];
      return total + item.quantity * item.price;
    }, 0);
  };

  return (
    <div className="all">
      <Dessert // ეს ფუნქციებია  გამოძახებული და ეხლა ამ ორ ფუნქციას გავარჩევ
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
