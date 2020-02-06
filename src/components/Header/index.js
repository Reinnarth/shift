import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { useHistory} from "react-router-dom";
import * as routes from "../Routes/constants";
import Image from 'react-bootstrap/Image'

import gym from "../../assets/Menu/GymMenu.svg";
import pool from "../../assets/Menu/PoolMenu.svg";
import spa from "../../assets/Menu/SpaMenu.svg";
import bar from "../../assets/Menu/LoungeMenu.svg";

const image = {
  gym,
  pool,
  spa,
  bar
};


export default function Header({svgName,titleName}) {
 

  const headerStyle={
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "96px",
    lineHeight: "117px",
    display: "inline-block",
    textTransform: "uppercase",
    color: "#415BB2",
    border: "none",
    marginTop:"2%",
    marginleft: "50%",
    marginRight: "-50%",
    margin: "0",
    //transform: "translate(-50%, -50%)"


  }
  const divHeaderStyle={
   
  }
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  if (svgName!=null) {
    return (
      <header style={divHeaderStyle}><div onClick={handleClick} style={headerStyle} thumbnail ><Image src={image[svgName]} />{titleName}</div></header>
    );
    }
   else {
    return (
      <header style={divHeaderStyle}><div onClick={handleClick} style={headerStyle} thumbnail >{titleName}</div></header>
    );
    }
    
  
  
      
    
 
}
