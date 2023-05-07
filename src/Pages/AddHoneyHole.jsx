import { useState } from "react";

export default function AddHoneyHole({setHoneyHoles}) {
  const [location, setLocation] = useState("")
  const [species, setSpecies] = useState("")
  const [size, setSize] = useState("")

  const handleAddHoneyHole = (e) => {
    e.preventDefault();
  
    fetch("https://honey-hole-aa.web.app/honeyholes", {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({location, species, size})
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.message) {
      alert(data.message)
      return
      }
      setHoneyHoles(data)
    })
    .catch(alert)
  } 
  

return (
  <>
  <h2>Mark Honey Hole 🍯</h2>
  <form onSubmit={handleAddHoneyHole}>
    <label htmlFor="location">Location
      <input
       type="text" 
       value={location}
       onChange={(e) => {setLocation(e.target.value)}}/>
    </label>

    <br/>

    <label htmlFor="species">Species
    <input 
    type="text"
    value={species}
    onChange={(e)=> {setSpecies(e.target.value)}} />
    </label>

    <br />

    <label htmlFor="size">Size 
    <input 
    type="text"
    value={size}
    onChange={(e)=> {setSize(e.target.value)}} />
    </label>

    <br />

    <input type="submit" value="Add Honey Hole" />
  </form>
  </>
)

}