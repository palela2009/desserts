import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.jsx';
import dessert from "./data.json";
const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/";

export default function PortalExample({ cart }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    {
      // პორტალს ვიყენებთ როცა ვაჭერთ CONFIRM ORDER ს .USEEFFECT კი იმისთვისაა რომ ასქროლვა დაბლოკოს 
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  return (
    <>
      <button className="confirm-order" onClick={() => setShowModal(true)}>
        Confirm Order
      </button>
      {showModal &&
        createPortal(
          <>
            <div
              className="modal-overlay"
              onClick={() => setShowModal(false)}
            ></div>
            <ModalContent cart={cart} onClose={() => setShowModal(false)} />
          </>,
          document.body
        )}
        {
          //ეხლა კი MODALCONTENT ზე გადავიდეთ
        }
    </>
  );
}
