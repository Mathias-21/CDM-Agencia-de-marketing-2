import * as C from "./style";
import { MainStyle } from "../../../MainStyle";
import NavHeader from "../../molecules/NavHeader";
import LogoHeader from "../../atoms/LogoHeader";

export default function Header() {
  return (
    <>
      <C.Container>
        <MainStyle>
          <LogoHeader />
          <NavHeader />
        </MainStyle>
      </C.Container>
    </>
  );
}
