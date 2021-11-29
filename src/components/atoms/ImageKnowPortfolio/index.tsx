import * as C from "./style";
import imageKnowPortfolio from "../../../svgs/imageKnowPortfolio.svg";

export default function ImageKnowPortfolio() {
  return (
    <C.Container>
      <img src={imageKnowPortfolio} alt="Conheça nosso Portfólio" />
    </C.Container>
  );
}
