import * as C from "./style";
import promotionalStories from "../../../svgs/promotionalStories.svg";

export default function PromotionalStoriesImage() {
  return (
    <C.Container>
      <img src={promotionalStories} alt=" Stories Pomocionais" />
    </C.Container>
  );
}
