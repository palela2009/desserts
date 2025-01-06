import { OrderConfirmed } from './Icons.jsx';
import dessert from "./data.json";

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/";

export default function ModalContent({ cart, onClose }) {
  const handleStartNewOrder = () => {
    window.location.reload();
  };

  const calculateCartTotal = () => {
    return Object.keys(cart).reduce((total, key) => {
      return total + cart[key].quantity * cart[key].price;
    }, 0);
  };

  return (
    <div className="modal">
      <OrderConfirmed />
      <div className="orderconfirmed">Order Confirmed</div>
      <div className="orderconfirmed1">We hope you enjoy your food!</div>

      <div className="order-summary">
        <ul className="order-list">
          {Object.keys(cart).map((key) => (
            <h4 key={key} className="order-item">
              <div className="item-details">
                <img
                  src={`${BASE_URL}${cart[key].images.thumbnail}`}
                  alt={cart[key].name}
                  className="item-thumbnail"
                />
                <div className='item'>
                &nbsp; &nbsp;{cart[key].name}  <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {cart[key].quantity}  &nbsp; &nbsp; &nbsp; x   &nbsp; &nbsp; &nbsp;${cart[key].price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div className='item1'> $
                {cart[key].quantity * cart[key].price}</div></div>
              </div>
            </h4>
          ))}
        </ul>
        <div className="order-total">
          <h1> Order Total: ${calculateCartTotal()}</h1>
        </div>
      </div>

      <button onClick={handleStartNewOrder} className="orderconfirmed3">
        <div className="orderconfirmed4">Start New Order</div>
      </button>
    </div>
  );
}
