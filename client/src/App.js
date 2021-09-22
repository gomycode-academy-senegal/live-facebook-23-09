import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import ShowUser from "./components/pages/ShowUser";
import AllUsers from "./components/pages/AllUsers";
import AddUser from "./components/pages/AddUser";
import NotFound from "./components/Errors/NotFound";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={AllUsers} />
            <Route exact path="/show-user/:id" component={ShowUser} />
            <Route exact path="/add-user" component={AddUser} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}
