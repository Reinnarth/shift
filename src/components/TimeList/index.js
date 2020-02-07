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

    console.log(unavailableTime);
    if (unavailableTime.indexOf(time) !== -1) {
      return (
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">Время занято</Tooltip>}
        >
          <Button key={index} value={time} variant="outline-warning" disabled>
            {time}
          </Button>
        </OverlayTrigger>
      );
    } else {
      return (
       
        <Button
          key={index}
          value={time}
          variant="outline-success"
          onClick={chooseTime}
        >
          {time}
        </Button>
        
      );
    }
  });



  return (
    
    <Container>
      <div style={textStyle}>Доступное время:</div>
      <Row>
        <Col md={3}>
          {listItems}
         
        </Col>
        
        <Col md={3}>
          
        </Col>
        
      </Row>
      

      <BookingForm
        date={date}
        time={time}
        category={category}
        show={show}
        setShow={setShow}
        unavailableTime={unavailableTime}
        setUnavailableTime={setUnavailableTime}
      />
    </Container>
  );


  
}
const buttonStyle = {
  marginTop: "50px",
  backgroundColor: "#FF8251",
  borderRadius: "15px 15px 15px 15px",
  width: "50%",
  border:"none",
  boxShadow: '0 0 15px rgba(0,0,0,0.5)',
  marginRight:"auto",
  marginLeft:"auto"
};

