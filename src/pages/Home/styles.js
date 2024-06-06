import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;

  main {
    height: 100vh;
    padding: 6rem 11rem;
  }

  input {
    background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    width: 100%;
    font-size: 2rem;
    padding: 1.5rem;
    outline: none;
    border: none;
    border-radius: 0.8rem;
    margin-bottom: 3rem;
  }

  ul {
    flex: 1;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
  }
`;

export const BlogContent = styled.div`
  display: flex;
`;

export const TagsBar = styled.aside`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  width: 28rem;
  text-align: center;
  padding: 5rem 0 2rem 3.5rem;
  cursor: pointer;

  ul {
    display: flex;
    flex-direction: column;
  }
`;
