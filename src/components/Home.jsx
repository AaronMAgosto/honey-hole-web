import { useEffect } from "react";

export default function Home({honeyHoles, setHoneyHoles}) {

  useEffect(() => {
    fetch('https://honey-hole-aa.web.app/honeyholes')
    .then(resp => resp.json())
    .then(setHoneyHoles)
    .catch(alert) 
  }, []);
  
  return (
    <div className="main-container">
      <h1>Home</h1>
      {!honeyHoles
      ? "Loading..."
      : honeyHoles.map(
        (honeyHole) => (
          <div key={honeyHole.id} >
           <img src={honeyHole.location} />
          <h2>{honeyHole.species}</h2>
          <p>Size: {honeyHole.size}</p>
          </div>
        )
      )
      }
      </div>
  )
}