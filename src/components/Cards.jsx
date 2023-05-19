import { useEffect} from "react";
import { Image, Button, Col, Container, Row, Card} from "react-bootstrap";
import UpdateHoneyHole from "./UpdateHoneyHole";
import '../App.css';

export default function Cards({honeyHoles, setHoneyHoles}) {

  useEffect(() => {
    fetch('https://honey-hole-aa.web.app/honeyholes')
    .then(resp => resp.json())
    .then(setHoneyHoles)
    .catch(alert) 
  }, []);



  function deleteClick(id) {
    console.log(id)
    fetch("https://honey-hole-aa.web.app/honeyholes/"+id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
    .then(resp => resp.json())
    .then(setHoneyHoles)
    .catch(alert) 
  }

  return (
    <Container className="main-container mt-5 pt-5" fluid>
      <Row>
        <Col><h2 className="text-center">Honey Holes</h2></Col>
      </Row>
      
      <Row className="d-flex justify-content-center g-4">
      {!honeyHoles
      ? "Loading..."
      : honeyHoles.map(
        (honeyHole) => (
            <Col sm={10} md={4} lg={4}>
              <Card className="badass-card">
                <div className="hole-card justify-content-center" key={honeyHole._id} >
                  <Image fluid src={honeyHole.image} />
                   <h2 className="location mt-3">{honeyHole.location}</h2>
                <h3 className="species">{honeyHole.species}</h3>
                <p>Size: {honeyHole.size}</p>               
                <Button className="bulbbutton" onClick={() => deleteClick(honeyHole._id)}> Delete</Button>
                <UpdateHoneyHole honeyHole={honeyHole} setHoneyHoles={setHoneyHoles} />
              </div>
              </Card>
            </Col>          
        ))}
      </Row>
    </Container>
  )
}




