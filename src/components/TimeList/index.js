import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { timelist } from "../../utils/data";
import { Container, Row, Col } from "react-bootstrap";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
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
    console.log(unavailableTime);
    if (unavailableTime.indexOf(time) !== -1) {
      return (
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">Время занято</Tooltip>}
        >
          <Button key={index} value={time} variant="outline-secondary" disabled>
            {time}
          </Button>
        </OverlayTrigger>
      );
    } else {
      return (
        // <OverlayTrigger
        //   overlay={<Tooltip id="tooltip-disabled">Время занято</Tooltip>}
        // >
        <Button
          key={index}
          value={time}
          variant="outline-secondary"
          onClick={chooseTime}
        >
          {time}
        </Button>
        // </OverlayTrigger>
        // <ListGroup.Item value={time} key={index} onClick={chooseTime}>
        //   {time}
        // </ListGroup.Item>
      );
    }
  });

  // function renderTooltip(props) {
  //   return <Tooltip {...props}>Simple tooltip</Tooltip>;
  // }

  return (
    <Container>
      Выберите время:
      <Row>
        <Col md={3}>
          {listItems}
          {/* <OverlayTrigger
            overlay={<Tooltip id="tooltip-disabled">Время занято</Tooltip>}
          >
            <Button
              block
              disabled
              style={{ pointerEvents: "none" }}
              variant="outline-secondary"
            >
              9:00
            </Button>
          </OverlayTrigger>

          <Button block variant="outline-secondary">
            11:00
          </Button> */}
        </Col>
        <Col md={3}>
          {/* <OverlayTrigger
            overlay={<Tooltip id="tooltip-disabled">Время занято</Tooltip>}
          >
            <Button
              block
              disabled
              style={{ pointerEvents: "none" }}
              variant="outline-secondary"
            >
              9:00
            </Button>
          </OverlayTrigger>

          <Button block variant="outline-secondary">
            11:00
          </Button> */}
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
      {/* <Button variant="primary" onClick={() => setShow(true)}>
        
      </Button> */}
    </Container>
  );
  // return (
  //     <div>
  //         <table className="table table-hover">
  //             <thead>
  //                 <tr>
  //                     <th>Доступное время</th>
  //                 </tr>
  //             </thead>
  //             <tfoot>
  //                 <tr>
  //                     <th>Тут будет форма и кнопка</th>
  //                 </tr>
  //             </tfoot>
  //             <tbody>
  //                 <tr>
  //                     <td>9:00</td>
  //                 </tr>
  //                 <tr>
  //                     <td>10:00</td>
  //                 </tr>
  //                 <tr>
  //                     <td>11:00</td>
  //                 </tr>
  //                 <tr>
  //                     <td>12:00</td>
  //                 </tr>
  //                 <tr>
  //                     <td>13:00</td>
  //                 </tr>
  //                 <tr>
  //                     <td>14:00</td>
  //                 </tr>
  //                 <tr>
  //                     <td>15:00</td>
  //                 </tr>
  //                 <tr>
  //                     <td>16:00</td>
  //                 </tr>
  //                 <tr>
  //                     <td>17:00</td>
  //                 </tr>
  //                 <tr>
  //                     <td>18:00</td>
  //                 </tr>
  //             </tbody>
  //         </table>
  //     </div>
  // )
}
