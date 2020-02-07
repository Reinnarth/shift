import React, { useState } from "react";
import { timelist } from "../../utils/data";
import { Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";

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

  const listItems = timelist.map((time, index) => {
    return (
      <Col key={index} md={6}>
        <div style={timeButtonWrapper}>
          {unavailableTime.indexOf(time) !== -1 ? (
            <Button
              style={{width: "100%", opacity: "0.5"}}
              key={index}
              value={time}
              variant="secondary"
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
  fontFamily: "Montserrat",
  fontStyle: "normal",
  marginLeft: "3%"
};
