import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    <Toaster position="bottom-right" />
  </>,
);
