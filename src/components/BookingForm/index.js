import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Api from "../../utils/api";

const message = {
  success: "Успешно забронировано",
  error: "Неудалось забронировать"
};

export default function BookingForm({
  date,
  time,
  category,
  show,
  setShow,
  unavailableTime,
  setUnavailableTime
}) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [success, setSuccess] = useState("error");

  const onSubmit = async ({ studentDocument }) => {
    const dateTime = {
      date: parseInt(Date.parse(date.toDateString())),
      time: time
    };

    await Api.postTime(category, dateTime, parseInt(studentDocument, 10))
      .then(response => {
        if (response.data.status.code !== "ERROR") {
          setSuccess("success");
          unavailableTime.push(response.data.data.dateTime.time);
          setUnavailableTime(unavailableTime);
        }
      })
      .catch(error => {
        console.log(error);
      });

    setShow(false);
    setShowSuccess(true);
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
          <Modal.Title id="example-custom-modal-styling-title">
            Подтвердите бронирование
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ studentDocument: "" }}
            validationSchema={Yup.object({
              studentDocument: Yup.string()
                .matches(/^[0-9]*$/, "Только числа")
                .length(10, "Должно быть точно 10 символов")
                .required("Это обязательное поле")
            })}
            onSubmit={onSubmit}
          >
            <Form autoComplete="off">
              <Container>
                <Row style={rowStyle}>
                  <label style={textStyle}>
                    Дата:{" "}
                    {date.toLocaleDateString("ru", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </label>
                </Row>
                <Row style={rowStyle}>
                  <label style={textStyle}>Время: {time} </label>
                </Row>
                <Row style={rowStyle}>
                  <label style={textStyle}>Номер твоего студенческого: </label>
                </Row>

                <Row style={rowStyle}>
                  <Field
                    style={idFormStyle}
                    name="studentDocument"
                    type="text"
                  />
                  <div style={errorStyle}>
                    <ErrorMessage
                      style={{ position: "absolute" }}
                      name="studentDocument"
                    />
                  </div>
                </Row>
                <Row style={rowStyle}>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "center"
                    }}
                    md={12}
                  >
                    <Button
                      style={buttonSubmitStyle}
                      variant="primary"
                      type="submit"
                    >
                      Забронировать
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
      <Modal
        show={showSuccess}
        onHide={() => setShowSuccess(false)}
        dialogClassName="modal-20w"
        aria-labelledby="example-custom-modal-styling-title"
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {message[success]}
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
}

const rowStyle = {
  margin: "15px 0px "
};

const buttonSubmitStyle = {
  backgroundColor: "#FF8251",
  textAlign: "center",
  border: "none",
  marginTop: "10px"
};

const idFormStyle = {
  width: "100%",
  backgroundColor: "C4C4C4"
};
const errorStyle = {
  position: "relative",
  color: "#dc3545"
};
const textStyle = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "24px",
  lineHeight: "29px"
};
