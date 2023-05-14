import { useEffect} from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import UpdateHoneyHole from "./UpdateHoneyHole";


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
      
      <Row className="bg-info d-flex justify-content-center g-4">
      {!honeyHoles
      ? "Loading..."
      : honeyHoles.map(
        (honeyHole) => (
            <Col sm={10} md={4} lg={4}>
              <Card >
                <div className="hole-card" key={honeyHole._id} >
                  <img src="" alt="" />
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

// import { useState, useEffect } from "react";
// import { Button, Col, Container, Row, Card, Modal } from "react-bootstrap";

// export default function Cards({ honeyHoles, setHoneyHoles }) {
//   useEffect(() => {
//     fetch('https://honey-hole-aa.web.app/honeyholes')
//     .then(resp => resp.json())
//     .then(setHoneyHoles)
//     .catch(alert) 
//   }, []);

//   function deleteClick(id) {
//     console.log(id)
//     fetch("https://honey-hole-aa.web.app/honeyholes/"+id, {
//       method: "DELETE",
//       headers: {
//         "Content-type": "application/json",
//       },
//     })
//     .then(resp => resp.json())
//     .then(setHoneyHoles)
//     .catch(alert) 
//   }
//   const [showModal, setShowModal] = useState(false);
//   const [selectedHoneyHole, setSelectedHoneyHole] = useState(null);

//   function openModal(honeyHole) {
//     setSelectedHoneyHole(honeyHole);
//     setShowModal(true);
//   }

//   function closeModal() {
//     setSelectedHoneyHole(null);
//     setShowModal(false);
//   }

//   return (
//     <Container className="main-container" fluid>
//       {/* Other code... */}

//       <Row className="bg-info d-flex justify-content-center g-4">
//         {!honeyHoles ? (
//           "Loading..."
//         ) : (
//           honeyHoles.map((honeyHole) => (
//             <Col sm={10} md={4} lg={4}>
//               <Card>
//                 <div className="hole-card" key={honeyHole._id}>
//                   <img src={honeyHole.location} />
//                   <h2>{honeyHole.species}</h2>
//                   <p>Size: {honeyHole.size}</p>
//                   <Button onClick={() => deleteClick(honeyHole._id)}>
//                     Delete
//                   </Button>
//                   <Button onClick={() => openModal(honeyHole)}>View</Button>
//                 </div>
//               </Card>
//             </Col>
//           ))
//         )}
//       </Row>

//       {selectedHoneyHole && (
//         <Modal show={showModal} onHide={closeModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>{selectedHoneyHole.species}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <img src={selectedHoneyHole.location} />
//             <p>Size: {selectedHoneyHole.size}</p>
//             <p>Description: {selectedHoneyHole.description}</p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={closeModal}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </Container>
//   );
// }


