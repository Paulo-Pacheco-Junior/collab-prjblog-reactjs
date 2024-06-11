import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import api from "../../services/api";
import { LinkBtn } from "../../components/LinkBtn";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const response = await api.post("/users", {
      name,
      email,
      password,
    });
    const data = await response.data;

    navigate("/");

    return data;
  }

  return (
    <Container>
      <div>
        <h1>DevBlog Web</h1>
        <p>Seu Blog de Desenvolvimento Web</p>

        <h2>Faça o seu Cadastro</h2>

        <Form onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button type="submit" title="Cadastrar" />

          <LinkBtn to="/" title="Já possuo Cadastro" />
        </Form>
      </div>
    </Container>
  );
}
