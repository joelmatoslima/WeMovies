import { Outlet } from "react-router";
import Header from "./header";
import { Container } from "./styles";

export default function MainLayout() {
  return (
    <Container>
      <Header />

      <main>
        <Outlet />
      </main>
    </Container>
  );
}
