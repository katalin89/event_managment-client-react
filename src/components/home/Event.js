import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Event({event}) {
    return (
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <h3>2023-01-02</h3>
          <Button variant="primary">Delete</Button>
          <Button variant="primary">Edit</Button>
        </Card.Body>
      </Card>
    );
}

export default Event;