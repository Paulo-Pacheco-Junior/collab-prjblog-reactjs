import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, ErrorMsg } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { LinkBtn } from "../../components/LinkBtn";
import api from "../../services/api";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function Profile() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  let schema = yup.object({
    name: yup
      .string()
      .required("o campo nome é obrigatório")
      .min(2, "o nome deve ter no mínimo 2 caracteres")
      .max(26, "o nome deve ter no máximo 26 caracteres"),
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
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
    },

    resolver: yupResolver(schema),
  });

  async function handleUpdateData({ name, email, password }) {
    const response = await api.put(`/users/${user.id}`, {
      name,
      email,
      password,
    });

    const data = await response.data;

    localStorage.setItem("@user", JSON.stringify(data));

    setUser(data);

    navigate("/");

    return data;
  }

  return (
    <Container>
      <div>
        <h1>DevBlog Web</h1>
        <p>Seu Blog de Desenvolvimento Web</p>

        <h2>Seu Perfil</h2>
        <Form onSubmit={handleSubmit(handleUpdateData)}>
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

          <Button
            type="submit"
            disabled={isSubmitting}
            title={isSubmitting ? "Carregando..." : "Atualizar Dados"}
          />

          <LinkBtn to="/" title="voltar" />
        </Form>
      </div>
    </Container>
  );
}
