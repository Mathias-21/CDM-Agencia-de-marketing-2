import { ButtonProps } from "../../../types/types";
import * as C from "./style";

export default function ButtonFooter(props: ButtonProps) {
  return <C.Container>{props.value}</C.Container>;
}
