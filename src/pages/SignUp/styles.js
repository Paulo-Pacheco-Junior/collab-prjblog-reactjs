import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;

  > div {
    background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
    width: 40rem;
    padding: 4rem 4rem 7rem;
    margin: 0 auto;
    border-radius: 0.5rem;

    h1 {
      margin-bottom: 0.8rem;
    }

    h2 {
      margin: 3rem 0 2rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    background-color: ${({ theme }) => theme.COLORS.BG_GRAY_900};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    padding: 0.8rem;
    outline: none;
    border: none;
    border-radius: 0.8rem;
    margin-bottom: 1rem;
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.BG_ORANGE};
    font-size: 1.8rem;
    font-weight: 700;
    padding: 1.2rem 1.6rem;
    outline: none;
    border: none;
    border-radius: 0.8rem;
  }
`;
