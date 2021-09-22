import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import AllUsers from "./components/pages/AllUsers";
import NotFound from "./components/Errors/NotFound";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/all-users" component={AllUsers} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}
