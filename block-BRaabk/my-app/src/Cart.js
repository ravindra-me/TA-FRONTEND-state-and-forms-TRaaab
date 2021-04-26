import React from "react";
import data from "./data.json";
import CreateUi from "./CreateUi";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: "all" };
  }
  render() {
    let category = data.map((e) => e.category);
    return (
      <>
        <section className="padding">
          <div className="container">
            <h1>Our Menu</h1>
            <ul className="flex justify-between align-center">
              <li
                onClick={() =>
                  this.setState(() => {
                    return {
                      category: "all",
                    };
                  })
                }
              >
                all
              </li>
              {category.map((e) => (
                <li
                  onClick={() =>
                    this.setState(() => {
                      return {
                        category: e,
                      };
                    })
                  }
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <CreateUi category={this.state.category} />
      </>
    );
  }
}

export default Cart;
