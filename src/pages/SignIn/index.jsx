import { Container, Form, RegisterBtn } from "./styles";
import { Button } from "../../components/Button";
import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";

export function SignIn() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const [credencialToken, setCredencialToken] = useState("");

  async function login() {
    const response = await api.post("/login", {
      email: "theo@gmail.com",
      password: "123456",
    });
    const { user, token } = await response.data;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUserData(user);
    setCredencialToken(token);
    navigate("/home");

    return user;
  }

  return (
    <div className="centered">
      <Container>
        <div>
          <h1>DevBlog Web</h1>
          <p>Seu BLog de Desenvolvimento Web</p>

          <h2>Fazer Login</h2>

          <Form>
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />

            <Button onClick={login} type="button" title="Entrar" />

            <RegisterBtn to="/register">Faça seu Cadastro</RegisterBtn>
          </Form>
        </div>
      </Container>
    </div>
  );
}
