import { RiUserLine } from "react-icons/ri";
import { RiUserReceivedLine } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiLoginBoxLine } from "react-icons/ri";
import { useContext } from "react";
import { Container, Title, NavBtn } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import api from "../../services/api";

export function Header() {
  const { user, setUser } = useContext(UserContext);

  async function handleLogout() {
    setUser({ name: "Visitante" });

    localStorage.clear();

    await api.post("/logout");
  }

  return (
    <Container>
      <Title>DevBlog App</Title>
      <nav>
        {user.name === "Visitante" ? (
          <NavBtn to="/login">
            <RiUserLine size={20} />
            <span>Visitante</span>
          </NavBtn>
        ) : (
          <NavBtn to="/profile">
            <RiUserReceivedLine size={20} />
            <span>{user.name}</span>
          </NavBtn>
        )}

        {user.name === "Visitante" ? (
          <NavBtn to="/login">
            <span>Entrar</span>
            <RiLoginBoxLine size={20} />
          </NavBtn>
        ) : (
          <NavBtn to="/login" onClick={handleLogout}>
            <span>Sair</span>
            <RiLogoutCircleRLine size={20} />
          </NavBtn>
        )}
      </nav>
    </Container>
  );
}
