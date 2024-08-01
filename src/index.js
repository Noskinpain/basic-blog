import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ScrollIndicator from "./components/common/ScrollIndicator";
import { Provider } from "./context/header";
import { BlogProvider } from "./context/blog";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <BlogProvider>
    <div className="font-[Inter]">
      <ScrollIndicator />
      <App />
    </div>
    </BlogProvider>
  </Provider>
);
