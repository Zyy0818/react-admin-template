import { useState } from "react";
import { AppShell, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeaderContent from "./components/HeaderContent";

function App() {
  const [isopen, setIsopen] = useState(false);

  return (
    <AppShell
      padding={0}
      navbar={<NavBar isopen={isopen} setIsopen={setIsopen} />}
    >
      {<HeaderContent isOpen={isopen} setIsopen={setIsopen} />}
      <Container size="lg" mt="md" ml={0}>
        <Outlet />
      </Container>
    </AppShell>
  );
}

export default App;
