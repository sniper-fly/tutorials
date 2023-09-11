import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Animal } from "./components/Animal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

root.render(
  <React.StrictMode>
    {animals.map((animal, idx) => (
      <Animal key={idx} animal={animal} />
      // <li key={idx}>{animal}</li>
    ))}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
