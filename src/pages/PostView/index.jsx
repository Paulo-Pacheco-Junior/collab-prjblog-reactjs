import { Container, Post, Scroll } from "./styles";
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
      const { post } = response.data;

      setPost(post);
    }
    getPost();
  }, [postId]);

  return (
    <Container>
      <div>
        <LinkBtn to="/home" title="Voltar" />
        <Post>
          <h1>{post.title}</h1>
          <Scroll>
            <p>{post.content}</p>
          </Scroll>
          <footer>
            <span>{post.user?.name}</span>
          </footer>
        </Post>
      </div>
    </Container>
  );
}
