import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../components/Sidebar";
export default function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="title d-flex text-purple">
        <FontAwesomeIcon icon={faDiceD20} />
        <h6 className="ms-2">Dashboard</h6>
      </div>
      <Sidebar />
    </div>
  );
}
