import React from "react";
import Login from "./Login";

const isLogedIn = true;

const App = () => {
  return (
    <div className="container">{isLogedIn ? <h1>Hello</h1> : <Login />}</div>
  );
};

export default App;
