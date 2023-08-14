import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import "./index.css"
import { StateContextProvider } from "./context"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>
)
