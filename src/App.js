import React from "react";
import "./App.css";

// Styles
const counterStyles = {
  fontSize: 72,
  textAlign: "center",
  marginBottom: 25,
};

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
};

// Main functions
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.getCounter = () => this.state.counter;
  }

  render() {
    return (
      <div style={containerStyles}>
        <div className="counter">
          <h1 style={counterStyles}>{this.state.counter}</h1>
        </div>

        <div className="buttons">
          {/* Decrease */}
          <button
            onClick={() => {
              let c = this.getCounter();
              this.setState({ counter: c - 1 });
            }}
          >
            Decrease
          </button>

          {/* Increase */}
          <button
            onClick={() => {
              let c = this.getCounter();
              this.setState({ counter: c + 1 });
            }}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
