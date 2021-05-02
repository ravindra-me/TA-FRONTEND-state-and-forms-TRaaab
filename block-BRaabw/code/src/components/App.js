import React from "react";
import { Sidebar } from "./Aside";
import Main from "./Main";
import data from "../data.json";
import { Cart } from "./Cart";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      cartItem: [],
    };
    this.eventID = null;
  }

  componentDidMount() {
    if (localStorage.carts) {
      this.setState({
        cartItem: JSON.parse(localStorage.carts) || [],
      });
    }
    this.eventID = window.addEventListener(
      "beforeunload",
      this.handleUpdateLocalStorage
    );
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleUpdateLocalStorage);
  }

  handleUpdateLocalStorage = () => {
    localStorage.setItem("carts", JSON.stringify(this.state.cartItem));
  };

  handleClick = (size) => {
    if (this.state.sizes.includes(size)) {
      this.setState((preState) => ({
        sizes: preState.sizes.filter((e) => e !== size),
      }));
    } else {
      this.setState((preState) => ({
        sizes: preState.sizes.concat(size),
      }));
    }
  };

  addProducInCart = (item) => {
    let isPresent = this.state.cartItem.find((e) => e.id === item.id);
    if (isPresent) {
      this.incrementQunatity(item.id);
    } else {
      this.setState((preState) => ({
        cartItem: preState.cartItem.concat(item),
      }));
    }
  };

  incrementQunatity = (id) => {
    console.log(id);
    this.setState((preState) => {
      let updatecartItem = preState.cartItem.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            quntity: e.quntity + 1,
          };
        } else {
          return e;
        }
      });
      return {
        cartItem: updatecartItem,
      };
    });
  };

  decrementQunatity = (id) => {
    this.setState((preState) => {
      let updatecartItem = preState.cartItem.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            quntity: e.quntity - 1,
          };
        } else {
          return e;
        }
      });
      return {
        cartItem: updatecartItem,
      };
    });
  };

  deleteCartItem = (id) => {
    this.setState((preState) => {
      let updatecartItem = preState.cartItem.filter((e) => e.id !== id);
      return {
        cartItem: updatecartItem,
      };
    });
  };

  render() {
    return (
      <>
        <div className="container flex jutify-between ">
          <Sidebar
            {...data}
            selectSizes={this.state.sizes}
            onclickHandler={this.handleClick}
          />
          <Main
            {...data}
            selectSizes={this.state.sizes}
            addProducInCart={this.addProducInCart}
          />
        </div>
        <Cart
          cartItems={this.state.cartItem}
          incrementQunatity={this.incrementQunatity}
          decrementQunatity={this.decrementQunatity}
          deleteCartItem={this.deleteCartItem}
        />
      </>
    );
  }
}

export default App;
