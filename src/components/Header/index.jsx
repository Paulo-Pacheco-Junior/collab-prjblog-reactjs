import { RiUserReceivedLine } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useContext } from "react";
import { Container, Title, NavBtn } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import api from "../../services/api";

export function Header() {
  const { user, setUser } = useContext(UserContext);

  async function handleLogout() {
    setUser({ name: "Visitante" });
    await api.post("/logout");
  }

  return (
    <Container>
      <Title>DevBlog App</Title>
      <nav>
        <NavBtn to="/profile">
          <RiUserReceivedLine size={20} />
          <span>{user.name}</span>
        </NavBtn>
        <NavBtn to="/" onClick={handleLogout}>
          <span>Logout</span>
          <RiLogoutCircleRLine size={20} />
        </NavBtn>
      </nav>
    </Container>
  );
}
