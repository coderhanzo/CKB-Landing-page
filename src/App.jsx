import { BrowserRouter as Router, Routes } from "react-router-dom"; // Route, removed this for now.
import "./index.css";
import Home from "./components/home.jsx";
// import LoadingScreen from "./components/loadingscreen.jsx";

function App() {
  return (
    <>
      <Router>
        {/* <LoadingScreen /> */}
        <Home />
        <Routes>
          {/* <Route path="/" element={<LoadingScreen />} /> */}
          {/* <Route path="/service" element={<Service />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
