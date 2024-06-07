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

  async function register() {
    const response = await api.post("/users", {
      name,
      email,
      password,
    });
    const data = await response.data;
    console.log(data);

    navigate("/home");

    return data;
  }

  return (
    <Container>
      <div>
        <h1>DevBlog Web</h1>
        <p>Seu Blog de Desenvolvimento Web</p>

        <h2>Faça o seu Cadastro</h2>

        <Form>
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
          <Button onClick={register} type="button" title="Cadastrar" />

          <LinkBtn to="/login" title="Já possuo Cadastro" />
        </Form>
      </div>
    </Container>
  );
}
