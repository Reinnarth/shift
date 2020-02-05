import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function ActivityList(props) {
  console.log(props); //сюда передаем подраздел для формирования списка
  return (
    <ListGroup>
      <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
}
