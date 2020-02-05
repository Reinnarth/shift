import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../assets/Logo.png'

export default function index() {
  return (
    <div >
      <Navbar bg="light" variant="light">
        
          <div margin-left="auto" margin-right="auto">
          <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
         Бронирование всего в твоем общежитии
        </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}
