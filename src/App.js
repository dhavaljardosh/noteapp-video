import React from "react";
import "./App.css";
import { store } from "./index";

function App() {
  const { notes, contacts } = store.getState();

  // Action must have a type and can have a payload

  function addName() {
    store.dispatch({
      type: "ADD_NAME",
      name: "Donald Trump",
    });
  }

  function deposit() {
    store.dispatch({
      type: "DEPOSIT",
      amount: 300,
    });
  }

  console.log(contacts);

  return (
    <div className="App">
      <input placeholder="enter name" value="Donald Trump" />
      <button onClick={addName}>Add Name</button>
      {JSON.stringify(contacts)}
    </div>
  );
}

export default App;
