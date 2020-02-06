import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import * as routes from "../Routes/constants";
import pictureGym from "../../assets/Menu/GymMenu.jpg";
import picturePool from "../../assets/Menu/PoolMenu.jpeg";
import pictureSpa from "../../assets/Menu/SpaMenu.jpg";
import pictureLounge from "../../assets/Menu/LoungeMenu.jpg";
import Button from "react-bootstrap/Button";

class Menu extends Component {
  changeBackground(e) {
   

  }
  render() {
    const cardList = cards.map((card, index) => {
      return (
        <Col key={index} xs={12} md={3}>
          <Link to={card.route}>
            <Card
              onMouseEnter={this.changeBackground}
              onMouseLeave={this.changeBackground}
              width={265}
              className="bg-dark text-white"
            >
              <Card.Img
                width={265}
                height={443}
                src={card.img}
                alt={card.title}
              />
              <Card.ImgOverlay>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Button variant="info" size="lg" >
              Перейти к бронированию
            </Button>
          </Link>
        </Col>
      );
    });
    return (
      <>
        <Container style={{ margin: "30px auto" }}>
          <Row>{cardList}</Row>
        </Container>
      </>
    );
  }
}

const cards = [
  {
    title: "Бронирование услуг фитнесс-зоны",
    text: "Здесь вы сможете заброинровать что-то",
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
    category: "bar",
    img: pictureLounge,
    route: routes.lounge
  }
];
export default withRouter(Menu);
