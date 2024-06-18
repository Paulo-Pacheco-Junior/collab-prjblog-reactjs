import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Textarea, Tag, ErrorMsg } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkBtn } from "../../components/LinkBtn";
import api from "../../services/api";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function PostCreate() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  let schema = yup.object({
    title: yup
      .string()
      .required("o campo título é obrigatório")
      .min(3, "o título deve ter no mínimo 3 caracteres")
      .max(100, "o título deve ter no máximo 100 caracteres"),

    textContent: yup
      .string()
      .required("o campo conteúdo é obrigatório")
      .min(30, "o conteúdo deve ter no mínimo 30 caracteres")
      .max(1200, "o conteúdo deve ter no máximo 1.200 caracteres"),
    tag: yup
      .string()
      .required("o campo tag é obrigatório")
      .min(2, "a tag deve ter no mínimo 2 caracteres")
      .max(15, "a tag deve ter no máximo 15 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  async function handleCreatePost({ title, textContent, tag }) {
    const response = await api.post("/posts", {
      user_id: user.id,
      title,
      content: textContent,
      tag_name: tag,
    });
    console.log(response);

    const data = await response.data;
    console.log(data);

    navigate("/home");
  }

  return (
    <Container>
      <div className="wrapper">
        <LinkBtn to="/home" title="Voltar" />

        <div className="form-container">
          <Form onSubmit={handleSubmit(handleCreatePost)}>
            <Input
              type="text"
              placeholder="Seu título ..."
              {...register("title")}
            />
            <ErrorMsg>{errors.title && errors.title?.message}</ErrorMsg>

            <Textarea
              placeholder="O que você está pensando? ..."
              {...register("textContent")}
            />
            <ErrorMsg>
              {errors.textContent && errors.textContent?.message}
            </ErrorMsg>

            <Tag type="text" placeholder="#hashtag ..." {...register("tag")} />
            <ErrorMsg>{errors.tag && errors.tag?.message}</ErrorMsg>

            <Button
              type="submit"
              disabled={isSubmitting}
              title={isSubmitting ? "Carregando..." : "Criar Post"}
            />
          </Form>
        </div>
      </div>
    </Container>
  );
}
