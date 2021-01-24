import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./style.css";
import Home from "./components/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";
import CardDetail from "./components/CardDetail";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/cardDetail" component={CardDetail} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
