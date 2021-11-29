import { StatisticsInfoStyleProps } from "./../../../types/types";
import styled from "styled-components";

export const Container = styled.div`
  width: 17rem;
  font-size: ${(props: StatisticsInfoStyleProps) => props.fontSizeText};
  text-align: center;
  font-family: "raleway", sans-serif;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props: StatisticsInfoStyleProps) => props.height};
    font-family: "fira sans", sans-serif;
    font-size: ${(props: StatisticsInfoStyleProps) => props.fontSizeNumber};
    color: #ff7801;
    padding: 0.2rem;
  }
`;
