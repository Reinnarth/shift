import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../Routes/constants";

class Menu extends Component {
  render() {
    return (
      <>
        <Link to={routes.gym}>Go to gym</Link>
        <br />
        <Link to={routes.spa}>Go to spa</Link>
        <br />
        <Link to={routes.pool}>Go to pool</Link>
        <br />
        <Link to={routes.bar}>Go to bar</Link>
      </>
    );
  }
}

export default withRouter(Menu);
