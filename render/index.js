import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./style.scss";

import App from "./app";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
