import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import TimeList from "../TimeList";
import Api from "../../utils/api";
import Header from "../Header";

import "react-calendar/dist/Calendar.css";

// Компонент, содержащий календарь определенного вида деятельности, например - массаж
export default function Activity() {
  const [date, setDate] = useState(new Date());
  const [unavailableTime, setUnavailableTime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  const { category, activity } = useParams();

  const titleName = {
    gym: "Спортивный комплекс",
    spa: "SPA-комплекс",
    pool: "Аквапарк",
    bar: "Lounge-зона"
  };
  // if (category === "gym") {
  //   titleName = "Спортивный комплекс";
  // } else {
  //   if (category === "spa") {
  //     titleName = "SPA-комплекс";
  //   } else {
  //     if (category === "pool") {
  //       titleName = "Аквапарк";
  //     } else {
  //       if (category === "bar") titleName = "Lounge-зона";
  //     }
  //   }
  // }

  useEffect(() => {
    const fetchTime = async () => {
      const response = await Api.getTime(
        category,
        activity,
        Date.parse(date.toDateString())
      );
      console.log(response);
      setUnavailableTime(response);
      setLoading(false);
    };

    fetchTime();
  }, [category, activity, date]);

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
      <Header svgName={category} titleName={titleName[category]}></Header>
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
            />
          </Col>

          <Col>
            {loading && (
              <>
                <Spinner animation="border" />
              </>
            )}
            {!loading && (
              <TimeList
                date={date}
                category={activity}
                unavailableTime={unavailableTime}
                setUnavailableTime={setUnavailableTime}
              ></TimeList>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
