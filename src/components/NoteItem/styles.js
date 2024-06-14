import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 0.1rem 1.6rem 1.4rem;
  height: 18rem;
  width: 28rem;
  border-radius: 1rem;
  margin: auto;

  > p {
    flex: 1;
    overflow: hidden;
    word-wrap: break-word;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  footer p {
    margin-bottom: 0.6rem;
  }

  @media (min-width: 768px) {
    width: 34rem;
  }
`;

export const Title = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 2rem;
  padding: 0.5rem 2rem 1rem 0;
  text-decoration: none;
  cursor: pointer;
`;
