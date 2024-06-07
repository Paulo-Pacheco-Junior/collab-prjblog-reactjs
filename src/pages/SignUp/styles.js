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
`;
