import React from "react";
import { render } from "react-dom";

const App = () => <h1>Setting up React with Parcel bundler</h1>;

const wrapper = document.getElementById("app");
wrapper ? render(<App />, wrapper) : false;
