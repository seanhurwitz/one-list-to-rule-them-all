import { Delete20 } from "@carbon/icons-react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: all 350ms ease;
  overflow: hidden;
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
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.2rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color};
  }
`;

const ListItem = styled.div`
  border: 1px solid ${({ theme }) => theme.color};
  padding: 0.7rem;
  border-radius: 5px;
  margin-bottom: 0.3rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0.3rem;
`;

const ItemInput = styled.input`
  border: 1px solid ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
  padding: 0.7rem;
  border-radius: 5px;
  margin-bottom: 0.3rem;
  width: 100%;
  background: none;
  :focus-visible {
    outline: none;
  }
`;

const NewItem = styled.div`
  border: 1px solid ${({ theme }) => theme.color};
  padding: 0.7rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.newItemBackground};
`;

const ListItemText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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

const Delete = styled(Delete20)`
  cursor: pointer;
`;

export {
  Container,
  List,
  ListContainer,
  Header,
  ListItem,
  Delete,
  ListItemText,
  NewItem,
  ItemInput,
};
