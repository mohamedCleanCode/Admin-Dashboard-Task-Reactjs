import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../components/Sidebar";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="title d-flex text-purple">
        <FontAwesomeIcon icon={faDiceD20} />
        <h6 className="ms-2">Dashboard</h6>
      </div>
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          Content
        </div>
      </div>
    </div>
  );
}
