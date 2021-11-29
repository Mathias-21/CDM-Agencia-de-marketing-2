import * as C from "./style";
import { ServicesProps } from "../../../types/types";

export default function ServicesCard(props: ServicesProps) {
  return (
    <C.Container>
      <img src={props.src} alt={props.alt} />
      <p>{props.title}</p>
    </C.Container>
  );
}
