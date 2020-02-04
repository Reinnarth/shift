import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import * as routes from "../Routes/constants";

class Menu extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Link to={routes.gym}>
                <Card className="bg-dark text-white">
                  <Card.Img src="" alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
            <Col xs={12} md={3}>
              <Link to={routes.spa}>Go to spa</Link>
            </Col>
            <Col xs={12} md={3}>
              <Link to={routes.pool}>Go to pool</Link>
            </Col>
            <Col xs={12} md={3}>
              <Link to={routes.bar}>Go to bar</Link>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(Menu);
