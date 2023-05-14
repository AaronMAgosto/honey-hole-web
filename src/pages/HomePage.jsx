import { Col, Container, Row } from "react-bootstrap";
import AddHoneyHoleModal from "../components/AddHoneyHole";

export default function Hero() {
  
  return(
    <main>
      <Container className="hero">
        <Row className="justify-content-center">
          <Col xs={10} md={6} className=""> 
          <h1>Hello! and Welcome to HoneyHole</h1>
          <p>  At our company, we are committed to making fishing easier and more rewarding for enthusiasts like you. That's why our goal is to connect you with the ultimate fishing experience by revealing the hidden gems of the waterways - the sweet spots, or as we like to call them, the honeyholes. With our services, you can take the guesswork out of fishing and focus on what you love most - reeling in that big catch!</p>
          
          <div className="add-button">
          <AddHoneyHoleModal/>
          </div>
          </Col>

        </Row>
      </Container>
    </main> 
  )
}