import { Container } from "./styles";

export function NoteItem({ post }) {
  return (
    <Container>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <footer>
        <span>{post.user.name}</span>
      </footer>
    </Container>
  );
}
