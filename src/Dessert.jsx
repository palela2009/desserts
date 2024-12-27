import React from "react";
import { AddToCart, DecrementQuantity, IncrementQuantity } from "./Icons";

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/";

function Dessert({ products, cart, addToCart, decrementQuantity, incrementQuantity }) {
  return (
    <div className="products">
      <h1 className="h1">Desserts</h1>
      <div className="new">
        {products.map((dessert) => {
          const quantity = cart[dessert.name]?.quantity || 0;

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
          );
        })}
      </div>
    </div>
  );
}

export default Dessert;
