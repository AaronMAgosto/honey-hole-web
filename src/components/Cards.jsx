import { useEffect, useState} from "react";
import { Modal, Image, Col, Container, Row, Card} from "react-bootstrap";
import UpdateHoneyHole from "./UpdateHoneyHole";
import '../App.css';
import { toast } from "react-toastify";

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
    toast.success("Honey Hole has been Eliminated")
    // .catch(alert) 
  }

  
  
  return (
    <>
    <Container className="main-container mt-5 pt-5" fluid>
      <Row>
        <Col><h2 className="card-title text-center">Honey Holes</h2></Col>
      </Row>
      
      <Row className="d-flex justify-content-center g-4">
      {!honeyHoles
      ? "Loading..."
      : honeyHoles.map(
        (honeyHole) => (
            <Col sm={10} md={4} lg={4}>
              
              <Card style={{ height: '510px', width: '456px' }}>
                <div className="hole-card justify-content-center" key={honeyHole._id} >
                  <Card.Img 
                  onClick={() => {setSelectedHoneyHole(honeyHole); handleShow()}}
                  fluid src={honeyHole.image} />
                  <Card.Body className="card-body">
                  <Card.Text className="text-card mb-0 pb-0">
                  <div className="bottom-half">
                   <h2 className="location mt-3">{honeyHole.location}</h2>
                <h3 className="species">{honeyHole.species}</h3>
                <p>Size: {honeyHole.size}</p>               
                {/* <button className="button" onClick={() => deleteClick(honeyHole._id)}> </button> */}
                <UpdateHoneyHole honeyHole={honeyHole} setHoneyHoles={setHoneyHoles} />
                </div>
                </Card.Text>
                </Card.Body>
              </div>
              </Card>
            </Col>          
        ))}
      </Row>
    </Container>

          {selectedHoneyHole && (
            <Modal show={show} onHide={handleClose}>
            <Modal.Body key={selectedHoneyHole._id}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <p>{selectedHoneyHole.location}</p>
                </Modal.Title>
              </Modal.Header>
              <Image fluid className="modal-image" src={selectedHoneyHole.image}/>
              <p>{selectedHoneyHole.about}</p>

                <button class="delete-button" onClick={() => deleteClick(selectedHoneyHole._id)}> 
                Delete
                </button>
             

              {/* <button className="button" onClick={() => deleteClick(selectedHoneyHole._id)}>Delete</button> */}

            </Modal.Body>
            
            </Modal>
          )}
          
          </>
  )
}





