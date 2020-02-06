import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ActivityList from "../Activity/ActivityList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Header from "../Header";

import gym from "../../assets/Menu/GymMenu.svg";
import pool from "../../assets/Menu/PoolMenu.svg";
import spa from "../../assets/Menu/SpaMenu.svg";
import bar from "../../assets/Menu/LoungeMenu.svg";

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

  return (
    <>
    <Header svgName={name} titleName={titleName}> </Header>
    <Container>
      <Row>
        <Col md={6}>
          <Image src={image[name]} />
        </Col>
        <Col md={6}>
          <ActivityList name={name}></ActivityList>
        </Col>
        <Button variant="primary" onClick={handleClick}>
          На главную
        </Button>
      </Row>
    </Container>
    </>
  );
}
