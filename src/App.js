import React from "react";
import "./App.css";

// Styles
const counterStyles = {
  textAlign: "center",
  marginBottom: 25
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
  render() {
    return (
      <div style={containerStyles}>
        <div className="counter">
          <h1 style={counterStyles}>0</h1>
        </div>

        <div className="buttons">
          <button>Decrease</button>
          <button>Increase</button>
        </div>
      </div>
    );
  }
}

export default App;
