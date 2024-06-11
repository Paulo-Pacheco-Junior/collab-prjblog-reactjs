import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.li`
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 1rem 2rem;
  width: 30rem;
  border-radius: 1rem;

  footer {
    margin-top: 1rem;
    text-align: right;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Title = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 2rem;
  padding: 1.5rem 2rem 2rem 0;
  text-decoration: none;
  cursor: pointer;
`;
