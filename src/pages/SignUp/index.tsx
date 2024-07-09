import { useNavigate } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import { Container, Form, NavBtn, ErrorMsg } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import api from "../../services/api";
import { LinkBtn } from "../../components/LinkBtn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ApiResponse {
  id: number;
  name: string;
  email: string;
}

export function SignUp() {
  const navigate = useNavigate();

  let schema = yup.object({
    name: yup
      .string()
      .required("o campo nome é obrigatório")
      .min(2, "o nome deve ter no mínimo 2 caracteres")
      .max(20, "o nome deve ter no máximo 20 caracteres"),
    email: yup
      .string()
      .required("o campo e-mail é obrigatório")
      .email("e-mail inválido"),

    password: yup
      .string()
      .required("o campo senha é obrigatório")
      .min(6, "a senha deve ter no mínimo 6 caracteres"),

    confirmPassword: yup
      .string()
      .required("o campo senha é obrigatório")
      .min(6, "a senha deve ter no mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({ resolver: yupResolver(schema) });

  async function handleRegister({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterData) {
    await api.post<ApiResponse>("/users", {
      name,
      email,
      password,
      password_confirmation: confirmPassword,
    });

    navigate("/login");
  }

  return (
    <Container>
      <div>
        <h1>DevBlog Web</h1>
        <p>Seu Blog de Desenvolvimento Web</p>

        <h2>Faça o seu Cadastro</h2>

        <Form onSubmit={handleSubmit(handleRegister)}>
          <Input type="text" placeholder="Nome" {...register("name")} />
          <ErrorMsg>{errors.name && errors.name?.message}</ErrorMsg>

          <Input type="email" placeholder="E-mail" {...register("email")} />
          <ErrorMsg>{errors.email && errors.email?.message}</ErrorMsg>

          <Input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <ErrorMsg>{errors.password && errors.password?.message}</ErrorMsg>

          <Input
            type="password"
            placeholder="Confirmar Senha"
            {...register("confirmPassword")}
          />
          <ErrorMsg>
            {errors.confirmPassword && errors.confirmPassword?.message}
          </ErrorMsg>

          <Button
            type="submit"
            disabled={isSubmitting}
            title={isSubmitting ? "Carregando..." : "Cadastrar"}
          />
          <ErrorMsg>
            {isSubmitted && "e-mail indisponível e/ou campos inválidos"}
          </ErrorMsg>

          <LinkBtn to="/login" title="Já possuo Cadastro" />

          <hr />

          <NavBtn to="/">
            <RiUserLine size={20} />
            <span>Entrar como Visitante</span>
          </NavBtn>
        </Form>
      </div>
    </Container>
  );
}
