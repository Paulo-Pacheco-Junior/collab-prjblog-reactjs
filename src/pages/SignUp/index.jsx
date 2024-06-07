import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { useNavigate } from "react-router-dom";
// import api from "../../services/api";

export function SignUp() {
  const navigate = useNavigate();

  // Está funcionando a Integração com a API
  // Caso queira cadastrar novo usuário descomente e troque para um nome e email novos.
  async function register() {
    // const response = await api.post("/users", {
    //   name: "Theo",
    //   email: "theo@gmail.com",
    //   password: "123456",
    // });
    // const data = await response.data;
    // console.log(data);

    navigate("/home");

    // return data;
  }

  return (
    <Container>
      <div>
        <h1>DevBlog Web</h1>
        <p>Seu BLog de Desenvolvimento Web</p>

        <h2>Faça o seu Cadastro</h2>

        <Form>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />

          <Button onClick={register} type="button" title="Cadastrar" />
        </Form>
      </div>
    </Container>
  );
}
