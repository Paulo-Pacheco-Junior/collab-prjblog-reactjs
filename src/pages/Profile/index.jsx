import { Container, Form } from "./styles";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const navigate = useNavigate();

  function handleUpdateData() {
    navigate("/home");
  }

  return (
    <Container>
      <div>
        <h1>DevBlog Web</h1>
        <p>Seu BLog de Desenvolvimento Web</p>

        <h2>Seu Perfil</h2>

        <Form>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha Antiga" />
          <Input type="password" placeholder="Senha Nova" />

          <Button
            type="button"
            title="Atualizar Dados"
            onClick={handleUpdateData}
          />
        </Form>
      </div>
    </Container>
  );
}
