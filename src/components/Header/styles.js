import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 2rem 6rem 2.5rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.COLORS.BG_GRAY_700};
  color: ${(props) => props.theme.COLORS.GRAY_100};
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 2rem;

  &:hover {
    background-color: ${(props) => props.theme.COLORS.BG_GRAY_900};
  }
`;

export const Title = styled(Link)`
  background-color: ${(props) => props.theme.COLORS.BG_GRAY_700};
  color: ${(props) => props.theme.COLORS.GRAY_100};
  font-size: 3rem;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 2rem;

  &:hover {
    background-color: ${(props) => props.theme.COLORS.BG_GRAY_900};
  }
`;

export const Logout = styled(Link)`
  font-size: 25px;
  color: ${(props) => props.theme.COLORS.GRAY_100};
`;
