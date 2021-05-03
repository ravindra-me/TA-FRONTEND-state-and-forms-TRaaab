import React from "react";
function OrderBy(props) {
  return (
    <div className="order-container">
      Order By
      <select value={props.selectedOrder} onChange={props.handleOrderBy}>
        <option value="">select</option>
        <option value="lowest">Lowest to highest</option>
        <option value="highest">Highest to lowest</option>
      </select>
    </div>
  );
}

export default OrderBy;
