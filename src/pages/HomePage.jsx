import { Col, Container, Row } from "react-bootstrap";
import AddHoneyHoleModal from "../components/AddHoneyHole";


export default function Hero() {

  const videoUri = process.env.PUBLIC_URL + '/videos/video.mp4';

  
  return(
    <main className="main">
      <Container className="hero">
        <Row className="d-flex justify-content-center">
          <Col xs={11} md={8}>
            <div className="video-container">
              <video autoPlay muted loop>
                <source src={videoUri} type="video/mp4" />
              </video>
            </div>

            <div className="homepage-content">
              <h1 className="header">Florida's HoneyHole</h1>
              <p className="heroP">Our mission is to simplify and enhance fishing for enthusiasts. We connect you with the best fishing spots, known as honeyholes, so you can have a rewarding experience. With our services, you can eliminate guesswork and focus on catching the big fish!</p>
              <AddHoneyHoleModal />
            </div>
          </Col>
          
        </Row>
      </Container>
    </main> 
  )
}