import * as C from "./style";
import { ButtonProps } from "../../../types/types";
import { Link } from "react-router-dom";

export default function ButtonHeader(props: ButtonProps) {
  return (
    <C.Container>
      <Link to={props.url}>{props.value}</Link>
    </C.Container>
  );
}
