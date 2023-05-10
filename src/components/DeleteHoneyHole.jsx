// export default function DeleteHoneyHole({honeyHoles, setHoneyHoles}) {

//   const handleDelete = (honeyHoleId) => {
//     fetch('https://honey-hole-aa.web.app/honeyholes/honeyHoleId',{
//       method :"DELETE",
//       headers: {"Content-Type": "application/json"}
//     })
//     .then(resp => resp.json())
//     .then(setHoneyHoles)
//     .catch(alert)
//   }

//   return (
//     <>
       
//     </>
//   )

// }

import { useState } from "react";

export default function HoneyHole({ honeyHole, setHoneyHoles }) {
  const handleDeleteHoneyHole = () => {
    fetch(`https://honey-hole-aa.web.app/honeyholes/${honeyHole.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
        setHoneyHoles((prevHoneyHoles) =>
          prevHoneyHoles.filter((hole) => hole.id !== honeyHole.id)
        );
      })
      .catch(alert);
  };

  return (
    <div>
      <h3>Location: {honeyHole.location}</h3>
      <p>Species: {honeyHole.species}</p>
      <p>Size: {honeyHole.size}</p>
      <button onClick={handleDeleteHoneyHole}>Delete</button>
    </div>
  );
}
