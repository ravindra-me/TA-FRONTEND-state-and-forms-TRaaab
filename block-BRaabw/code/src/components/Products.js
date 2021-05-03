import React from "react";
import OrderBy from "./OrderBy";
import data from "../data.json";

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrder: "",
    };
  }
  handleOrderBy = (event) => {
    this.setState({
      selectedOrder: event.target.value,
    });
  };
  sortByOrder = (value, sizes, datas) => {
    console.log({ value, sizes });

    let sortData = [...data.products];
    if (sizes.length > 0) {
      sortData = sortData.filter((e) => {
        for (const size of sizes) {
          if (e.availableSizes.includes(size)) {
            return true;
          }
        }
      });
    }
    if (value === "lowest") {
      return sortData.sort((a, b) => a.price - b.price);
    } else if (value === "highest") {
      return sortData.sort((a, b) => b.price - a.price);
    }
    return sortData;
  };
  render() {
    let { selectedOrder } = this.state;
    let products = this.sortByOrder(
      selectedOrder,
      this.props.selectSizes,
      data
    );
    return (
      <>
        <div className="flex justify-between align-center">
          <h3 className="ternary-heading">{products.length} Products Filter</h3>
          <OrderBy
            selectedOrder={selectedOrder}
            handleOrderBy={this.handleOrderBy}
          />
        </div>
        <div className="product-container flex justify-between flex-wrap">
          {products.map((e) => (
            <ProductItem
              item={e}
              addProducInCart={this.props.addProducInCart}
            />
          ))}
        </div>
      </>
    );
  }
}

function ProductItem(props) {
  return (
    <article className="flex-23 cart-item relative">
      <div className="absolute free-shipping">free shipping</div>
      <div className="font-0">
        <img
          src={`/static/products/${props.item.sku}_1.jpg`}
          alt=""
          className="img"
        />
      </div>
      <div className="product-item-detail">
        <p>{props.item.title}</p>
        <div className="line"></div>
        <h3 className="product-price">${props.item.price}</h3>
        <button onClick={() => props.addProducInCart(props.item)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
