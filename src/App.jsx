import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App  ()  {
  return (
    <div>
    <>
<Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
       </Routes>
   <Footer />
    </>
    </div>
  )
}

export default App