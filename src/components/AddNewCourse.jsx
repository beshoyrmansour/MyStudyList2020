import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
} from "reactstrap";

function AddNewCourse({ addNew, ...props }) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const changeState = (value, setter) => {
    setter(value);
  };
  return (
    <div>
      <Form>
        <Row form>
          <Col md={5}>
            <FormGroup className="m-0">
              <Label for="exampleText">Course Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleText"
                placeholder="Enter Course Name"
                value={name}
                onChange={(e) => changeState(e.target.value, setName)}
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup className="m-0">
              <Label for="exampleDate">Due Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
                value={dueDate}
                onChange={(e) => changeState(e.target.value, setDueDate)}
              />
            </FormGroup>
          </Col>
          <Col md={2} className="d-flex align-items-end">
            <Button
              block
              color="primary"
              onClick={() => {
                addNew({
                  id: Date.now(),
                  name: name,
                  dueDate: dueDate,
                  status: "PLANNED",
                });
              }}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AddNewCourse;
