import React, {Fragment} from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Pages
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import InventoryPage from "./components/InventoryPage/InventoryPage";
import FeasibleCocktails from "./components/FeasibleCocktails/FeasibleCocktails"
import CocktailPage from "./components/CocktailPage/CocktailPage"
import GuidePage from "./components/GuidesPage/GuidePage";
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
              <Route path="/inventory" element={<InventoryPage/>} />
              <Route path="/feasible_cocktails" element={<FeasibleCocktails/>} />
              <Route path="/cocktails/:id" element={<CocktailPage/>} />
              <Route path="/guides" element={<GuidePage/>} />
          </Routes>
        </Router>
    </Fragment>
  );
}

export default App;


