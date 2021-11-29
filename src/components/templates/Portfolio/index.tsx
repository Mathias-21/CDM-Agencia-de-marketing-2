import * as C from "./style";
import Header from "../../organisms/Header";
import KnowPortfolio from "../../organisms/KnowPortfolio";
import KnowStartup from "../../organisms/KnowStartup";
import AreaInstagramPosts from "../../organisms/AreaInstagramPosts";
import PromotionalStories from "../../organisms/PromotionalStories";
import FooterPortfolio from "../../organisms/FooterPortfolio";

export default function Portfolio() {
  return (
    <C.Container>
      <Header />
      <KnowPortfolio />
      <KnowStartup />
      <AreaInstagramPosts />
      <PromotionalStories />
      <FooterPortfolio />
    </C.Container>
  );
}
