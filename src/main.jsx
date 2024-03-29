import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./components/DetailsPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/MeteoApp/" element={<App />} />
        <Route path="/MeteoApp/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
