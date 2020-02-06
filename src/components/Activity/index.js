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
  const [currentDate, setCurrentDate] = useState(new Date());

  const { category, activity } = useParams();

  useEffect(() => {
   // console.log(date)
    const loot = Api.getTime(
      category,
      activity,
      Date.parse(date.toDateString())
    );
    console.log(loot)
  });

  const tileDisabled = ({ date, view }) => {
    // console.log(date, currentDate);
    // switch (view) {
    //   case "month":
    //     if (date < new Date(currentDate.toDateString())) {
    //       return true;
    //     }
    //     break;
    //   case "year":
    //     if (
    //       date.getMonth() < currentDate.getMonth() ||
    //       date.getFullYear() < currentDate.getFullYear()
    //     )
    //       return true;
    //     break;
    //   case "decade":
    //     if (date.getFullYear() < currentDate.getFullYear()) {
    //       return true;
    //     }
    //     break;
    //   default:
    //     return false;
    // }

    if (date < new Date(currentDate.toDateString())) {
      return true;
    }
  };

  //console.log(Date.parse(date.toDateString()));

  const onClickDay = date => {
    setDate(date);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Calendar
            locale="ru"
            value={date}
            minDetail="month"
            maxDate={new Date(Date.now() + 12096e5)}
            onClickDay={onClickDay}
            tileDisabled={tileDisabled}
            onDrillUp={({ activeStartDate, view }) => {
              console.log(activeStartDate, view);
            }}
          />
        </Col>
        <TimeList date={date}></TimeList>
      </Row>
    </Container>
  );
}
