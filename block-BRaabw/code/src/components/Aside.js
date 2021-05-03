import React from "react";

export function Sidebar(props) {
  console.log(props);
  let sizes = props.products
    .reduce((acc, curr) => {
      acc = acc.concat(curr.availableSizes);
      return acc;
    }, [])
    .reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
  return (
    <aside className="sidebar flex-20">
      <div className="grid grid-template-column">
        {sizes.map((e) => (
          <span
            onClick={() => props.onclickHandler(e)}
            className={props.selectSizes.includes(e) ? "active" : ""}
          >
            {e}
          </span>
        ))}
      </div>
    </aside>
  );
}
