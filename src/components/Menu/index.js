import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import * as routes from "../Routes/constants";
import pictureGym from "../../assets/GymMenu.jpg"
import picturePool from "../../assets/PoolMenu.jpeg"
import pictureSpa from "../../assets/SpaMenu.jpg"
import pictureBar from "../../assets/BarMenu.jpg"

class Menu extends Component {
  render() {
    return (
      <>
      
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Link to={routes.gym}>
                <Card className="bg-dark text-white">
                  <Card.Img width={400} height={600} src={pictureGym} alt="Броинрование услуг фитнесс-зоны" />
                  <Card.ImgOverlay>
                    <Card.Title>Броинрование услуг фитнесс-зоны</Card.Title>
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
              <Link to={routes.pool}>
                <Card className="bg-dark text-white">
                  <Card.Img width={400} height={600} src={picturePool} alt="Бронирование услуг бассейна" />
                  <Card.ImgOverlay>
                    <Card.Title>Бронирование услуг бассейна</Card.Title>
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
            <Link to={routes.spa}>
                <Card className="bg-dark text-white">
                  <Card.Img width={400} height={600} src={pictureSpa} alt="Бронирование услуг спа" />
                  <Card.ImgOverlay>
                    <Card.Title>Бронирование услуг спа</Card.Title>
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
            <Link to={routes.bar}>
                <Card className="bg-dark text-white">
                  <Card.Img width={400} height={600} src={pictureBar} alt="Бронирование услуг lounge зоны" />
                  <Card.ImgOverlay>
                    <Card.Title>Бронирование услуг lounge зоны</Card.Title>
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
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(Menu);
