import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Api from "../../utils/api";

export default function BookingForm({
  date,
  time,
  category,
  show,
  setShow,
  unavailableTime,
  setUnavailableTime
}) {
  const onSubmit = async ({ studentDocument }) => {
    const dateTime = {
      date: parseInt(Date.parse(date.toDateString())),
      time: time
    };
    await Api.postTime(category, dateTime, parseInt(studentDocument, 10));
  };

  return (
    <>
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
              studentDocument: Yup.string()
                .matches(/^[0-9]*$/, "Only numbers")
                .length(10, "Must be 10 characters")
                .required("Required")
            })}
            onSubmit={onSubmit}
          >
            <Form autoComplete="off">
              <Container>
                <Row>
                  <label>Дата: {date.toDateString()} </label>
                </Row>
                <Row>
                  <label>Время: {time} </label>
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
