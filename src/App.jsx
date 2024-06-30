import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Service from "./components/service.jsx";

// import VerticalSlider from "./components/verticalslider";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
