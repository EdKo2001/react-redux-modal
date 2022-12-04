import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App";

import store from "./app/store";

import ModalRoot from "./components/ModalFactory/root";

import * as modalComponents from "./utils/ModalComponents";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ModalRoot store={store} modalComponents={modalComponents} />
  </React.StrictMode>
);
