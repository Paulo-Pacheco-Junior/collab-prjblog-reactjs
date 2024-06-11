import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Textarea, Tag } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkBtn } from "../../components/LinkBtn";

export function PostCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [textContent, setTextContent] = useState("");
  const [tag, setTag] = useState("");

  function handleCreatePost(e) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <Container>
      <LinkBtn to="/home" title="Voltar" />
      <div>
        <Form onSubmit={handleCreatePost}>
          <Input
            type="text"
            placeholder="Seu título ..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            placeholder="O que você está pensando? ..."
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
          />
          <Tag
            type="text"
            placeholder="#hashtag ..."
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <Button type="submit" title="Criar Post" />
        </Form>
      </div>
    </Container>
  );
}
