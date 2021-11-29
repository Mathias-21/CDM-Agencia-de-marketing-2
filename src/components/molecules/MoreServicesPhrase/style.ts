import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;

  #firstPhrase {
    width: 25rem;
    font-size: 1.75rem;
    margin-bottom: 0.4rem;
  }

  #secondPhrase {
    width: 34rem;
    font-size: 3.2em;
    font-weight: 700;
    color: #ff7801;
  }

  img {
    margin-left: 2rem;
    height: 6.25rem;
    background-size: auto;
    background-repeat: no-repeat;
  }
`;
