import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;

  .wrapper {
    margin: auto;
  }

  .form-container {
    background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
    width: 52rem;
    padding: 4rem 4rem 7rem;
    margin: 1rem auto 0;
    border-radius: 0.5rem;

    h1 {
      margin-bottom: 0.8rem;
    }

    h2 {
      margin: 3rem 0 2rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_900};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  height: 16rem;
  padding: 1rem;
  border: none;
  resize: none;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

export const Tag = styled.input`
  background-color: ${({ theme, $light }) =>
    $light ? theme.COLORS.BG_GRAY_700 : theme.COLORS.BG_GRAY_900};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  width: 50%;
  padding: 0 1.4rem;
  height: 4.5rem;
  outline: none;
  border: none;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
`;
