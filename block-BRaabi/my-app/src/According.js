import React from "react";
import { questions } from "./data";

class Accordion extends React.Component {
  constructor(props) {
    super();
    this.state = { isTrue: false };
  }

  isHandelClick = () => {
    console.log("he");
    this.setState({
      isTrue: !this.state.isTrue,
    });
  };

  render() {
    return questions.map((ele, i) => {
      return (
        <>
          <div key={i}>
            <div onClick={this.isHandelClick}>
              <label>{ele.Q}</label>
              <input type="checkbox" />
            </div>
            <div className={this.state.isTrue ? "" : "display-none"}>
              <p> {ele.A}</p>
            </div>
          </div>
        </>
      );
    });
  }
}

export default Accordion;
