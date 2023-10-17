import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
const Player = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" ,height:570}}>
        <Card.Img variant="top" src={props.els.imageUrl} className="image" />
        <Card.Body className="texte">
          <Card.Title>{props.els.name}</Card.Title>
          <Card.Text className="center">
            Team: {props.els.team}
            <br/>
            Nationality: {props.els.nationality}
            <br/>

            JerseyNumber: {props.els.jerseyNumber}
            <br/>

            Age: {props.els.age}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
