import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;

  place-content: center;
  place-items: center;

  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 1rem 2rem;

  > div {
    transform: translateY(-2rem);
    height: 35rem;
    width: 70rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 1rem;

    @media (max-width: 768px) {
      min-width: 30rem;
      width: 100%;
    }
  }

  .buttons-div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Post = styled.div`
  margin-top: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
  padding: 0.6rem 1.6rem 1.2rem;
  border-radius: 10px;

  h1 {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  footer {
    margin-top: 1rem;
    text-align: right;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Scroll = styled.div`
  flex: 1;
  overflow-y: auto;

  p {
    display: scroll;
  }
`;
