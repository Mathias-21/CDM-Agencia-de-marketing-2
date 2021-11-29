import { InstagramPostProps } from "../../../types/types";
import * as C from "./style";

export default function InstagramPost(props: InstagramPostProps) {
  return (
    <C.Container width={props.width} marginTop={props.marginTop}>
      <img src={props.src} alt={props.alt} />
    </C.Container>
  );
}
