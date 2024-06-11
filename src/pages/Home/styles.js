import { Link } from "react-router-dom";
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
  position: relative;
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

export const NewPostBtn = styled(Link)`
  position: fixed;
  bottom: 30px;
  right: 40px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.COLORS.BG_ORANGE};
  color: black;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1.2rem 1.6rem;
  outline: none;
  border: none;
  border-radius: 0.8rem;
`;
