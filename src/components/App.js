import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Category from "./Category";
import Activity from "./Activity";
import * as routes from "./Routes/constants";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      
      <Switch>
        <Route exact path={routes.home}>
          <Menu />
        </Route>
        <Route exact path={routes.gym}>
          <Category name="gym" titleName="Спортивный комплекс"/>
        </Route>
        <Route exact path={routes.spa}>
          <Category name="spa" titleName="SPA-комплекс"/>
        </Route>
        <Route exact path={routes.pool}>
          <Category name="pool" titleName="Аквапарк"/>
        </Route>
        <Route exact path={routes.lounge}>
          <Category name="bar"  titleName="Lounge-зона"/>
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
