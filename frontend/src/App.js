import React from "react";

import Routes from "./routes";
import Header from "./components/Header";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
