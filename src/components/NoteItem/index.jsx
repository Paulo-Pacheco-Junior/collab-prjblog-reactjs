import { Tag } from "../Tag";
import { Container, Title, TagsContainer } from "./styles";

export function NoteItem({ post }) {
  return (
    <Container>
      <Title to={`/post/${post.id}`}>{post.title}</Title>

      <p>{post.content}</p>

      <footer>
        <p>{post.user.name}</p>

        <TagsContainer>
          {post.tags.map((tag) => {
            return <Tag key={String(tag.id)}>{tag.name}</Tag>;
          })}
        </TagsContainer>
      </footer>
    </Container>
  );
}
