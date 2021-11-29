import * as C from "./style";
import lineDots from "../../../svgs/lineDots.svg";

export default function KnowOurServicesPhrase() {
  return (
    <C.Container>
      <div>
        <div id="firstPhrase">
          Não deixamos apenas as &nbsp; suas redes sociais atualizadas.
        </div>
        <div id="secondPhrase">É muito mais que isso.</div>
      </div>
      <img src={lineDots} alt="lineDots" />
    </C.Container>
  );
}
