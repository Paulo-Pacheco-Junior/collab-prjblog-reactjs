import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 14rem;

    > input {
      width: 90%;
    }
  }

  ul {
    flex: 1;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    gap: 4rem;

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  @media (max-width: 768px) {
    main {
      padding: 0 1.4rem;
    }
  }
`;

export const BlogContent = styled.div`
  display: flex;
  position: relative;
  padding-top: 1.6rem;
  padding-bottom: 12rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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
  display: block;
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

  @media (max-width: 768px) {
    position: static;
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
    margin-left: 2.4rem;
    margin-bottom: 1.6rem;
  }
`;
