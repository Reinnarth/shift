import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import * as routes from "../Routes/constants";
import pictureGym from "../../assets/Menu/GymMenu.jpg";
import picturePool from "../../assets/Menu/PoolMenu.jpeg";
import pictureSpa from "../../assets/Menu/SpaMenu.jpg";
import pictureLounge from "../../assets/Menu/LoungeMenu.jpg";

class Menu extends Component {
  render() {
    const cardList = cards.map(card => {
      return (
        <Col  xs={12} md={3}>
          <Link to={card.route}>
            <Card className="bg-dark text-white" >
              <Card.Img
                width={400}
                height={600}
                src={card.img}
                alt="Бронирование услуг фитнесс-зоны"
              />
              <Card.ImgOverlay>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
      );
    });
    return (
      <>
        <Container>
          <Row>{cardList}</Row>
        </Container>
      </>
    );
  }
}

const cards = [
  {
    title: "Бронирование услуг фитнесс-зоны",
    text: "Sample text",
    category: "gym",
    img: pictureGym,
    route: routes.gym
  },
  {
    title: "Бронирование услуг бассейна",
    text: "Sample text",
    category: "pool",
    img: picturePool,
    route: routes.pool
  },
  {
    title: "Бронирование услуг спа",
    text: "Sample text",
    category: "spa",
    img: pictureSpa,
    route: routes.spa
  },
  {
    title: "Бронирование услуг lounge зоны",
    text: "Sample text",
    category: "lounge",
    img: pictureLounge,
    route: routes.lounge
  }
];
export default withRouter(Menu);
