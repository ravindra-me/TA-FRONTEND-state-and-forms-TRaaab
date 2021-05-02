import React from "react";

export function CartItem(props) {
  console.log(props.id);
  return (
    <>
      <article className="cart-article flex ">
        <img src={`/static/products/${props.item.sku}_2.jpg`} alt="" />
        <div className="cart-item-details">
          <p className="cart-item-name">{props.item.title}</p>
          <p>
            {props.item.availableSizes[0]} | {props.item.style}
          </p>
          <p className="quantity">Quantity: {props.item.quntity}</p>
        </div>
        <div className="cart-price flex justify-between flex-column">
          <p
            className="cart-cross"
            onClick={() => props.deleteCartItem(props.item.id)}
          >
            <img src={`/static/sprite_delete-icon.png`} />
          </p>
          <p className="price">{`${
            props.item.currencyFormat + props.item.price
          }`}</p>
          <div className="change-qunt">
            <Increment
              incrementQunatity={() => props.incrementQunatity(props.item.id)}
            />
            <Decrement
              decrementQunatity={() => props.decrementQunatity(props.item.id)}
            />
          </div>
        </div>
      </article>
    </>
  );
}

function Increment(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="plus-icon"
      style={{ backgroundColor: "gray" }}
      onClick={props.incrementQunatity}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}
function Decrement(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="plus-icon"
      style={{ backgroundColor: "gray" }}
      onClick={props.decrementQunatity}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 12H6"
      />
    </svg>
  );
}
