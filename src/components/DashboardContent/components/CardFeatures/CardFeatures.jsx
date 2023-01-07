import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardFeatures.css";

export default function CardFeatures(props) {
  return (
    <div className="CardFeatures pointer">
      <FontAwesomeIcon icon={props.icon} className="icon"/>
      <div className="title">{props.title}</div>
      <div className="ratio">{props.ratio}</div>
    </div>
  )
}
