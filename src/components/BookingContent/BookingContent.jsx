import Navbar from "../../components/Navbar"
import Settings from "./components/Settings"
import Tilte from "./components/Title"



export default function BookingContent() {
  return (
    <div className="BookingContent ps-1">
      <Navbar/>
      <Tilte title="Booking"/>
      <Settings/>
    </div>
  )
}
