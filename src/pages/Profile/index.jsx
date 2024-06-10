import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { LinkBtn } from "../../components/LinkBtn";
import api from "../../services/api";
import { UserContext } from "../../contexts/UserContext";

export function Profile() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  async function handleUpdateData() {
    const response = await api.put("/users/:id", {
      name,
      email,
      password,
    });
    const data = response.data;

    navigate("/home");

    return data;
  }

  return (
    <Container>
      <div>
        <h1>DevBlog Web</h1>
        <p>Seu Blog de Desenvolvimento Web</p>

        <h2>Seu Perfil</h2>
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

          <Button
            type="button"
            title="Atualizar Dados"
            onClick={handleUpdateData}
          />

          <LinkBtn to="/home" title="voltar" />
        </Form>
      </div>
    </Container>
  );
}
