import { faCubes, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="Settings mt-4 ps-3 d-flex justify-content-between pe-4">
        <div className="buttons">
            <button className="border-0 me-3 py-2 ps-3 pe-5 bg-white">New</button>
            <button className="border-0 me-3 py-2 ps-3 pe-5 bg-white">Toyota</button>
        </div>
        <div className="icons">
            <FontAwesomeIcon icon={faCubes}/>
            <FontAwesomeIcon icon={faSliders}/>
        </div>
    </div>
  )
}
