import { AddToCart, DecrementQuantity, IncrementQuantity } from "./Icons";
import "./App.css";
import React, { useState } from "react";
import dessertProducts from "./data.json";

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/";

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
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[dessert.name]?.quantity > 1) {
        updatedCart[dessert.name].quantity -= 1;
      } else {
        delete updatedCart[dessert.name];
      }
      return updatedCart;
    });
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

  const calculateTotal = () => {
    let total = 0;
    const keys = Object.keys(cart);
    for (let i = 0; i < keys.length; i++) {
      const item = cart[keys[i]];
      total += item.quantity * item.price;
    }
    return Math.round(total * 100) / 100;
  };

  return (
    <>
      <div>
        <h1>Desserts</h1>
        {dessertProducts.map((dessert) => {
          const quantity = cart[dessert.name]?.quantity || 0;

          return (
            <div key={dessert.name}>
              <div className="button">
                <picture>
                  <source media="(max-width: 600px)" srcSet={BASE_URL + dessert.images.mobile} />
                  <source media="(min-width: 600px) and (max-width: 1199px)" srcSet={BASE_URL + dessert.images.tablet} />
                  <img src={BASE_URL + dessert.images.desktop} alt={dessert.name} style={{ width: "auto" }} />
                </picture>

                <button
                  className={quantity === 0 ? "addtocart" : "addtocartorange"}
                  onClick={quantity === 0 ? () => addToCart(dessert) : null}
                >
                  {quantity === 0 ? (
                    <>
                      <AddToCart />
                      <h5 className="addtocarttext">Add to Cart</h5>
                    </>
                  ) : (
                    <>
                      <button className="decrease" onClick={() => decrementQuantity(dessert)}>
                        <DecrementQuantity />
                      </button>
                      <h3 className="quantityh3">{quantity}</h3>
                      <button className="increase" onClick={() => incrementQuantity(dessert)}>
                        <IncrementQuantity />
                      </button>
                    </>
                  )}
                </button>
              </div>
              <div>
                <h2 className="category">{dessert.category}</h2>
                <h1 className="name">{dessert.name}</h1>
                <h2 className="price">${dessert.price}</h2>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart">
        <h1 className="carttext">Your Cart ({Object.keys(cart).length})</h1>
        <ul>
          {Object.keys(cart).map((key) => (
            <li key={key} className="cart-item">
              <div className="cart-details">
                <span>{cart[key].name} <br /> </span>
                <span>
                   {cart[key].quantity} x  @  ${cart[key].price}  =  ${cart[key].quantity  *  cart[key].price }
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <h3>Order Total</h3>
          <h3>${calculateTotal()}</h3>
        </div>
        <div className="carbon-neutral">
          <span className="icon-carbon-neutral">🌿</span>
          <p> <CarbonNeutral/>This is a <strong>carbon-neutral</strong> delivery</p>
        </div>
        <button className="confirm-order">Confirm Order</button>
      </div>
    </>
  );
}

export default App;
