import ButtonFooter from "../../atoms/ButtonFooter";
import CopyrightFooter from "../../atoms/CopyrightFooter";
import InfoContactFooter from "../../molecules/InfoContactFooter";
import TextAreaFooter from "../../molecules/TextAreaFooter";
import * as C from "./style";

export default function FooterIndex() {
  return (
    <C.Container>
      <div id="content">
        <TextAreaFooter />
        <ButtonFooter url="" value="NOS ENVIE UMA MENSAGEM" />
        <InfoContactFooter />
      </div>
      <CopyrightFooter />
    </C.Container>
  );
}
