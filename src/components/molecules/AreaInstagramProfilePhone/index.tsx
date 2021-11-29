import * as C from "./style";
import ImageProfileInstagramPhone from "../../atoms/ImageProfileInstagramPhone";
import PhraseAreaProfileInstagramPhone from "../PhraseAreaInstagramProfilePhone";

export default function AreaInstagramProfilePhone() {
  return (
    <C.Container>
      <div id="content">
        <PhraseAreaProfileInstagramPhone />
        <ImageProfileInstagramPhone />
      </div>
    </C.Container>
  );
}
