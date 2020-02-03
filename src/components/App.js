import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Category from "./Category";
import * as routes from "./Routes/constants";

function App() {
  return (
    <>
      <Switch>
        <Route exact path={routes.home}>
          <Menu />
        </Route>
        <Route path={routes.gym}>
          <Category name="gym" />
        </Route>
        <Route path={routes.spa}>
          <Category name="spa" />
        </Route>
        <Route path={routes.pool}>
          <Category name="pool" />
        </Route>
        <Route path={routes.bar}>
          <Category name="bar" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
