import { Outlet } from "react-router";
import Header from "./partials/header";
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
