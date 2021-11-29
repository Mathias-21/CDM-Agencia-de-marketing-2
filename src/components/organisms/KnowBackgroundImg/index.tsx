import * as C from "./style";
import ContentTextKnowBackgroundImg from "../../molecules/ContentTextKnowBackgroundImg";
import ImagePhoneKnowBackgroundImg from "../../atoms/ImagePhoneKnowBackgroundImg";

export default function KnowBackgroundImg() {
  return (
    <C.Container>
      <div id="content">
        <ContentTextKnowBackgroundImg />
        <ImagePhoneKnowBackgroundImg />
      </div>
    </C.Container>
  );
}
