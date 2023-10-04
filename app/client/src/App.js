import React, {Fragment} from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Pages
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import RecipePage from "./components/RecipePage/RecipePage";
import InventoryPage from "./components/InventoryPage/InventoryPage";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <Fragment 
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh"
      }}
    >
         <Router>
          <NavBar/>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/search" element={<SearchPage/>} />
              <Route path="/recipe" element={<RecipePage/>} />
              <Route path="/inventory" element={<InventoryPage/>} />
          </Routes>
        </Router>
    </Fragment>
  );
}

export default App;


