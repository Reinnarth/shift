import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ActivityList from "../Activity/ActivityList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Header from "../Header";

import gym from "../../assets/Category/Gym.svg";
import pool from "../../assets/Category/Pool.svg";
import spa from "../../assets/Category/Spa.svg";
import bar from "../../assets/Category/Bar.svg";

const buttonStyle = {
  marginTop: "30px",
  width: "100%",
  backgroundColor: "#FF8251",
  borderRadius: "15px 15px 15px 15px",
  height:"125%",
  width:"265px"
}
const image = {
  gym,
  pool,
  spa,
  bar
};

export default function Category({name,titleName}) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
const containerStyle={
  marginTop:"40px"
}
  return (
    <>
    <Header svgName={name} titleName={titleName}> </Header>
    <Container style={containerStyle}>
      <Row>
        <Col md={6}>
          <Image src={image[name]} />
          <Button style={buttonStyle} variant="primary" onClick={handleClick}>
          На главную
        </Button>
        </Col>
        <Col md={6}>
          <ActivityList name={name}></ActivityList>
         
        </Col>
        <Button onClick={handleClick} style={buttonStyle}>
          На главную
        </Button>
      </Row>
    </Container>
    </>
  );
}
const buttonStyle = {
  marginTop: "50px",
  backgroundColor: "#FF8251",
  borderRadius: "15px 15px 15px 15px",
  width: "506px",
  border:"none",
  boxShadow: '0 0 15px rgba(0,0,0,0.5)',
  marginRight:"auto",
  marginLeft:"auto"
};