import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import ClassBased from "./ClassBased";
import App from "./app";
import { store } from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
