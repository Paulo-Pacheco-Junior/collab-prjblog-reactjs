import { Container, Post, Scroll } from "./styles";
import { LinkBtn } from "../../components/LinkBtn";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export function PostView() {
  const { user } = useContext(UserContext);

  let { postId } = useParams();

  const [post, setPost] = useState({});

  async function handleDeletePost() {
    if (confirm("Tem certeza que deseja excluir?")) {
      await api.delete(`posts/${postId}`);
    }
  }

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
        <div className="buttons-div">
          <LinkBtn to="/" title="Voltar" />

          {user.id === post.user_id && (
            <LinkBtn to="/" onClick={handleDeletePost} title="Apagar Post" />
          )}
        </div>
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
