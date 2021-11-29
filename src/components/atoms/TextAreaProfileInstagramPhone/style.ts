import styled from "styled-components";
import { TextAreaProfileInstagramPhoneStyleProps } from "../../../types/types";

export const Container = styled.h2`
  font-family: "Rambla", sans-serif;
  font-style: italic;
  font-size: 2.25rem;
  color: ${(props: TextAreaProfileInstagramPhoneStyleProps) => props.textColor};
  width: ${(props: TextAreaProfileInstagramPhoneStyleProps) => props.width};
`;
