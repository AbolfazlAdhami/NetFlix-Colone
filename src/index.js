import React from "react";
import ReactDOM from "react-dom/client";
import { moveiSlider } from "./store/homeSlice";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { fecthGenre, primeryMovies } from "./store/moviesSlice";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
store.dispatch(moveiSlider());
store.dispatch(fecthGenre());
store.dispatch(primeryMovies());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
