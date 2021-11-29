import styled from "styled-components";

type BackgroundImg = {
  backgroundImg: string;
};

export const Container = styled.div(
  (props: BackgroundImg) => `
  display: flex;
  justify-content: center;
  height: 42.5rem;
  // background-image: url("https://www.zioncontent.com.br/wp-content/uploads/2018/07/Blog-Marketing-Digital-bg-Zion-2.jpg?id=9408");
  background-image: url(${props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "raleway", sans-serif;

  #content {
    display: flex;
    max-width: 65.625rem;
    width: 100%;
  }
`
);
