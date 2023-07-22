import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Pages
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className = "YES"
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh"
  }}
>
         <Router>
          <Routes>
              <Route path="/" element={<HomePage/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;


