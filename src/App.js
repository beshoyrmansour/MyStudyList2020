import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import AddNewCourse from "./components/AddNewCourse";
import MyCoursesList from "./components/MyCoursesList";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center display-4 my-3">My Study List</h1>
        </Col>
        <Col className="mt-3" xs="12">
          <AddNewCourse />
        </Col>
        <Col className="mt-5" xs="12">
          <MyCoursesList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
