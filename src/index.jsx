import ReactDOM from "react-dom/client";
import APIContextProvider from "./context/API.jsx";
import ResetContextProvider from "./context/Reset.jsx";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ResetContextProvider>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </ResetContextProvider>
);
