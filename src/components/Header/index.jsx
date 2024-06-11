import { RiLogoutCircleRLine } from "react-icons/ri";
import { useContext } from "react";
import { Container, Profile, Title, Logout } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import api from "../../services/api";

export function Header() {
  const { user, setUser } = useContext(UserContext);

  async function handleLogout() {
    await api.post("/logout");
    setUser({ name: "Visitante" });
  }

  return (
    <Container>
      <Title to="/">Collab DevBlog App</Title>
      <div>
        <Profile to="/profile">
          <span>Bem Vindo,</span>
          <span>{user.name}</span>
        </Profile>
        <Logout to="/" onClick={handleLogout}>
          <RiLogoutCircleRLine />
        </Logout>
      </div>
    </Container>
  );
}
