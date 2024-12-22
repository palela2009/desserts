import {
  AddToCart,
  DecrementQuantity,
  IncrementQuantity,
  CarbonNeutral,
  EmptyCart,
  RemoveItem
} from "./Icons"
import "./App.css"
import React, { useState } from "react"
import dessertProducts from "./data.json"
// import PortalExample from './PortalExample';
const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/"
 
function App() {
  const [cart, setCart] = useState({})
 
  const addToCart = (dessert) => {
    setCart((prevCart) => ({
      ...prevCart,
      [dessert.name]: {
        ...dessert,
        quantity: (prevCart[dessert.name]?.quantity || 0) + 1
      }
    }))
  }
 
  const decrementQuantity = (dessert) => {
    const updatedCart = { ...cart }
    if (updatedCart[dessert.name]?.quantity > 1) {
      updatedCart[dessert.name].quantity -= 1
    } else {
      delete updatedCart[dessert.name]
    }
 
    setCart(updatedCart)
  }
 
  const incrementQuantity = (dessert) => {
    setCart((prevCart) => ({
      ...prevCart,
      [dessert.name]: {
        ...dessert,
        quantity: (prevCart[dessert.name]?.quantity || 0) + 1
      }
    }))
  }
 
  const calculateTotal = () => {
    let total = 0
    const keys = Object.keys(cart)
    for (let i = 0; i < keys.length; i++) {
      const item = cart[keys[i]]
      total += item.quantity * item.price
    }
    return Math.round(total * 100) / 100
  }
  const removeFromCart = (dessert) => {
    const updatedCart = { ...cart }
    delete updatedCart[dessert.name]
    setCart(updatedCart)
  }
 
  return (
    <>
      <div className="all">
        <div className="products">
          <h1 className="h1">Desserts</h1>
          <div className="new">
            {dessertProducts.map((dessert) => {
              const quantity = cart[dessert.name]?.quantity || 0
 
              return (
                <div key={dessert.name} className="pr">
                  <div className="button">
                    <picture>
                      <source
                        media="(max-width: 600px)"
                        srcSet={BASE_URL + dessert.images.mobile}
                      />
                      <source
                        media="(min-width: 600px) and (max-width: 1199px)"
                        srcSet={BASE_URL + dessert.images.tablet}
                      />
                      <img
                        src={BASE_URL + dessert.images.desktop}
                        alt={dessert.name}
                        style={{ width: "100%", borderRadius: "20px" }}
                      />
                    </picture>
 
                    <button
                      className={
                        quantity === 0 ? "addtocart" : "addtocartorange"
                      }
                      onClick={quantity === 0 ? () => addToCart(dessert) : null}
                    >
                      {quantity === 0 ? (
                        <>
                          <AddToCart />
                          <h5 className="addtocarttext">Add to Cart</h5>
                        </>
                      ) : (
                        <>
                          <button
                            className="decrease"
                            onClick={() => decrementQuantity(dessert)}
                          >
                            <DecrementQuantity />
                          </button>
                          <h3 className="quantityh3">{quantity}</h3>
                          <button
                            className="increase"
                            onClick={() => incrementQuantity(dessert)}
                          >
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
              )
            })}
          </div>
        </div>
 
        <div className="cart">
          <h1 className="carttext">Your Cart ({Object.keys(cart).length})</h1>
 
          {Object.keys(cart).length === 0 ? (
            <div className="empty-cart-message">
              <EmptyCart />
              <p className="message">Your added items will appear here</p>
            </div>
          ) : (
            <>
              <ul>
                {Object.keys(cart).map((key) => (
                  <li key={key} className="cart-item">
                    <div className="cart-details">
                      <span className="details">
                        {cart[key].name} <br />
                      </span>
                      <span className="spaced-line">
                        <span className="details1">
                          {cart[key].quantity}x&nbsp;&nbsp;&nbsp;
                        </span>
                        <span className="details2">
                          @ ${cart[key].price} &nbsp;&nbsp;&nbsp;
                        </span>
                        <span className="details3">
                          ${cart[key].quantity * cart[key].price}
                        </span>
                        <button
                          className="remove"
                          onClick={() => removeFromCart(cart[key])}
                        >
                          <RemoveItem />
                        </button>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
 
              <div className="cart-summary">
                <div className="cart-total">
                  <h3 className="total">
                    Order Total:{" "}
                    <span className="total1">${calculateTotal()}</span>
                  </h3>
                </div>
                <div className="carbon-neutral">
                  <p className="carbonneutral">
                    <CarbonNeutral /> This is a <strong>carbon-neutral</strong>{" "}
                    delivery
                  </p>
                </div>
                <button className="confirm-order">Confirm Order</button>
              </div>
              <div className="clipping-container">
                {/* <PortalExample /> */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
 
export default App