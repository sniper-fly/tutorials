import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Button } from "./components/Button";
import { useState } from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div>Button has been clicked {count} times.</div>
      <Button onClick={() => setCount(count + 1)} />
    </>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
