import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import * as routes from "../Routes/constants";
import pictureGym from "../../assets/Menu/GymMenu.svg";
import picturePool from "../../assets/Menu/PoolMenu.svg";
import pictureSpa from "../../assets/Menu/SpaMenu.svg";
import pictureLounge from "../../assets/Menu/LoungeMenu.svg";
import pictureRectangle from "../../assets/Menu/Rectangle.svg";
import Button from "react-bootstrap/Button";
import Header from "../Header";

class Menu extends Component {
  changeBackground(e) {
    console.log(e.target);
  }
  render() {
    const buttonStyle = {
      marginTop: "50px",
      width: "100%",
      backgroundColor: "#FF8251",
      borderRadius: "15px 15px 15px 15px",
      height:"125%",
      width:"125%"
    }
    const cardStyle =
    {
      marginTop: "10%",
      borderRadius: "15px 15px 15px 15px",
      height:"125%",
      width:"125%"
    }
    const colStyle =
    {
      marginLeft: "10%",
      marginRight: "10%",
    }
    const cardList = cards.map((card, index) => {
      return (
        <>
          <Col key={index} xs={12} md={3}>
            <Link to={card.route}>
              <div style={colStyle}>
                <Card
                  onMouseEnter={this.changeBackground}
                  onMouseLeave={this.changeBackground}
                  style={cardStyle}
                  className="bg-dark text-white"
                  border="light"
                  width={"265px"}
                  bg="white"
                >
                  <Card.Img src={card.img} alt={card.title} />
                  <Card.ImgOverlay>
                    <Card.Title>{/* {card.title} */}</Card.Title>
                    <Card.Text>{/* {card.text} */}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <Button style={buttonStyle} variant="info" size="lg">
                  <svg
                    width="44"
                    height="36"
                    viewBox="0 0 44 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <path
                      d="M19.8057 0L16 3.1725L28.3617 13.5L16 23.8275L19.8057 27L36 13.5L19.8057 0Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </div>
            </Link>
          </Col>
        </>
      );
    });
    return (
      <>
        <Header svgName="null" titleName="Pleasureland">
          {" "}
        </Header>
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

const buttonStyle = {
  marginTop: "50px",
  backgroundColor: "#FF8251",
  borderRadius: "15px 15px 15px 15px",
  height: "100%",
  width: "100%",
  border: "none",
  boxShadow: "0 0 15px rgba(0,0,0,0.5)"
};
const cardStyle = {
  marginTop: "40px",
  borderRadius: "15px 15px 15px 15px",
  height: "100%",
  width: "100%"
};
const colStyle = {
  marginLeft: "10%",
  marginRight: "10%"
};
export default withRouter(Menu);
