import { OrderConfirmed } from './Icons.jsx';

export default function ModalContent({ onClose }) {
  const handleStartNewOrder = () => {
    window.location.reload();
  };

  return (
    <div className="modal">
      <OrderConfirmed />
      <div className="orderconfirmed">Order Confirmed</div>
      <div className="orderconfirmed1">We hope you enjoy your food!</div>
      

      <button onClick={handleStartNewOrder} className='orderconfirmed3'>
        <div className='orderconfirmed4'>Start New Order</div>
      </button>
    </div>
  );
}
