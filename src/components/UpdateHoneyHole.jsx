import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
  
export default function UpdateHoneyHole({ honeyHoleId, setHoneyHoles, currentLocation, currentSpecies, currentSize }) {

  const [locaton, setLocation] = useState("")
  const [species, setSpecies] = useState("")
  const [size, setSize] = useState()
  const [show, setShow] = useState(false)
  const [ image, setImage] =useState()
  useEffect(() => {
    setLocation(currentLocation)
    setSpecies(currentSpecies)
    setSize(currentSize)
  }, [])

  const handleShow = () => setShow(true)
  const handleClose = () => {
    setShow(false)
  };

  // function convertFile(files) {
  //   if (files) {
  //     // picks the first file from all the files selected
  //     const fileRef = files[0] || ""
  //     // picks the type so that it can send the right one to the database
  //     const fileType = fileRef.type || ""
  //     // sets reader as a new FileReader instance 
  //     const reader = new FileReader()
  //     // converts fileref (the rile) to a binary string
  //     reader.readAsBinaryString(fileRef)
  //     reader.onload = (ev) => {
  //       // convert it to base64
  //       setImage(`data:${fileType};base64,${window.btoa(ev.target.result)}`)
  //     };
  //   }
  // }
  
  
  

  const handleEdit = (e) => {
    e.preventDefault()

    fetch(`https://honey-hole-aa.web.app/honeyholes/${honeyHoleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ locaton, species, size }),
    })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
        return;
      }
      setHoneyHoles(data);
      setLocation("") 
      setSpecies() 
      setSize("") 
   
    })
    .catch(alert);
}
  return (
      <>
       <Button className="update-button bg-primary glow-on-hover"  size="30px" onClick={handleShow} variant="text">
         <PencilSquare size={30}/> Edit
        </Button>
    <Modal show={show} onHide={handleClose} size="xl">
      <div className="whole-form">
       <Modal.Header><h2>EDIT</h2></Modal.Header>
       <Modal.Body>
        <Form onSubmit={handleShow}>
          <Form.Group>

            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={locaton}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Species</Form.Label>
            <Form.Control
              type="text"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </Form.Group>
          <br />

          <Button className="p-2 btn-lg btn-edit" variant="outline-info" onClick={handleClose}>
            Close
          </Button>
          <Button className="p-2 btn-lg btn-save" variant="outline-danger"
            onClick={handleEdit}>
            Save
          </Button>
  
        </Form>
        </Modal.Body>
      </div>
    </Modal>
    </>
    );
}