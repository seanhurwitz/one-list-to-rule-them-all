import React, { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useTheme } from "./context";
import ListComponent from "./List";
import { Container, Header, ListContainer } from "./styles";

const PARTICLE_DURATION = 4000;

function App() {
  const { toggleLightMode, theme } = useTheme();
  const [isExploding, setIsExploding] = useState(false);
  useEffect(() => {
    if (isExploding) {
      setTimeout(() => {
        setIsExploding(false);
      }, PARTICLE_DURATION);
    }
  }, [isExploding]);

  return (
    <Container>
      {isExploding && (
        <div style={{ position: "fixed", top: 0 }}>
          <ConfettiExplosion
            particleCount={200}
            particleSize={6}
            duration={PARTICLE_DURATION}
            floorHeight={1000}
            colors={theme.explosionColors}
          />
        </div>
      )}
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
        <ListComponent setIsExploding={setIsExploding} />
      </ListContainer>
    </Container>
  );
}

export default App;
