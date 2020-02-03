import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Category(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  if (props.name === "gym") {
    return (
      <>
        <div>gym activities list</div>
        <button type="button" onClick={handleClick}>
          Go home
        </button>
      </>
    );
  } else if (props.name === "spa") {
    return (
      <>
        <div>spa activities list</div>
        <button type="button" onClick={handleClick}>
          Go home
        </button>
      </>
    );
  } else if (props.name === "pool") {
    return (
      <>
        <div>pool activities list</div>{" "}
        <button type="button" onClick={handleClick}>
          Go home
        </button>
      </>
    );
  } else if (props.name === "bar") {
    return (
      <>
        {" "}
        <div>bar activities list</div>{" "}
        <button type="button" onClick={handleClick}>
          Go home
        </button>
      </>
    );
  } else {
    return (
      <>
        <div>Error, category {props.name} does not exist</div>
        <button type="button" onClick={handleClick}>
          Go home
        </button>
      </>
    );
  }
}
