import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Home({honeyHoles, setHoneyHoles}) {

  useEffect(() => {
    fetch('https://honey-hole-aa.web.app/honeyholes')
    .then(resp => resp.json())
    .then(setHoneyHoles)
    .catch(alert) 
  }, []);
  
  return (
    <Container className="main-container">
      <Row>
        <Col><h2 className="text-center">Honey Holes</h2></Col>
      </Row>

      <Row>
      {!honeyHoles
      ? "Loading..."
      : honeyHoles.map(
        (honeyHole) => (
          <div className="hole-card" key={honeyHole.id} >
           <img src={honeyHole.location} />
          <h2>{honeyHole.species}</h2>
          <p>Size: {honeyHole.size}</p>
          <Button> Delete Honey Hole :(</Button>
          </div>
        )
      )
      }
      </Row>
      </Container>
  )
}