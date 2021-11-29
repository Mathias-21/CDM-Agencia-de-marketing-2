import * as C from "./style";
import imageLinkCircle from "../../../svgs/imageLinkCircle.svg";

export default function ImageLinkCircle() {
  return (
    <C.Container>
      <img
        src={imageLinkCircle}
        alt="Imagem de ligação de circulos com imagem de fundo"
      />
    </C.Container>
  );
}
