import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/main-page/main-page";
import MendeleevTable from "./components/mendeleev-table/main-table";
import Menu from "./components/main-page/menu";

function Main() {
  return (
    <Router>
      <div className="main">
        <Menu />
        <Route path="/" exact component={MainPage} />
        <Route path="/mendeleev" component={MendeleevTable} />
      </div>
    </Router>
  );
}

export default Main;
