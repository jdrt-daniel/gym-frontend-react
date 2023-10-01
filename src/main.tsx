import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeicons/primeicons.css";
import "./index.css";
import { store } from "./stores/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
