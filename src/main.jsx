import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { register } from "swiper/element/bundle";
register();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
