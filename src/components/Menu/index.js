import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Popover,
} from "react-bootstrap";
// import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import * as routes from "../Routes/constants";
import pictureGym from "../../assets/Menu/GymMenu.svg";
import picturePool from "../../assets/Menu/PoolMenu.svg";
import pictureSpa from "../../assets/Menu/SpaMenu.svg";
import pictureLounge from "../../assets/Menu/LoungeMenu.svg";
import Header from "../Header";

import "./menu.css"

class Menu extends Component {
  render() {
    const cardList = cards.map((card, index) => {
      return (
        <Col key={index} xs={12} md={3}>
          <Link to={card.route}>
            <div className="colstyles">
              <OverlayTrigger
                trigger="hover"
                placement="right"
                delay={60}
                overlay={
                  <Popover
                  outOfBoundaries={false}
                    style={{ marginLeft: "-80px", width: 240}}
                    id={`popover-positioned-right`}
                  >
                    <Popover.Title as="h3">{card.title}</Popover.Title>
                    <Popover.Content>{card.text}</Popover.Content>
                  </Popover>
                }
              >
                <Card
                  style={cardStyle}
                  className="bg-dark text-white"
                  border="light"
                  width={"265px"}
                  bg="white"
                >
                  <Card.Img src={card.img} alt={card.title} />
                  <Card.Title>{/* {card.title} */}</Card.Title>
                  <Card.Text>{/* {card.text} */}</Card.Text>
                </Card>
              </OverlayTrigger>
            </div>
          </Link>
        </Col>
      );
    });
    return (
      <>
        <Header svgName="null" titleName="Pleasureland"></Header>
        <Container>
          <Row>{cardList}</Row>
        </Container>
      </>
    );
  }
}

const cards = [
  {
    title: "Спортивный комплекс",
    text: "Спортивный комплекс поможет вам поддерживать себя в отличной форме.",
    category: "gym",
    img: pictureGym,
    route: routes.gym
  },
  {
    title: "Аквапарк",
    text: "Аквапарк позволит вам провести время полезно и весело.",
    category: "pool",
    img: picturePool,
    route: routes.pool
  },
  {
    title: "SPA-комплекс",
    text: "В SPA-комплексе вы сможете отдохнуть душой и телом.",
    category: "spa",
    img: pictureSpa,
    route: routes.spa
  },
  {
    title: "Lounge-зона",
    text: "Lounge-зона - то что нужно после тяжелой учебы.",
    category: "bar",
    img: pictureLounge,
    route: routes.lounge
  }
];

const cardStyle = {
  marginTop: "40px",
  borderRadius: "15px 15px 15px 15px",
  height: "110%",
  width: "110%",
  transition: "transform .2s",
  ":hover": {
    transform: "scale(1.5)"
  }
};


export default withRouter(Menu);
