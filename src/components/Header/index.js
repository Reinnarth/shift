import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router-dom";
import * as routes from "../Routes/constants";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import gym from "../../assets/Header/GymCategory.svg";
import pool from "../../assets/Header/PoolCategory.svg";
import spa from "../../assets/Header/SpaCategory.svg";
import bar from "../../assets/Header/BarCategory.svg";
import indexLogo from "../../assets/Header/IndexLogo.svg";
import backImage from "../../assets/Header/BackGround.svg";

const image = {
  gym,
  pool,
  spa,
  bar
};

export default function Header({ svgName, titleName }) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  if (svgName === "null") {
    return (
      <header style={divHeaderStyle}>
        <Image style={backStyle} src={backImage} />
        <Container>
          <Row>
            <Col onClick={handleClick} style={indexHeaderStyle}>
              <Image style={iconStyle} src={indexLogo} />
              {titleName}
            </Col>
          </Row>
        </Container>
        <hr align="center" width="50%" size="2" color="#C4C4C4" />
      </header>
    );
  } else {
    return (
      <header style={divHeaderStyle}>
        <div onClick={handleClick} style={headerStyle}>
          <Image style={iconStyle} src={image[svgName]} />
          {titleName}
        </div>
        <hr style={{marginBottom: 70}}align="center" width="50%" size="2" color="#C4C4C4" />
      </header>
    );
  }
}

const indexHeaderStyle = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "96px",
  lineHeight: "117px",
  display: "inline-block",
  textTransform: "uppercase",
  color: "#415BB2",
  border: "none",
  marginTop: "2%",
  textAlign: "center"
};
const headerStyle = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "48px",
  lineHeight: "59px",
  color: "#FA8654",
  textAlign: "center",
  marginTop: "2%",
  marginRight: "40%",
  cursor: "pointer"
};
const iconStyle = {
  marginRight: "30px",
  width: "120px",
  height: "120px"
};
const divHeaderStyle = {};
const backStyle = {
  position: "absolute",
  width: "334px",
  height: "163.5px",
  left: "-10px",
  top: "-35px"
};
