import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  margin: auto;

  .wrapper-form {
    margin: auto;
  }

  .form-container {
    background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
    width: 52rem;
    padding: 4rem 4rem 7rem;
    margin: 1rem auto 0;
    border-radius: 0.5rem;

    @media (max-width: 768px) {
      width: 36rem;
      padding: 2rem;
    }

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
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem 0;
`;

export const TagInputWithButton = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  button {
    color: #8234e9;
    background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
    outline: none;
    border: none;
    margin-left: 0.5rem;

    &:hover {
      filter: brightness(1); // reset do globalStyle
    }
  }
`;

export const TagInput = styled.input`
  height: 4.5rem;
  width: 82%;
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_900};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 0 1.4rem;
  outline: none;
  border: none;

  border-radius: 0.8rem;

  &&:read-only {
    background-color: rgba(35, 33, 41, 0.7);
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    &&:focus {
      border: none; // reset do globalStyle
    }
  }

  @media (max-width: 768px) {
    width: 76%;
  }
`;

export const ErrorMsg = styled.div`
  color: #ed8285;
  background-color: #513036;
  padding: 0 1.4rem;
  margin: 0.6rem 0 1rem;
`;
