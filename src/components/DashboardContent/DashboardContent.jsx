import { faArrowsUpDown, faBolt, faEgg } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar";
import CardFeatures from "./components/CardFeatures";
import "./DashboardContent.css";

export default function DashboardContent() {
  return (
    <div className="DashboardContent ps-1">
        <Navbar/>
        <div className="row p-3">
            <div className="col-3">
                <CardFeatures icon={faBolt} title="Energy" ratio="45%"/>
            </div>
            <div className="col-3">
                <CardFeatures icon={faArrowsUpDown} title="Range" ratio="157K%"/>
            </div>
            <div className="col-3">
                <CardFeatures icon={faEgg} title="Break Fluid" ratio="9%"/>
            </div>
            <div className="col-3">
                <CardFeatures icon={faEgg} title="Tire Wear" ratio="25%"/>
            </div>
        </div>
    </div>
  )
}
