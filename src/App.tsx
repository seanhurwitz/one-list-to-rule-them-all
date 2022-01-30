import React from "react";
import "./App.css";
import { Container, Header, List, ListContainer } from "./styles";
import { useTheme } from "./context";

function App() {
  const { toggleLightMode } = useTheme();
  return (
    <Container>
      <ListContainer>
        <Header>
          <h1>One List To Rule Them All</h1>
          <div onClick={toggleLightMode}>lol</div>
        </Header>
        <p>
          A lightweight, no-nonsense, uncomplicated, unordered, local-storaged
          todo list. One list. Have you done your stuff or not? Nothing else
          matters.
        </p>
        <List>lol</List>
      </ListContainer>
    </Container>
  );
}

export default App;
