import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Hero from "./pages/HomePage.jsx";
import Gallery from "./components/Gallery"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  const [ honeyHoles, setHoneyHoles] = useState('')

  return (
    <>
    <BrowserRouter>
     <Hero/>
     <Routes>
       <Route path="/honeyholes"  element={<Home honeyHoles={honeyHoles} setHoneyHoles={setHoneyHoles} />} />
       <Route path="/" element={<Gallery />} />
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;