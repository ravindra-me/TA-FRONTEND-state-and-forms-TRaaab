import React from "react";
import { questions } from "./data";

class Accordion extends React.Component {
  constructor(props) {
    super();
    this.state = { activeIndex: null };
  }

  isHandelClick = () => {
    console.log("he");
    this.setState({
      isTrue: null,
    });
  };

  render() {
    return (
      <>
        <ul>
          {questions.map((ele, index) => {
            return (
              <>
                <li>
                  <h2
                    onClick={() => {
                      this.setState({
                        activeIndex:
                          this.state.activeIndex === index ? null : index,
                      });
                    }}
                  >
                    {ele.Q} {index === this.state.activeIndex ? "Hide" : "Show"}
                  </h2>
                  {this.state.activeIndex === index && <p>{ele.A}</p>}
                </li>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Accordion;
