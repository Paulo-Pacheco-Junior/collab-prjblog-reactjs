import { useContext, useState } from "react";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { RiAddCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Textarea,
  TagsContainer,
  TagInputWithButton,
  TagInput,
  ErrorMsg,
} from "./styles";
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

  const [newTag, setNewTag] = useState("");
  const [tagsList, setTagsList] = useState("");

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

    // tags: yup
    //   .string()
    //   .required("o campo tag é obrigatório")
    //   .min(3, "a tag deve ter no mínimo 3 caracteres")
    //   .max(15, "a tag deve ter no máximo 15 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({ resolver: yupResolver(schema) });

  function handleCreateTagButtonClick() {
    if (tagsList.length < 3) {
      if (newTag !== "" && newTag.trim() !== "" && newTag.length >= 3) {
        setTagsList((tagsList) => [...tagsList, newTag]);
        setNewTag("");
      }
    }
  }

  function handleCreateTagEnterPress(e) {
    if (tagsList.length < 3) {
      if (e.key === "Enter") {
        e.preventDefault();

        if (newTag !== "" && newTag.trim() !== "" && newTag.length >= 3) {
          setTagsList((tagsList) => [...tagsList, newTag]);
          setNewTag("");
        }
      }
    }
  }

  function handleDeleteTagButtonClick(tagIndex) {
    const filteredTagsList = tagsList.filter(
      (tags, index) => index !== tagIndex
    );
    setTagsList(filteredTagsList);
  }

  async function handleSubmitCreatePost({ title, textContent }) {
    console.log("useForm req", title, textContent);
    console.log("state req tagsList", tagsList);

    if (tagsList.length > 0) {
      const response = await api.post("/posts", {
        user_id: user.id,
        title,
        content: textContent,
        tags: tagsList,
      });
      console.log("response do submit", response);

      const data = await response.data;

      console.log("response data", data);

      navigate("/");
    }
  }

  return (
    <Container>
      <div className="wrapper-form">
        <LinkBtn to="/" title="Voltar" />

        <div className="form-container">
          <Form onSubmit={handleSubmit(handleSubmitCreatePost)}>
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

            <TagsContainer>
              <TagInputWithButton>
                <TagInput
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="#hashtag ..."
                  onKeyDown={handleCreateTagEnterPress}
                  maxLength={10}
                />
                <button type="button" onClick={handleCreateTagButtonClick}>
                  <RiAddCircleLine size={20} />
                </button>
              </TagInputWithButton>

              {tagsList.length > 0 &&
                tagsList.map((tag, index) => {
                  return (
                    <TagInputWithButton key={index}>
                      <TagInput type="text" value={tag} readOnly />
                      <button
                        type="button"
                        onClick={() => handleDeleteTagButtonClick(index)}
                      >
                        <MdOutlineRemoveCircleOutline
                          size={20}
                          style={{
                            color: "#DC2626",
                          }}
                        />
                      </button>
                    </TagInputWithButton>
                  );
                })}
            </TagsContainer>
            <ErrorMsg>
              {isSubmitted &&
                tagsList.length === 0 &&
                "O campo tag é obrigatório"}
            </ErrorMsg>

            <Button
              type="submit"
              disabled={isSubmitting}
              title={isSubmitting ? "Carregando..." : "Criar Post"}
            />
            {user.name === "Visitante" && (
              <ErrorMsg>
                {isSubmitted && "O usuário precisa estar logado"}
              </ErrorMsg>
            )}
          </Form>
        </div>
      </div>
    </Container>
  );
}
