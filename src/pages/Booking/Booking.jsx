import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookingContent from "../../components/BookingContent/BookingContent";
import Sidebar from "../../components/Sidebar";

export default function Booking() {
  return (
    <div className="Booking">
      <div className="title d-flex text-purple">
        <FontAwesomeIcon icon={faDiceD20} />
        <h6 className="ms-2">Booking</h6>
      </div>
      <div className="row">
        <div className="col-3 pe-0">
          <Sidebar />
        </div>
        <div className="col-9 pe-2 ps-0">
          <BookingContent/>
        </div>
      </div>
      <BookingContent/>
    </div>
  )
}
