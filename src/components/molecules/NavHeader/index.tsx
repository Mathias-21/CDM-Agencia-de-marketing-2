import * as C from "./style";
import ButtonHeader from "../../atoms/ButtonHeader";

export default function NavHeader() {
  return (
    <C.Container>
      <ul>
        <ButtonHeader value="SERVIÇOS" url="/services" />
        <ButtonHeader value="PORTFÓLIO" url="/portfolio" />
        <ButtonHeader value="PLANOS" url="/planos" />
        <ButtonHeader value="DEPOIMENTOS" url="/depoimentos" />
        <ButtonHeader value="BLOG" url="/blog" />
      </ul>
    </C.Container>
  );
}
