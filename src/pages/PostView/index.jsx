import { Container, Post } from "./styles";
import { LinkBtn } from "../../components/LinkBtn";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

export function PostView() {
  let { postId } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    async function getPost() {
      const response = await api.get(`/posts/${postId}`);
      const data = response.data;
      setPost(data);
    }
    getPost();
  }, []);

  return (
    <Container>
      <div>
        <LinkBtn to="/home" title="Voltar" />
        <Post>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <footer>
            <span>{post.user?.name}</span>
          </footer>
        </Post>
      </div>
    </Container>
  );
}
