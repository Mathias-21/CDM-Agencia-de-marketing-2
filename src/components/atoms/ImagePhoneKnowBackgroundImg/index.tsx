import * as C from "./style";
import imagemCelular from "../../../svgs/imagemCelular1.svg";

export default function ImagePhoneKnowBackgroundImg() {
  return (
    <C.Container>
      <img src={imagemCelular} alt="imagePhone" />
    </C.Container>
  );
}
