import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Textarea, Tag } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkBtn } from "../../components/LinkBtn";
import api from "../../services/api";
import { UserContext } from "../../contexts/UserContext";

export function PostCreate() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [textContent, setTextContent] = useState("");
  const [tag, setTag] = useState("");

  async function handleCreatePost(e) {
    e.preventDefault();
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
      </div>
    </Container>
  );
}
