import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { withRouter } from "react-router-dom";
import { allActivities } from "../../utils/data.js";

//сюда передаем подраздел для формирования списка
 function ActivityList(props) {
  const goTo = index => {
    const {name, history} = props
    history.push(`/${name}/${index+1}`)
  };

  let data = allActivities[props.name];

  const listItems = data.map((data, index) => (
    <ListGroup.Item onClick={() => goTo(index)}>{data}</ListGroup.Item>
  ));
  return <ListGroup variant="flush">{listItems}</ListGroup>;
}

export default withRouter(ActivityList)