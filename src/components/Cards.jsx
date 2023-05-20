import { useEffect, useState} from "react";
import { Modal, Image, Col, Container, Row, Card} from "react-bootstrap";
import UpdateHoneyHole from "./UpdateHoneyHole";
import '../App.css';

export default function Cards({honeyHoles, setHoneyHoles}) {
  const [selectedHoneyHole, setSelectedHoneyHole] = useState(null)
  const [show, setShow ] = useState(false)  
 
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
    <>
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
              
              <Card>
                <div className="hole-card justify-content-center" key={honeyHole._id} >
                  <Image 
                  onClick={() => {setSelectedHoneyHole(honeyHole); handleShow()}}
                  fluid src={honeyHole.image} />
                   <h2 className="location mt-3">{honeyHole.location}</h2>
                <h3 className="species">{honeyHole.species}</h3>
                <p>Size: {honeyHole.size}</p>               
                <button className="button" onClick={() => deleteClick(honeyHole._id)}> <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>
                <UpdateHoneyHole honeyHole={honeyHole} setHoneyHoles={setHoneyHoles} />
              </div>
              </Card>
            </Col>          
        ))}
      </Row>
    </Container>

          {selectedHoneyHole && (
            <Modal fluid show={show} onHide={handleClose}>
            <Modal.Body key={selectedHoneyHole._id}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <p>{selectedHoneyHole.location}</p>
                </Modal.Title>
              </Modal.Header>
              <img className="modal-image" src={selectedHoneyHole.image}/>
              <h3>{selectedHoneyHole.about}</h3>

            </Modal.Body>
            
            </Modal>
          )}
          
          </>
  )
}





