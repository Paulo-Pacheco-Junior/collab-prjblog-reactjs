import { Tag } from "../Tag";
import { Container, Title } from "./styles";

export function NoteItem({ post }) {
  return (
    <Container>
      <Title to="/post/1">{post.title}</Title>
      <p>{post.content}</p>
      <footer>
        <p>{post.user.name}</p>
        {post.tags[0] ? <Tag>{post.tags[0].name}</Tag> : null}
      </footer>
    </Container>
  );
}
