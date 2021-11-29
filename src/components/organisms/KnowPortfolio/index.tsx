import ImageKnowPortfolio from "../../atoms/ImageKnowPortfolio";
import PortfolioStatistics from "../../molecules/PortfolioStatistics";
import * as C from "./style";

export default function KnowPortfolio() {
  return (
    <C.Container>
      <ImageKnowPortfolio />
      <div id="content">
        <PortfolioStatistics />
      </div>
    </C.Container>
  );
}
