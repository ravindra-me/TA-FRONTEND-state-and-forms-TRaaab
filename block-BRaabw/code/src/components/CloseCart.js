import React from "react";

function CloseCart(props) {
  return (
    <div className="close absolute" onClick={() => props.handleIsTrue()}>
      <div className="relative">
        <img src="/static/bag-icon.png" />
        <span>{props.numberItem.length}</span>
      </div>
    </div>
  );
}

export default CloseCart;
