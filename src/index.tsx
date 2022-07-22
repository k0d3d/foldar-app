import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import reportWebVitals from "./reportWebVitals";
import ThemeContext from "./context/ThemeContext";


const container = document.getElementById("root") as Element;

const root = createRoot(
  container
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContext>
          <App />
        </ThemeContext>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
