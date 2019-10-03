import "./styles.css";
import React from "react";
import Plane from "./plane.png";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Stores and Geos</h1>
      <img src={Plane} className="image" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
