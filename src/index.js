import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import { BookProvider } from "./providers/ContextBook";

ReactDOM.render(
  <React.StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
