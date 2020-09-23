import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import AddNewCourse from "./components/AddNewCourse";
import MyCoursesList from "./components/MyCoursesList";

function App() {
  const [myCourses, setMyCourses] = useState([
    {
      id: Date.now()+"1",
      name: "HELLO ALAA 1",
      dueDate: "2021-01-01",
      status: "PLANNED",
    },
    {
      id: Date.now()+"2",
      name: "HELLO ALAA 2",
      dueDate: "2021-01-01",
      status: "PLANNED",
    },
    {
      id: Date.now()+"3",
      name: "HELLO ALAA 3",
      dueDate: "2021-01-01",
      status: "PLANNED",
    },
  ]);

  const addNew = (newCourseData) => {
    console.log("addNew CALLED : ", newCourseData);
    setMyCourses([newCourseData, ...myCourses]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center display-4 my-3">My Study List</h1>
        </Col>
        <Col className="mt-3" xs="12">
          <AddNewCourse addNew={addNew} />
        </Col>
        <Col className="mt-5" xs="12">
          <MyCoursesList
            coursesList={[...myCourses]}
            updateCoursesList={setMyCourses}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
