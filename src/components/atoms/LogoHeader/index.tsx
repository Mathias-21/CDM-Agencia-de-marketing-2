import * as C from "./style";
import logo from "../../../svgs/logoCDM.svg";
import { Link } from "react-router-dom";

export default function LogoHeader() {
  return (
    <C.Container>
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="CDM Logo" />
        </Link>
      </div>
    </C.Container>
  );
}
