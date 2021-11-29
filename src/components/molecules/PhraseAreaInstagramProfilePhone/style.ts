import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.4rem 1.9rem 0 0;

  ::before {
    content: "";
    width: 5rem;
    height: 0.25rem;
    background-color: #ececec;
    margin-bottom: 2rem;
  }

  ::after {
    content: "";
    width: 5rem;
    height: 0.25rem;
    background-color: #ececec;
    margin-top: 2rem;
  }
`;
