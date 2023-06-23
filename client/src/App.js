import React from "react";
import "../src/styles/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";

function App() {
  return (
    <div className="top-0 h-full overflow-hidden bg-gray-50">
      <div className="flex flex-col w-full max-w-[460px] md:mx-auto ">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
