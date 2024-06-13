import { Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { useContext, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { LinkBtn } from "../../components/LinkBtn";
import { UserContext } from "../../contexts/UserContext";

export function SignIn() {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credencialToken, setCredencialToken] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const response = await api.post("/login", {
      email,
      password,
    });
    const { user, token } = await response.data;

    localStorage.setItem("@user", JSON.stringify(user));

    localStorage.setItem(
      "@token",
      JSON.stringify(
        (api.defaults.headers.common["Authorization"] = `Bearer ${token}`)
      )
    );

    setUser(user);
    setCredencialToken(token);
    navigate("/home");

    return user;
  }

  return (
    <div className="centered">
      <Container>
        <div>
          <h1>DevBlog Web</h1>
          <p>Seu Blog de Desenvolvimento Web</p>
          <h2>Fazer Login</h2>
          <Form onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" title="Entrar" />

            <LinkBtn to="/register" title="Faça seu Cadastro" />
          </Form>
        </div>
      </Container>
    </div>
  );
}
