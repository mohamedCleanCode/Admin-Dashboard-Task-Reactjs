import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon="coffee" />
      <FontAwesomeIcon icon={["fas", "coffee"]} />
      <FontAwesomeIcon icon={["far", "coffee"]} />
      <FontAwesomeIcon icon={faCoffee} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
