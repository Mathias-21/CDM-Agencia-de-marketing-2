import * as C from "./style";
import { InstagramStorieProps } from "../../../types/types";

export default function InstagramStorie(props: InstagramStorieProps) {
  return (
    <C.Container>
      <img src={props.src} alt={props.alt} />
    </C.Container>
  );
}
