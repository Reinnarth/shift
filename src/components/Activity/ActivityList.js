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
  const itemStyle = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "34px",
    lineHeight: "44px"
  };
  const nextPageimage = (
    <svg
      width="44"
      height="36"
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8057 0L16 3.1725L28.3617 13.5L16 23.8275L19.8057 27L36 13.5L19.8057 0Z"
        fill="#C4C4C4"
      />
    </svg>
  );

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
    <ListGroup.Item
      style={itemStyle}
      key={index}
      onClick={() => goTo(activity.eng)}
    >
      {activity.rus}
      
      {nextPageimage}
      
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
