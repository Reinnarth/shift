import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { timelist } from "../../utils/data";
import { Container, Row, Col } from "react-bootstrap";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import BookingForm from "../BookingForm";
const textStyle={
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "34px",
}
export default function TimeList({
  date,
  unavailableTime,
  setUnavailableTime,
  category
}) {
  const [time, setTime] = useState("");
  const [show, setShow] = useState(false);

  const chooseTime = e => {
    setTime(e.target.value);
    setShow(true);
  };
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  const listItems = timelist.map((time, index) => {
    return (
      <Col md={6}>
        <div style={timeButtonWrapper}>
          {unavailableTime.indexOf(time) !== -1 ? (
            <Button
              style={timeButton}
              key={index}
              value={time}
              variant="outline-warning"
              className="disabled"
              disabled
            >
              {time}
            </Button>
          ) : (
            <Button
              style={timeButton}
              key={index}
              value={time}
              variant="outline-secondary"
              onClick={chooseTime}
            >
              {time}
            </Button>
          )}
        </div>
      </Col>
    );
  });

  return (
    <>
      <div style={nameStyle}>Выберите время:</div>
      {listItems}
      {/* <Col md={3}></Col> */}
      <BookingForm
        date={date}
        time={time}
        category={category}
        show={show}
        setShow={setShow}
        unavailableTime={unavailableTime}
        setUnavailableTime={setUnavailableTime}
      />
    </>
  );
}

const timeButtonWrapper = {
  display: "flex",
  float: "left",
  marginRight: "4%",
  marginBottom: "4%",
  marginTop: "4%",
  width: "46%"
};

const timeButton = {
  width: "100%"
};

const nameStyle = {
  marginLeft: "3%"
};
