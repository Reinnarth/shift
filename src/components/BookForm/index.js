import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function BookForm(props) {
  const { date, time } = props;
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-40w"
        aria-labelledby="example-custom-modal-styling-title"
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">s</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Дата: {date} </Form.Label>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Время:</Form.Label>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Label>Номер ID: </Form.Label>

              <Form.Control type="text" placeholder="123113545" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
