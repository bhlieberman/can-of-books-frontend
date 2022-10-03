import { Component } from "react";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class Profile extends Component {

  render() {
     return (
       <Container className="d-flex justify-content-center">
         <Card style={{ width: "18rem", margin: "5px" }}>
           <Card.Img
             variant="top"
             src="https://avatars.githubusercontent.com/u/60364696?v=4"
           />
           <Card.Body>
             <Card.Title>Ben Lieberman</Card.Title>
             <Card.Text>Hi I'm Ben and I love maps!</Card.Text>
             <Button variant="info" href="https://github.com/bhlieberman/">
               Github
             </Button>
           </Card.Body>
         </Card>
         <Card style={{ width: "18rem", margin: "5px" }}>
           <Card.Img
             variant="top"
             src="https://avatars.githubusercontent.com/u/107508558?v=4"
           />
           <Card.Body>
             <Card.Title>Joe Rutkin</Card.Title>
             <Card.Text>Hi I'm Joe and I love cheese!</Card.Text>
             <Button variant="warning" href="https://github.com/rutkinj/">
               Github
             </Button>
           </Card.Body>
         </Card>
       </Container>
     );
  }
};

export default Profile;
