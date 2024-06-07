import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;

  main {
    height: 100vh;
    padding: 6rem 11rem;
  }

  ul {
    flex: 1;
    margin-top: 2.2rem;
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
