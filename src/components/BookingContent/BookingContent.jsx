import Navbar from "../../components/Navbar"
import Cars from "./Cars"
import Settings from "./components/Settings"
import Tilte from "./components/Title"



export default function BookingContent() {
  return (
    <div className="BookingContent ps-1">
      <Navbar/>
      <Tilte title="Booking"/>
      <Settings/>
      <Cars/>
    </div>
  )
}
