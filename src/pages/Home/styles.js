import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  main {
    flex: 1;
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
  padding-bottom: 12rem;
`;

export const TagsBar = styled.aside`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  width: 22rem;
  padding: 1rem 0 1rem 6rem;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  li {
    background-color: #8234e9;
    background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem;
    text-align: center;
    width: 10rem;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
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
