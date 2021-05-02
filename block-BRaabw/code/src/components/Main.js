import React from "react";
import OrderBy from "./OrderBy";
import { Product } from "./Products";
function Main(props) {
  return (
    <div class="main flex-70">
      <Product
        selectSizes={props.selectSizes}
        addProducInCart={props.addProducInCart}
      />
    </div>
  );
}

export default Main;
