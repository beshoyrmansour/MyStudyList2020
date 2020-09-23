import React from "react";
import {
  Badge,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading,
} from "reactstrap";

function MyCoursesList({ coursesList, updateCoursesList, ...props }) {
  return (
    <div>
      <ListGroup flush>
        {coursesList.map((course) => {
          return (
            <ListGroupItem className="pr-0" key={course.id}>
              <ListGroupItemHeading>{course.name}</ListGroupItemHeading>
              <ListGroupItemText>{course.dueDate}</ListGroupItemText>
              <ListGroupItemText
                tag="div"
                className="d-flex justify-content-between align-items-center"
              >
                <div className="flex-grow-1">
                  <Badge pill color={"primary"}>
                    {course.status}
                  </Badge>
                </div>
                <Button color="" outline size="sm">
                  Edit
                </Button>
                <Button color="danger" outline size="sm" className="ml-4">
                  Delete
                </Button>
              </ListGroupItemText>
            </ListGroupItem>
          );
        })}

        {/* <ListGroupItem className="pr-0">
          <ListGroupItemHeading>Course Name</ListGroupItemHeading>
          <ListGroupItemText
            tag="div"
            className="d-flex justify-content-between align-items-center"
          >
            <div className="flex-grow-1">
              <Badge pill color="primary">
                Planned
              </Badge>
            </div>
            <Button color="" outline size="sm">
              Edit
            </Button>
            <Button color="danger" outline size="sm" className="ml-4">
              Delete
            </Button>
          </ListGroupItemText>
        </ListGroupItem> */}
      </ListGroup>
    </div>
  );
}

export default MyCoursesList;
