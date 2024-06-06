import styled from "styled-components";

export const Container = styled.li`
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 3rem;
  margin-bottom: 4rem;
  width: 30rem;
  border-radius: 1rem;
  cursor: pointer;

  h2 {
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  footer {
    margin-top: 1rem;
    text-align: right;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
