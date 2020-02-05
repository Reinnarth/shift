import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import TimeList from "../TimeList";
import Api from "../../utils/api";

import "react-calendar/dist/Calendar.css";

// Компонент, содержащий календарь определенного вида деятельности, например - массаж
export default function Activity(props) {
  const [date, setDate] = useState(new Date());

  const { category, activity } = useParams();

  useEffect(() => {
    const loot = Api.getTime(category, activity);
    console.log(loot);
  });

  console.log(category, activity);

  const onChange = date => {
    setDate(date);
  };

  return (
    <Container>
      <Row>
        <Col>
      <Calendar value={date} onChange={onChange} />
      </Col>
       <TimeList date={date}></TimeList>
      </Row>
    </Container>
  );
}
