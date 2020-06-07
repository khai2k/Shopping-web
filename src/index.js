import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import HomeScreen from './screen/HomeScreen'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <HomeScreen />
  </React.StrictMode>,
  rootElement
);
