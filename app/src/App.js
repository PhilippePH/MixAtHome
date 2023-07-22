import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Pages
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import RecipePage from "./components/RecipePage/RecipePage";

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
              <Route path="/search" element={<SearchPage/>} />
              <Route path="/recipe" element={<RecipePage/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;


