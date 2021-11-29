import styled from "styled-components";

export const Container = styled.li`
  cursor: pointer;
  transition: 0.5s;
  margin: 0 1rem;

  a {
    text-decoration: none;
    color: #000;
    padding: 0.9rem 0.6rem;
    transition: 0.3s;

    :hover {
      color: #fff;
    }
  }
`;
