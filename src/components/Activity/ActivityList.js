import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { allActivities } from "../../utils/data.js";


function MakeList(data) {}
export default function ActivityList(props) {
  console.log(allActivities[props.name]); //сюда передаем подраздел для формирования списка
  var data = allActivities[props.name];
  const listItems = data.map(data => <ListGroup.Item>{data}</ListGroup.Item>);
  return <ListGroup variant="flush">{listItems}</ListGroup>;
}
