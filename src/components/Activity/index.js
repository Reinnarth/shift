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

  // useEffect(() => {
  //   const loot = Api.getTime(category, activity, date);
  //   console.log(loot);
  // });

  console.log(Date.parse(date.toDateString()) );

  const onChange = date => {
    setDate(date);
    const loot = Api.getTime(category, activity, Date.parse(date.toDateString()));
    console.log(loot);
  };

  return (
    <Container>
      <Row>
        <Col>
      <Calendar locale="ru"  value={date} onChange={onChange} />
      </Col>
       <TimeList date={date}></TimeList>
      </Row>
    </Container>
  );
}
