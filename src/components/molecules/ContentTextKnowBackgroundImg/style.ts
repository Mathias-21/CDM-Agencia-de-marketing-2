import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5.8rem;
  cursor: default;

  h2 {
    font-size: 2.875rem;
    font-weight: 800;
    width: 36rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.875rem;
    width: 26.3rem;
    margin-bottom: 2.8rem;
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    width: 14.375rem;
    height: 5rem;
    padding: 0.9rem;
    font-family: "Raleway", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
    background-color: #ee5600;
    color: #fff;
    cursor: pointer;
    outline-style: none;
    transition: 0.2s;

    :hover {
      background-color: #fff;
      color: #ee5600;
    }
  }
`;
