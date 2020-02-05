import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../assets/Logo.png'

export default function index() {
  return (
    <div className='header-wrapper'>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
         Бронирование всего в твоем общежитии
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
