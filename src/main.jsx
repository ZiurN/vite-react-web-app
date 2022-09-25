import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { UiContextProvider } from "./contexts/uiContext";
import { LangContextProvider } from "./contexts/langContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LangContextProvider>
        <UiContextProvider>
          <App />
        </UiContextProvider>
      </LangContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);