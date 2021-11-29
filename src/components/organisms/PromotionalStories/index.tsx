import PromotionalStoriesImage from "../../atoms/PromotionalStoriesImage";
import AreaInstagramStories from "../../molecules/AreaInstagramStories";
import ProductionNetworkSocial from "../ProductionNetworkSocial";
import * as C from "./style";

export default function PromotionalStories() {
  return (
    <C.Container>
      <div id="content">
        <PromotionalStoriesImage />
        <AreaInstagramStories />
        <ProductionNetworkSocial />
      </div>
    </C.Container>
  );
}
