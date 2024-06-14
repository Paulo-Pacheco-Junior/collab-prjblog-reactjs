import { RiUserReceivedLine } from "react-icons/ri";
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
      <Title>DevBlog App</Title>
      <nav>
        <Profile to="/profile">
          <RiUserReceivedLine size={20} />
          <span>{user.name}</span>
        </Profile>
        <Logout to="/" onClick={handleLogout}>
          <RiLogoutCircleRLine />
        </Logout>
      </nav>
    </Container>
  );
}
