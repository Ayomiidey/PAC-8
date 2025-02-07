import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FilterProvider } from "./components/FilterContext.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <FilterProvider>
        <App />
      </FilterProvider>
    </Provider>
  </StrictMode>
);
