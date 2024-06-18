import api from "../../services/api";
import { Container, Form, ErrorMsg } from "./styles";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { LinkBtn } from "../../components/LinkBtn";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function SignIn() {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  let schema = yup.object({
    email: yup
      .string()
      .required("o campo e-mail é obrigatório")
      .email("e-mail inválido"),

    password: yup
      .string()
      .required("o campo senha é obrigatório")
      .min(6, "a senha deve ter no mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({ resolver: yupResolver(schema) });

  async function handleLogin({ email, password }) {
    const response = await api.post("/login", {
      email,
      password,
    });

    const { user, token } = await response.data;

    localStorage.setItem("@user", JSON.stringify(user));
    localStorage.setItem("@token", JSON.stringify(token));

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(user);

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
          <Form onSubmit={handleSubmit(handleLogin)}>
            <Input type="text" placeholder="E-mail" {...register("email")} />
            <ErrorMsg>{errors.email && errors.email?.message}</ErrorMsg>

            <Input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <ErrorMsg>{errors.password && errors.password?.message}</ErrorMsg>

            <Button
              type="submit"
              disabled={isSubmitting}
              title={isSubmitting ? "Carregando..." : "Entrar"}
            />
            <ErrorMsg>{isSubmitted && "usuário e/ou senha inválidos"}</ErrorMsg>

            <LinkBtn to="/register" title="Faça seu Cadastro" />
          </Form>
        </div>
      </Container>
    </div>
  );
}
