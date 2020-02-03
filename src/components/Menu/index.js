import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import * as routes from "../Routes/constants";

class Menu extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={3}>
              <Link to={routes.gym}>Go to gym</Link>
            </Col >
            <Col md={3}>
              <Link to={routes.spa}>Go to spa</Link>
            </Col>
            <Col md={3}>
              <Link to={routes.pool}>Go to pool</Link>
            </Col>
            <Col md={3}>
              <Link to={routes.bar}>Go to bar</Link>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(Menu);
