import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Car.css";

export default function Car(props) {
  return (
    <div className="Car bg-white p-3 rounded position-relative">
      <h5>{props.title}</h5>
      <p className="brand text-black-50">{props.brand}</p>
      <img className="w-100" src={props.img} alt={props.title} />
      <div className="info mt-4">
        <span>
          <FontAwesomeIcon className="me-2" icon={props.icon1} />
        </span>
        <span className="text-black-50">{props.num}</span>
        <span>
          <FontAwesomeIcon className="ms-4 me-2" icon={props.icon2} />
        </span>
        <span className="text-black-50">{props.work}</span>
        <span className="position-absolute right-15 fw-bold">
          ${props.price}
          <span className="text-black-50 fw-normal">/d</span>
        </span>
        <span className="heart position-absolute">
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
    </div>
  );
}
