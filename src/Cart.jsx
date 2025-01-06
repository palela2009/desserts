import React from "react";
import { EmptyCart, RemoveItem, CarbonNeutral } from "./Icons";
import PortalExample from "./PortalExample";

function Cart({ cart, removeFromCart, calculateTotal }) {
  return (
    <div className="cart">
      <h1 className="carttext">Your Cart ({Object.keys(cart).length})</h1>
      {
        //აქ იწერება რამდენი ცალია ქართში, თუ 0 ია რაოდენობა პროდუქტების  მაშინ სხვა ფუნქცია გამოიძახება, როცა 0 ზე მეტია კი პროდუქტების წერია რამდენია, ანუ რამდენი გამოდის რაოდენოსი შესაბამისად
      }
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
                    <div>
                      <span className="details1">
                        {cart[key].quantity}x&nbsp;&nbsp;&nbsp;
                      </span>
                      <span className="details2">
                        @ ${cart[key].price} &nbsp;&nbsp;&nbsp;
                      </span>
                      <span className="details3">
                        ${cart[key].quantity * cart[key].price}
                      </span>
                    </div>
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
          {
            // ფუნქცია გამოძახებული რომელიც მთლიან თანხას თვლის და მერე კი PORTALEXAMPLE ფუნცია არის გამოძახებული რომელზეც თუ გადახვალთ აღწერილია.
          }
          <div className="cart-summary">
            <div className="cart-total">
              <h3 className="total">
                Order Total: <span className="total1">${calculateTotal()}</span>
              </h3>
            </div>
            <div className="carbon-neutral">
              <p className="carbonneutral">
                <CarbonNeutral /> This is a <strong>carbon-neutral</strong>{" "}
                delivery
              </p>
            </div>
            <PortalExample cart={cart} />
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
