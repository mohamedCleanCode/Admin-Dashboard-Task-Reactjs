import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardFeatures.css";

export default function CardFeatures(props) {
  return (
    <div className="CardFeatures pointer">
      <FontAwesomeIcon icon={props.icon} className="icon" />
      <div className="title">{props.title}</div>
      <div className="percent">
        <div className="container">
          <svg
            className="circle-container"
            viewBox="2 -2 28 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient id="gradient">
              <stop className="stop1" offset="0%" />
              <stop className="stop2" offset="100%" />
            </linearGradient>
            <circle
              className="circle-container__background"
              r="16"
              cx="16"
              cy="16"
              shapeRendering="geometricPrecision"
            ></circle>
            <circle
              className="circle-container__progress"
              r="16"
              cx="16"
              cy="16"
              style={{ strokeDashoffset: "20" }}
              shapeRendering="geometricPrecision"
            ></circle>
          </svg>
        </div>
        <div className="ratio">{props.ratio}</div>
      </div>
    </div>
  );
}
