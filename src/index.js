import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, combineReducers } from "redux";

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NAME":
      console.log(action);
      return [...state, action.name];
    case "DEPOSIT":
      return { balance: state.balance + action.amount };
    default:
      return state;
  }
};

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case "WITHDRAW":
      return { balance: state.balance - action.amount };
    case "DEPOSIT":
      return { balance: state.balance + action.amount };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  notes: notesReducer,
  contacts: contactsReducer,
});

export const store = createStore(rootReducer);

// {contacts:[], notes:[]}

const render = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

render();

store.subscribe(render);
