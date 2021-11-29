import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, #dfdfdf 0%, #fff 99%);

  #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 65.625rem;
    margin-bottom: 3rem;
  }
`;
