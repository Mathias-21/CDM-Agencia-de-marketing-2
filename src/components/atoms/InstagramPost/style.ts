import { InstagramPostStyleProps } from "../../../types/types";
import styled from "styled-components";

export const Container = styled.div`
  width: ${(props: InstagramPostStyleProps) => props.width};
  margin-top: ${(props: InstagramPostStyleProps) => props.marginTop};
  padding: 0.1rem;
  background: linear-gradient(to bottom, #ccc, white);

  img {
    width: 100%;
    background-color: #fff;
    padding: 0.2rem;
  }
`;
