import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  .pages-counter {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .pages-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;
  }
`;

export const PageIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  padding: 0.4rem 1rem;
  margin: 0 0.4rem;
  border: none;
  outline: none;
  border-radius: 0.6rem;
  text-align: center;
  cursor: pointer;
`;
