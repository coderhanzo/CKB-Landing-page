import { BrowserRouter as Router, Routes, } from "react-router-dom"; // Route, removed this for now.
import "./index.css";
// import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
// import Service from "./components/service.jsx";

// import VerticalSlider from "./components/verticalslider";

function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/service" element={<Service />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
