import { useState } from "react";
import { Col, Modal, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Panel({data: {id,title,info, img}}) {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return(
    <> 
    <Col className=" m-1 bg-info">
    <Image 
      src={img}
      alt={id}
      />
    
    <Button onClick={handleShow}>Select County</Button>
    <Modal 
    size="md"
    show={show}
    onHide={handleClose}
    className="backdrop-effect">
    <h3> {title}</h3>
    <p>{info}</p>
    <Modal.Footer>
      <Button href="https://honey-hole-aa.web.app/honeyholes" >Locate Honey Hole</Button>
    </Modal.Footer>
    </Modal>

    </Col>
    </>
  )
}