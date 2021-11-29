import styled from "styled-components";

export const Container = styled.nav`
  flex: 2;

  ul {
    display: flex;
    justify-content: end;
    list-style: none;

    li {
      padding: 0.9rem 0;
      cursor: pointer;
      transition: 0.3s;
      margin: 0 0.5rem;

      :hover {
        background-color: #ff7801;
        color: #fff;
      }
    }
  }
`;
