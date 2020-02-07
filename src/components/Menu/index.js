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
  changeBackground(e) {}
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
        <Col key={index} xs={12} md={3} >

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
                  <Card.Title>{card.title}</Card.Title>
                  <hr align="center" width="100%" size="3" color="white" />
                  <Card.Text>{card.text}</Card.Text>
                </Card.ImgOverlay>
              </Card>
              <Button style={buttonStyle} variant="info" size="lg">
                <svg
                  width="44"
                  height="36"
                  viewBox="0 0 44 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  justifyContent='center'
                  alignItems='center'
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
      <Header svgName="null" titleName="Pleasureland"> </Header>
        <Container>
          <Row>{cardList}</Row>
        </Container>
      </>
    );
  }
}

const cards = [
  {
    title: "Бронирование услуг спортивного комплекса",
    text: "Спортивный комплекс нашего обжещития предлагает вам залы по занятиям йогой, боксом и смешынным единоборствам, зал с брусьями, также есть тренажерные залы с кардио зоной и для кросс-фита.",
    category: "gym",
    img: pictureGym,
    route: routes.gym
  },
  {
    title: "Бронирование услуг аквапарка",
    text: "Sample text",
    category: "pool",
    img: picturePool,
    route: routes.pool
  },
  {
    title: "Бронирование услуг SPA-центра",
    text: "Sample text",
    category: "spa",
    img: pictureSpa,
    route: routes.spa
  },
  {
    title: "Бронирование услуг lounge-зоны",
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
  border:"none",
  boxShadow: '0 0 10px rgba(0,0,0,1)'
};
const cardStyle = {
  marginTop: "30%",
  borderRadius: "15px 15px 15px 15px",
  height: "100%",
  width: "100%"
};
const colStyle = {
  marginLeft: "10%",
  marginRight: "10%"
};
export default withRouter(Menu);
