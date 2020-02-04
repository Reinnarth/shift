import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Activity from "../Activity";
import ActivityList from "../Activity/ActivityList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/Button";

import gym from "../../assets/Menu/GymMenu.jpg";
import pool from "../../assets/Menu/PoolMenu.jpeg";
import spa from "../../assets/Menu/SpaMenu.jpg";
import lounge from "../../assets/Menu/LoungeMenu.jpg";

const image = {
  gym,
  pool,
  spa,
  lounge
};
export default function Category(props) {
  const { name } = props;
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Image src={image[name]} />
          </Col>
          <Col md={6}>
            <div>{name} activities list</div>
          </Col>
          <Button variant="primary" onClick={handleClick}>
            На главную
          </Button>
        </Row>
      </Container>
    </>
  );
}
