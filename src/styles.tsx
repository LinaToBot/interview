import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  height: 100%;
  margin: 0;
  background-color: #182A55;
  color: #FDF8F2;
  font-family: 'GameOver', sans-serif;
}`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  height: 100vh;

  h1 {
    font-size: 4.3rem;
    color: #abc13a;
  }

  .form-page {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }

  .form-page label {
    font-size: 2rem;
    color: #fdf8f2;
  }

  .form-page input {
    justify-self: center;
    width: 16rem;
    height: 3rem;
    font-size: 1.5rem;
    font-weight: 100;
    color: #abc53a;
    border-radius: 0.5rem;
    border: 0.25rem solid #3972f69b;
    background-color: #3972f69b;
    text-align: center;
  }

  .form-page input::placeholder {
    text-align: center;
    color: #f5efe8aa;
    font-weight: 400;
  }

  .form-page input:focus {
    outline: none;
    color: #abc13a;
    font-weight: 700;
  }

  .form-page button {
    width: 14rem;
    height: 3.2rem;
    justify-self: center;
    font-size: 1.5rem;
    color: #fdf8f2;
    border-radius: 0.5rem;
    border: 2px solid #3972f69b;
    background-color: #3383c7;
  }

  .form-page button:hover {
    box-shadow: 0 0 2rem rgba(109, 177, 236, 0.969);
  }

  .show-result {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 3rem;

    p:nth-of-type(1) {
      color: #87539b;
    }

    p:nth-of-type(2) {
      color: #abc53a;
    }
  }
`;
