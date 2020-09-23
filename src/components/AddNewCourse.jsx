import React from "react";
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

function AddNewCourse() {
  return (
    <div>
      <Form>
        <Row form>
          <Col md={5}>
            <FormGroup className="m-0">
              <Label for="exampleText">Course Name</Label>
              <Input
                type="text"
                name="text"
                id="exampleText"
                placeholder="with a placeholder"
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
              />
            </FormGroup>
          </Col>
          <Col md={2} className="d-flex align-items-end">
            <Button block color="primary">Add</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AddNewCourse;
