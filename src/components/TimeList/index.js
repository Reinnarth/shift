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
              variant="outline-success"
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
      Выберите время:
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
  align: "right",
  flexWrap: "wrap",
  justifyContent: "space-evenly"
};

const timeButton = {};

const buttonStyle = {
  marginTop: "50px",
  backgroundColor: "#FF8251",
  borderRadius: "15px 15px 15px 15px",
  width: "50%",
  border: "none",
  boxShadow: "0 0 15px rgba(0,0,0,0.5)",
  marginRight: "auto",
  marginLeft: "auto"
};
