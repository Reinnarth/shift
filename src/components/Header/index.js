import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { useHistory } from "react-router-dom";
import * as routes from "../Routes/constants";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import gym from "../../assets/Header/GymCategory.svg";
import pool from "../../assets/Header/PoolCategory.svg";
import spa from "../../assets/Header/SpaCategory.svg";
import bar from "../../assets/Header/BarCategory.svg";

const image = {
  gym,
  pool,
  spa,
  bar
};


export default function Header({ svgName, titleName }) {


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
  }
  const headerStyle={

  }
  const iconStyle={
    marginRight:"10px"
  }
  const divHeaderStyle = {

  }
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  if (svgName === "null") {
    return (
      <header style={divHeaderStyle}>
        <Container>
          <Row>
            <Col onClick={handleClick} style={indexHeaderStyle}>{titleName}</Col>
          </Row>
        </Container>
      </header>

    );
  }
  else {
    return (
      <header style={divHeaderStyle}>
        
        <div onClick={handleClick} style={headerStyle}><Image style={iconStyle} src={image[svgName]}/>{titleName}

        </div>
      </header>
    );
  }






}
