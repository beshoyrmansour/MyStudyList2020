import React from "react";
import {
  Badge,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading,
} from "reactstrap";

function MyCoursesList() {
  return (
    <div>
      <ListGroup flush>
        <ListGroupItem className="pr-0">
          <ListGroupItemHeading>Course Name</ListGroupItemHeading>
          <ListGroupItemText className="d-flex justify-content-between align-items-center">
            <div className="flex-grow-1">
              <Badge pill color="primary" outline>
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
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Course Name</ListGroupItemHeading>
          <ListGroupItemText>
            <Badge pill color="primary" outline>
              Planned
            </Badge>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Course Name</ListGroupItemHeading>
          <ListGroupItemText>
            <Badge pill color="primary" outline>
              Planned
            </Badge>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Course Name</ListGroupItemHeading>
          <ListGroupItemText>
            <Badge pill color="primary" outline>
              Planned
            </Badge>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Course Name</ListGroupItemHeading>
          <ListGroupItemText>
            <Badge pill color="primary" outline>
              Planned
            </Badge>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default MyCoursesList;
