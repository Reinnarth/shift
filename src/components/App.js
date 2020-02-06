import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Category from "./Category";
import Header from "./Header";
import Activity from "./Activity";
import * as routes from "./Routes/constants";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={routes.home}>
          <Menu />
        </Route>
        <Route exact path={routes.gym}>
          <Category name="gym" />
        </Route>
        <Route exact path={routes.spa}>
          <Category name="spa" />
        </Route>
        <Route exact path={routes.pool}>
          <Category name="pool" />
        </Route>
        <Route exact path={routes.lounge}>
          <Category name="bar" />
        </Route>
        <Route
          exact path={routes.activity}
          render={props => <Activity {...props} category={2} activity={1} />}
        />
      </Switch>
    </>
  );
}

export default App;
