import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adminImg from "../../assets/imgs/admin.png";
import "./Navbar.css";


export default function Navbar() {
  return (
    <div className="Navbar d-flex justify-content-between align-items-center px-3">
      <div className="search-input border p-2 rounded">
        <FontAwesomeIcon icon={faSearch}/>
        <input className="border-0 ps-" type="text" placeholder="Search or type"/>
      </div>
      <div className="admin-details d-flex justify-content-between align-items-center">
        <div className="icon">
          <FontAwesomeIcon className="fs-5" icon={faBell} />
        </div>
        <img className="rounded-circle pointer" src={adminImg} alt="Admin" />
      </div>
    </div>
  )
}
