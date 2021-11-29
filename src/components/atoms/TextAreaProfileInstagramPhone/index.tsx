import { TextAreaProfileInstagramPhoneProps } from "../../../types/types";
import * as C from "./style";

export default function TextAreaProfileInstagramPhone(
  props: TextAreaProfileInstagramPhoneProps
) {
  return (
    <C.Container textColor={props.textColor} width={props.width}>
      {props.text}
    </C.Container>
  );
}
