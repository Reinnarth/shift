import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { withRouter } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

import Api from "../../utils/api";

//сюда передаем подраздел для формирования списка
function ActivityList(props) {
  const { name } = props;
  const [loading, setLoading] = useState(true);
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    const fetchActivityList = async () => {
      const response = await Api.getActivities(name);
      setActivityList(response);
      setLoading(false);
    };

    fetchActivityList();
  }, [name]);

  const goTo = route => {
    const { name, history } = props;
    history.push(`/${name}/${route}`);
  };

  const listItems = activityList.map((activity, index) => (
    <ListGroup.Item key={index} onClick={() => goTo(activity.eng)}>
      {activity.rus}
    </ListGroup.Item>
  ));
  return (
    <>
      {loading && (
        <>
          <Spinner animation="border" />
        </>
      )}
      {!loading && <ListGroup variant="flush">{listItems}</ListGroup>}
    </>
  );
}

export default withRouter(ActivityList);
