import React from "react";
import Cart from "./Cart";

class Font extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "16px",
      value: "Hello React",
    };
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleFontSize = (event) => {
    console.log(event.target.value);
    this.setState({
      size: event.target.value + "px",
    });
  };

  render() {
    return (
      <>
        <div className="container mx-auto flex justify-between items-center">
          <input
            id="inp"
            value={this.state.intialValue}
            type="text"
            placeholder="type text"
            onChange={this.handleChange}
            className="input-text flex-40"
          ></input>
          <div className="flex justify-between items-center flex-40">
            <label htmlFor="vol">Pixel (between 0 and 80):</label>
            <div>
              <input
                onChange={this.handleFontSize}
                type="range"
                id="vol"
                name="vol"
                min="0"
                max="80"
                value={this.state.size.split("px")[0]}
                className="width-100"
              />
            </div>
          </div>
        </div>

        <Cart {...this.state} />
      </>
    );
  }
}

export default Font;
