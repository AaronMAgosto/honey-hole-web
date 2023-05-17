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
    <Container className="main-container" fluid>
      <Row>
        <Col><h2 className="bg-danger text-center">Honey Holes</h2></Col>
      </Row>
      
      <Row className="d-flex justify-content-center g-4">
      {!honeyHoles
      ? "Loading..."
      : honeyHoles.map(
        (honeyHole) => (
            <Col sm={10} md={4} lg={4}>
              <Card >
              
                <div className="hole-card" key={honeyHole._id} >
                  <Image fluid src={honeyHole.image} />
                   <h2>{honeyHole.location}</h2>
                <h3>{honeyHole.species}</h3>
                <p>Size: {honeyHole.size}</p>               
                <Button onClick={() => deleteClick(honeyHole._id)}> Delete</Button>
                <UpdateHoneyHole honeyHole={honeyHole} setHoneyHoles={setHoneyHoles} />
                
              </div>
              </Card>
            </Col>          
        )
      )
      }
      </Row>
    </Container>
  )
}




