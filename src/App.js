import React from "react";

import "./index.scss";
import Netflix from "./Netflix";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Netflix />
    </Router>
  );
}

export default App;
