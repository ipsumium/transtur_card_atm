import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "jquery";
import AppForm from "App/AppForm";
import { listenMessages } from "App/messages";
import storeReducers from "./reducers/index";
let reduxDevExt = window["__REDUX_DEVTOOLS_EXTENSION__"];

const store = createStore(storeReducers, reduxDevExt && reduxDevExt());

function main() {
  let placeholder = document.getElementById("app");
  let app = (
    <Provider store={store}>
      <AppForm />
    </Provider>
  );
  ReactDOM.render(app, placeholder);

  document.addEventListener("astilectron-ready", () => {
    listenMessages(store);
  });
}

main();
