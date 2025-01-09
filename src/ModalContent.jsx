import React from "react";
import { OrderConfirmed } from "./Icons.jsx";
import dessert from "./data.json";

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/";

export default function ModalContent({ cart, onClose }) {
  const handleStartNewOrder = () => {
    window.location.reload();
  };
{
  // თო დავაჭერთ start new order  ს მაშინ ვებსაიტი დარესტარდება 
}
  const calculateCartTotal = () => {
    return Object.keys(cart).reduce((total, key) => {
      return total + cart[key].quantity * cart[key].price;
    }, 0);
  };
  {
    // აქ ვაჯამებთ
  }

  return (
    <div className="modal">
      <OrderConfirmed />
      <div className="orderconfirmed">Order Confirmed</div>
      <div className="orderconfirmed1">We hope you enjoy your food!</div>
    <div className="order-summary">
        <ul className="order-list">
          {Object.keys(cart).map((key) => (
            <li key={key} className="order-item">
              <div className="item-details">
                <img
                  src={`${BASE_URL}${cart[key].images.thumbnail}`}
                  alt={cart[key].name}
                  className="item-thumbnail"
                />
                <div className="order-confirmed7">
                  {cart[key].name}
                  <br />
                  {cart[key].quantity} x ${cart[key].price}
                </div>
                <div className="order-confirmed6">
                  ${cart[key].quantity * cart[key].price}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="order-total">
          Order Total: ${calculateCartTotal()}
        </div>
      </div>

      <button onClick={handleStartNewOrder} className="orderconfirmed3">
        Start New Order
      </button>
    </div>
  );
}
{//მაპით დავწერე თუ რა პროდუქტები იყიდეს და რამდენი დაჯდება ჯამში. მერე ღილაკი რომ თავიდან დაიწყოს.
  }
