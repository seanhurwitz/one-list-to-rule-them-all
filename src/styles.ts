import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const ListContainer = styled.div`
  height: 100%;
  width: 45%;
  min-width: 300px;
  padding: 0.4rem;
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-gap: 0.9rem;
  font-size: 0.8rem;
  > h1,
  p {
    text-align: justify;
    text-align-last: center;
  }
`;

const List = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 0.5rem;
  border-radius: 5px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0.5rem;
  align-items: center;
  justify-items: center;
  > h1 {
    font-size: 3rem;
  }
`;

export { Container, List, ListContainer, Header };
