import * as C from "./style";
import { statisticsInfoProps } from "../../../types/types";

export default function StatisticsInfo(props: statisticsInfoProps) {
  return (
    <C.Container
      fontSizeText={props.fontSizeText}
      fontSizeNumber={props.fontSizeNumber}
      height={props.height}
    >
      {props.topText}
      <div>{props.numberStatistics}</div>
      {props.bottomText}
    </C.Container>
  );
}
