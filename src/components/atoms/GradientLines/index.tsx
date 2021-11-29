import * as C from "./style";
import gradientLines from "../../../svgs/gradientLines.svg";

export default function GradientLines() {
  return (
    <C.Container>
      <img src={gradientLines} alt="Varias linhas com um degradê" />
    </C.Container>
  );
}
