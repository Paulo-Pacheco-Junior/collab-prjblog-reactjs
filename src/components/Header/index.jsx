import { useContext } from "react";
import { Container, Profile, Title } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import api from "../../services/api";
import { Link } from "react-router-dom";

export function Header() {
  const { user, setUser } = useContext(UserContext);

  async function handleLogout() {
    await api.post("/logout");
    setUser({ name: "Visitante" });
  }

  return (
    <Container>
      <Title to="/">Collab DevBlog App</Title>
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
      <Profile to="/profile">
        <span>Bem Vindo,</span>
        <span>{user.name}</span>
      </Profile>
    </Container>
  );
}
