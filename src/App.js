import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "../src/pages/homepage/homePage.component";
import ShopPage from "../src/pages/shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
