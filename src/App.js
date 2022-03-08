import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Switch> */}
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route>404 Not Found!</Route>
        {/* </Switch> */}
      </Routes>
    </div>
  );
}

export default App;
