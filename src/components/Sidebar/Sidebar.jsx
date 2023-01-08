import {
  faBagShopping,
  faCalendarDays,
  faCar,
  faCartShopping,
  faCircleLeft,
  faCompass,
  faGear,
  faMessage,
  faTableCellsLarge,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/Vector 1.png";
import "./Sidebar.css";

export default function Sidebar() {
  useEffect(() => {
    const links = document.querySelectorAll(".links a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        links.forEach((link) => {
          link.classList.remove("active");
        });
        e.target.classList.add("active");
        console.log(e.target);
      });
    });
    console.log(links);
  });
  return (
    <div className="Sidebar p-0">
      <div className="title d-flex align-items-center pt-3 ps-3">
        <div className="logo bg-purple p-2 rounded">
          <img src={Logo} alt="Logo" />
        </div>
        <h6 className="fw-bold fs-3 ms-2 mt-2 text-dark">Motiv.</h6>
      </div>
      <div className="content mt-4 pt-3 ps-3">
        <ul className="px-0 links">
          <Link to="/" className="active">
            <FontAwesomeIcon icon={faTableCellsLarge} />
            <span className="ms-2">Dashboard</span>
          </Link>
          <Link to="/assets">
            <FontAwesomeIcon icon={faCompass} />
            <span className="ms-2">Assets</span>
          </Link>
          <Link to="/booking">
            <FontAwesomeIcon icon={faCar} />
            <span className="ms-2">Booking</span>
          </Link>
          <Link to="/sellcars">
            <FontAwesomeIcon icon={faBagShopping} />
            <span className="ms-2">Sell Cars</span>
          </Link>
          <Link to="/buycars">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="ms-2">Buy Cars</span>
          </Link>
          <Link to="/services">
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            <span className="ms-2">Services</span>
          </Link>
          <Link to="/calender">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span className="ms-2">Calender</span>
          </Link>
          <Link to="/messages">
            <FontAwesomeIcon icon={faMessage} />
            <span className="ms-2">Messages</span>
          </Link>
        </ul>
        <ul className="px-0 mt-5 links">
          <Link to="/settings">
            <FontAwesomeIcon icon={faGear} />
            <span className="ms-2">Settings</span>
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faCircleLeft} />
            <span className="ms-2">Log out</span>
          </Link>
        </ul>
      </div>
    </div>
  );
}
