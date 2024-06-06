import { Container, Profile, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <Title to="/login">Collab DevBlog App</Title>
      <Profile to="/profile">
        <span>Bem Vindo,</span>
        <span>Paulo Pacheco Júnior</span>
      </Profile>
    </Container>
  );
}
