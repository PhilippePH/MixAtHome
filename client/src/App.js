import React, { Fragment, useState, useEffect } from "react";
// import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

// import { toast } from "react-toastify";

// Pages
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import InventoryPage from "./components/InventoryPage/InventoryPage";
import FeasibleCocktails from "./components/FeasibleCocktails/FeasibleCocktails"
import CocktailPage from "./components/CocktailPage/CocktailPage"
import GuidePage from "./components/GuidesPage/GuidePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login setAuth={setAuth} />}
          />
          <Route
            path="/register"
            element={<Register setAuth={setAuth} />}
          />
          <Route
            path="/"
            element={
              isAuthenticated ? <HomePage setAuth={setAuth} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/search"
            element={
              isAuthenticated ? <SearchPage setAuth={setAuth} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/inventory"
            element={
              isAuthenticated ? <InventoryPage setAuth={setAuth} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/feasible_cocktails"
            element={
              isAuthenticated ? <FeasibleCocktails setAuth={setAuth} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/cocktails/:id"
            element={
              isAuthenticated ? <CocktailPage setAuth={setAuth} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/guides"
            element={
              isAuthenticated ? <GuidePage setAuth={setAuth} /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
