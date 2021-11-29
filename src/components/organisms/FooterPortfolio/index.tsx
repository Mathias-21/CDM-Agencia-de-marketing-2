import * as C from "./style";
import ButtonFooter from "../../atoms/ButtonFooter";
import CopyrightFooter from "../../atoms/CopyrightFooter";
import InfoContactFooter from "../../molecules/InfoContactFooter";

export default function FooterPortfolio() {
  return (
    <C.Container>
      <div id="content">
        <ButtonFooter value="NOS ENVIE UMA MENSAGEM" url="" />
        <InfoContactFooter />
      </div>
      <CopyrightFooter />
    </C.Container>
  );
}
