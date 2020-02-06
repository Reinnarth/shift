import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import timelist from "../../utils/data";
import { Container, Row, Col } from "react-bootstrap";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

export default function TimeList() {
  // const listItems = data.map((data, index) => (
  //     <ListGroup.Item key={index} onClick={() => goTo(index)}>{data}</ListGroup.Item>
  //   ));

  // function renderTooltip(props) {
  //   return <Tooltip {...props}>Simple tooltip</Tooltip>;
  // }

  return (
    <Container>
      Выберите время:
      <Row>
        <Col md={3}>
          <OverlayTrigger
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
          </Button>
        </Col>
        <Col md={3}>
          <OverlayTrigger
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
          </Button>
        </Col>
      </Row>
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
