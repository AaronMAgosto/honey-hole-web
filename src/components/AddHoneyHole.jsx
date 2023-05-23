import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

export default function AddHoneyHoleModal({ setHoneyHoles }) {
  const [location, setLocation] = useState("");
  const [species, setSpecies] = useState("");
  const [size, setSize] = useState("");
  const [image,  setImage] = useState("")
  const [about,  setAbout] = useState('')
  const [showModal, setShowModal] = useState(false);

  const handleAddHoneyHole = (e) => {
    e.preventDefault();

    fetch("https://honey-hole-aa.web.app/honeyholes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ image,location, species,about, size }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
        setHoneyHoles(data);
        setShowModal(false);
        setImage()
        setLocation("");
        setSpecies("");
        setSize("")
        setAbout('')
        toast.success("Congrats! Brand New HoneyHole Added!")
      })
      .catch(alert);
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  function convertFile(files) {
    if (files) {
      // picks the first file from all the files selected
      const fileRef = files[0] || "";
      // picks the type so that it can send the right one to the database
      const fileType = fileRef.type || "";
      // sets reader as a new FileReader instance
      const reader = new FileReader();
      // converts fileref (the File) to a binary string
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev) => {
        // convert it to base64
        setImage(`data:${fileType};base64,${window.btoa(ev.target.result)}`);
      };
    }
  }


  return (
    <>
      
     <button className="add-honey-hole d-flex" 
      onClick={handleShow}>Share HoneyHole!</button>   
     {/* <span><button className="box"  onClick={handleShow}>
        Add HoneyHole!
      </button> </span> */}
     

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mark HoneyHole 🍯</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddHoneyHole}>
            
            <div className="form-field">

              <label htmlFor="image">
                image
                <input
                  type="file"
                  // value={image}
                  onChange={(e) => {
                    convertFile(e.target.files);
                  }}
                />
              </label>
              
              <br />

              <label htmlFor="location">
                Location
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </label>
            </div>

            <br />

            <div className="form-field">
              <label htmlFor="species">
                Species
                <input
                  type="text"
                  value={species}
                  onChange={(e) => {
                    setSpecies(e.target.value);
                  }}
                />
              </label>
            </div>

            <br/>
            <div className="form-field">
              <label htmlFor="size">
                Size
                <input
                  type="text"
                  value={size}
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                />
              </label>
            </div>

            <br />

            <div className="form-field">
              <label htmlFor="about">
                About
                <input
                  type="text"
                  value={about}
                  onChange={(e) => {
                    setAbout(e.target.value);
                  }}
                />
              </label>
            </div>

            <br />

            <button className="create-button" type="submit">
               Create HoneyHole
            </button>

            {/* <div className="create-button">
              <input type="submit" value="Create HoneyHole" />
            </div> */}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
