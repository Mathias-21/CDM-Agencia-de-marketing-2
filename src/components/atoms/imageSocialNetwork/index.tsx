import * as C from "./style";
import { ImageSocialNetworkProps } from "../../../types/types";

export default function ImageSocialNetwork(props: ImageSocialNetworkProps) {
  return (
    <C.Container>
      <a href={props.href} target={props.target} rel={props.rel}>
        <img src={props.src} alt={props.alt} />
      </a>
    </C.Container>
  );
}
