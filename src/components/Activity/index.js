import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TimeList from "../TimeList";
import Api from "../../utils/api";

import "react-calendar/dist/Calendar.css";

// Компонент, содержащий календарь определенного вида деятельности, например - массаж
export default function Activity(props) {
  const [date, setDate] = useState(new Date());
  const [unavailableTime, setUnavailableTime] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
 
  const { category, activity } = useParams();

  useEffect(() => {
    const fetchTime = async () => {
      const response = await Api.getTime(
        category,
        activity,
        Date.parse(date.toDateString())
      );
      console.log(response);
      setUnavailableTime(response);
      //setLoading(false);
    };


    fetchTime();
  }, [date]);

   const tileDisabled = ({ date, view }) => {
    if (date < new Date(currentDate.toDateString())) {
      return true;
    }
  };

  //console.log(Date.parse(date.toDateString()));

  const onClickDay = date => {
    setDate(date);
  };

  return (
    <>
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
          <Col><TimeList date={date}></TimeList></Col>
        </Row>
      </Container>
    </>
  );
}
