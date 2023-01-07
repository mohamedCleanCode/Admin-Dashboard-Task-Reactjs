import { faRepeat, faUser } from "@fortawesome/free-solid-svg-icons";
import car1 from "../../../assets/imgs/booking-imgs/car-1.png";
import car2 from "../../../assets/imgs/booking-imgs/car-2.png";
import car3 from "../../../assets/imgs/booking-imgs/car-3.png";
import car4 from "../../../assets/imgs/booking-imgs/car-4.png";
import car5 from "../../../assets/imgs/booking-imgs/car-5.png";
import car6 from "../../../assets/imgs/booking-imgs/car-6.png";
import Car from "./components/Car";

export default function Cars() {
  let imgs = [car1, car2, car3, car4, car5, car6];
  let list = [];
  for (let i = 0; i < 6; i++) {
    list.push(
      <div className="col-4 mb-3">
        <Car
          title="Porshe 718 Cayman S"
          brand="Coupe"
          img={imgs[i]}
          icon1={faUser}
          num="4"
          icon2={faRepeat}
          work="Manual"
          price="400"
        />
      </div>
    );
  }
  return (
    <div className="Cars mx-3 mt-4">
      <div className="row">{list}</div>
    </div>
  );
}
