import { Container, Title } from "./styles";

export function NoteItem({ post }) {
  return (
    <Container>
      <Title to="/post/1">{post.title}</Title>
      <p>{post.content}</p>
      <footer>
        <span>{post.user.name}</span>
      </footer>
    </Container>
  );
}
