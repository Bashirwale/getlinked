import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import SuccessfulReg from "./components/SuccessfulReg";

function App() {
  const [registeredStatus, setRegisteredStatus] = useState<boolean>(false);

  return (
    <div className="relative bg-bgColor text-white h-full overflow-hidden ">
      {registeredStatus && <SuccessfulReg />}
      <Router>
        <Navbar />
        <div className="absolute top-10 left-0 md:top-8 md:left-64 h-64 w-44 md:h-64 md:w-64 bg-violet-900 rounded-full blur-3xl "></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
