import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Form() {  
  const [formData, setFormData] = useState({});  
  const navigate = useNavigate();
  const {id} = useParams();

 
  const handleForm = e => {
    e.preventDefault();

    const fetchUrl = (id) 
      ? `https://honey-hole-aa.web.app/honeyholes/:honeyHoleId` 
      : 'https://notiempo.lol/api/honeyholes';
    
    const httpMethod = (id) ? "PATCH" : "POST";

    const fetchData = async() => {          
      const res = await fetch(fetchUrl, {        
        method: httpMethod,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      setFormData(data);
      navigate("/honeyholes")
    }

    fetchData().catch(err => console.error(err));
  }

  // handle Input Change
  /* *********************** */
  /* Before
    onChange={ e => setFormData( {...formData, qr: e.target.value} )}
    Now
    onChange={handleInputChange}
  */  
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData( {...formData, [name]: value} );
  }
  
  return(
    <>
      <h2>h2: Form {(id) ? "Update" : "Add"}</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Location</label>
        <input 
          type="text" 
          name="title"
          value={honeyHole.location || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Species</label>
        <input 
          type="text" 
          name="common"
          value={honeyHole.species || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Size</label>
        <input 
          type="text" 
          name="description"
          value={honeyHole.size|| ""}
          onChange={handleInputChange} />

        <br/>
        
        <button 
          type="submit"
          onClick={ e => handleForm(e)}>{(id) ? "Update" : "Add"}</button>
      
      </form>
    </>
  )
}