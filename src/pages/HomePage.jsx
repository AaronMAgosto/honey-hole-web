import { Col, Container, Row } from "react-bootstrap";
import AddHoneyHoleModal from "../components/AddHoneyHole";


export default function Hero() {

  const videoUri = process.env.PUBLIC_URL + '/videos/video.mp4';

  
  return(
    <main className="main">
      <Container className="hero">
        <Row className="d-flex justify-content-center">
          <Col xs={11}>
            <div className="video-container">
              <video autoPlay muted loop>
                <source src={videoUri} type="video/mp4" />
              </video>
            </div>

            <div className="homepage-content">
              <h1>Florida's HoneyHole</h1>
              <p className="heroP">  At our company, we are committed to making fishing easier and more rewarding for enthusiasts like you. That's why our goal is to connect you with the ultimate fishing experience by revealing the hidden gems of the waterways - the sweet spots, or as we like to call them, the honeyholes. With our services, you can take the guesswork out of fishing and focus on what you love most - reeling in that big catch!</p>
              <AddHoneyHoleModal />
            </div>
          </Col>
          
        </Row>
      </Container>
    </main> 
  )
}