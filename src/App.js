import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AddHoneyHole from "./Pages/AddHoneyHole.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [ honeyHoles, setHoneyHoles] = useState('')

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/addhoneyhole" element={<AddHoneyHole setHoneyHoles={setHoneyHoles}/>} />
       <Route path="/"  element={<Home honeyHoles={honeyHoles} setHoneyHoles={setHoneyHoles} />} />
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
