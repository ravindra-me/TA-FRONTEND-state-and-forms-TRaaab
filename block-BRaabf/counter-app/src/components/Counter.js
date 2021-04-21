import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      counter: 0,
      max: 15,
    };
  }
  handleIncrement = () => {
    let { step, counter, max } = this.state;
    this.setState({
      counter: counter < max ? counter + step : counter,
    });
  };
  handleDecrement = () => {
    let { step, counter } = this.state;
    this.setState({
      counter: counter - step,
    });
  };
  handleReset = () => {
    this.setState({
      counter: 0,
      step: 1,
      max: 15,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h2>{this.state.counter}</h2>
          <div>
            <h1>Step</h1>
            {[5, 10, 15].map((step, index) => (
              <button
                key={index}
                onClick={() => {
                  this.setState({
                    step: step,
                  });
                }}
                className={this.state.step === step ? "active btn" : "btn"}
              >
                {step}
              </button>
            ))}
          </div>
          <div>
            <h2>Max</h2>
            {[15, 100, 200].map((maxValue, index) => (
              <button
                key={index}
                onClick={() => {
                  this.setState({
                    max: maxValue,
                  });
                }}
                className={this.state.max === maxValue ? "active btn" : "btn"}
              >
                {maxValue}
              </button>
            ))}
          </div>
          <div className="button-sec">
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleReset}>Rest</button>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
