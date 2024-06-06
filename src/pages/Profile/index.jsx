import { Container, Form } from "./styles";
import { useNavigate } from "react-router-dom";

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
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha Antiga" />
          <input type="password" placeholder="Senha Nova" />

          <button type="button" onClick={handleUpdateData}>
            Atualizar Dados
          </button>
        </Form>
      </div>
    </Container>
  );
}
