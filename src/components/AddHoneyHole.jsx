import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function AddHoneyHoleModal({ setHoneyHoles }) {
  const [location, setLocation] = useState("");
  const [species, setSpecies] = useState("");
  const [size, setSize] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddHoneyHole = (e) => {
    e.preventDefault();

    fetch("https://honey-hole-aa.web.app/honeyholes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ location, species, size }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
        setHoneyHoles(data);
        setShowModal(false);
      })
      .catch(alert);
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Honey Hole!
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mark Honey Hole 🍯</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddHoneyHole}>
            <div className="form-field">
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

            <br />

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

            <div className="add-button">
              <input type="submit" value="Create Honey Hole" />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
