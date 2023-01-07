import { faBagShopping, faCalendarDays, faCar, faCartShopping, faCompass, faMessage, faTableCellsLarge, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/Vector 1.png";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="Sidebar p-0">
      <div className="title d-flex align-items-center pt-3 ps-3">
        <div className="logo bg-purple p-2 rounded">
          <img src={Logo} alt="Logo" />
        </div>
        <h6 className="fw-bold fs-3 ms-2 mt-2 text-dark">Motiv.</h6>
      </div>
      <div className="content mt-4 pt-3 ps-3">
        <ul className="px-0">
          <Link to="/" className="active">
            <FontAwesomeIcon icon={faTableCellsLarge}/>
            <span className="ms-2">Dashboard</span>
          </Link>
          <li>
            <FontAwesomeIcon icon={faCompass}/>
            <span className="ms-2">Assets</span>
          </li>
          <Link to="/booking">
            <FontAwesomeIcon icon={faCar}/>
            <span className="ms-2">Booking</span>
          </Link>
          <li>
            <FontAwesomeIcon icon={faBagShopping}/>
            <span className="ms-2">Sell Cars</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span className="ms-2">Buy Cars</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faWandMagicSparkles}/>
            <span className="ms-2">Services</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDays}/>
            <span className="ms-2">Calender</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faMessage}/>
            <span className="ms-2">Messages</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
