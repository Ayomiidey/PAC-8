import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FilterProvider } from "./components/FilterContext.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="488459655949-obr1tctplugqts0hsriso33uqsjkmsvd.apps.googleusercontent.com">
    <StrictMode>
      <Provider store={store}>
        <FilterProvider>
          <App />
        </FilterProvider>
      </Provider>
    </StrictMode>
  </GoogleOAuthProvider>
);
