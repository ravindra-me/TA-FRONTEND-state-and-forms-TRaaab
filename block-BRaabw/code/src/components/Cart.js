import React from "react";
import CloseCart from "./CloseCart";
import { CartItem } from "./CartItem";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrue: false,
    };
  }
  handleIsTrue = () => {
    this.setState((preState) => ({
      isTrue: !preState.isTrue,
    }));
  };

  render() {
    if (this.state.isTrue) {
      let totalAmount = this.props.cartItems.reduce((acc, curr) => {
        acc += curr.price * curr.quntity;
        return acc;
      }, 0);
      return (
        <div className="">
          <div className=" open-sidebar position-fixed">
            <div className="close-btn absolute" onClick={this.handleIsTrue}>
              <img src={`/static/sprite_delete-icon.png`} className="img" />
            </div>
            <div className="cart-body flex justify-center align-center ">
              <div className="cart-icon relative">
                <img src="/static/bag-icon.png" />
                <span className="absolute">{this.props.cartItems.length}</span>
              </div>
              <h2 className="secondary-heading">Cart</h2>
            </div>
            <div className="cart-items">
              {this.props.cartItems.map((elem) => (
                <CartItem
                  item={elem}
                  incrementQunatity={this.props.incrementQunatity}
                  decrementQunatity={this.props.decrementQunatity}
                  deleteCartItem={this.props.deleteCartItem}
                />
              ))}
            </div>
            <div className="total flex justify-between">
              <h3>SUBTOTAL</h3>
              <h3>{totalAmount}</h3>
            </div>
            <button
              className="checkout"
              onClick={() => alert(`Total amount is ${totalAmount}`)}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <CloseCart
          handleIsTrue={this.handleIsTrue}
          numberItem={this.props.cartItems}
        />
      );
    }
  }
}
