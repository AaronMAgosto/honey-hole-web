import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import Hero from "./pages/HomePage.jsx";
import Gallery from "./components/Gallery"
import MyNavbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  const [ honeyHoles, setHoneyHoles] = useState('')

  return (
    <>
    <BrowserRouter>
     <MyNavbar/>
     <Hero/>
    
     <Routes>
       <Route path="/"  element={<Cards honeyHoles={honeyHoles} setHoneyHoles={setHoneyHoles} />} />
       <Route path="/" element={<Gallery />} />
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;