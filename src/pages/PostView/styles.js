import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;

  place-content: center;
  place-items: center;

  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 1rem 2rem;
  border-radius: 1rem;

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Post = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
  padding: 2rem 3rem;
  border-radius: 10px;

  h1 {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  footer {
    margin-top: 1rem;
    text-align: right;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
