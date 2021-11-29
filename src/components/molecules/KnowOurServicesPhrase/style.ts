import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 4.5rem;
  cursor: pointer;

  #knowOur {
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }

  #services {
    font-size: 1.9rem;
    font-weight: 600;
  }

  ::before {
    content: "";
    width: 3rem;
    height: 3px;
    background-color: #ff7801;
    margin: 0 auto 2rem;
  }

  ::after {
    content: "";
    width: 9rem;
    height: 3px;
    background-color: #ff7801;
    margin: 2rem auto 0;
  }
`;
