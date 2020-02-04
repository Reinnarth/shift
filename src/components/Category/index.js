import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Activity from "../Activity";
import ActivityList from '../Activity/ActivityList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'

export default function Category(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  if (props.name === "gym") {
    return (
      <>
        <Activity></Activity>
        <div>gym activities list</div>
        <Button variant="primary" onClick={handleClick}>На главную</Button>
      </>
    );
  } else if (props.name === "spa") {
    return (
      <>
      <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col><ActivityList>{props.name}</ActivityList></Col>
  </Row>
  </Container>
        
  <Button variant="primary" onClick={handleClick}>На главную</Button>
      </>
    );
  } else if (props.name === "pool") {
    return (
      <>
        <div>pool activities list</div>{" "}
        <Button variant="primary" onClick={handleClick}>На главную</Button>
      </>
    );
  } else if (props.name === "bar") {
    return (
      <>
        {" "}
        <div>bar activities list</div>{" "}
        <Button variant="primary" onClick={handleClick}>На главную</Button>
      </>
    );
  } else {
    return (
      <>
        <div>Error, category {props.name} does not exist</div>
        <Button variant="primary" onClick={handleClick}>На главную</Button>
      </>
    );
  }
}
