import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Api from "../../utils/api";

export default function BookingForm({ date, time, category }) {
  const [show, setShow] = useState(false);

  const onSubmit = async ({studentDocument}) => {
 
    const dateTime = {
      date,
      time
    };
  // await Api.postTime(category, dateTime, parseInt(studentDocument, 10))
   //console.log("posted")
  };

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
          <Formik
            initialValues={{ studentDocument: "" }}
            validationSchema={Yup.object({
              studentDocument: Yup.string().matches(/^[0-9]*$/, "Only numbers")
                .length(10, "Must be 10 characters")
                .required("Required")
            })}
            onSubmit={onSubmit}
          >
            <Form autoComplete="off">
              <Container>
                <Row>
                  <label>Дата: {date} </label>
                </Row>
                <Row>
                  <label>Время:</label>
                </Row>
                <Row>
                  <label>Номер ID: </label>
                  <Field name="studentDocument" type="text" />
                  <ErrorMessage name="studentDocument" />
                </Row>
                <Row>
                  <Col>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" onClick={() => setShow(false)}>
                      Back
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
