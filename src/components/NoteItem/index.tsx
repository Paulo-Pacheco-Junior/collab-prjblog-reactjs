import { Tag } from "../Tag";
import { Container, Title, TagsContainer } from "./styles";

interface User {
  name: string;
}

interface Tags {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  user: User;
  tags: Tags[];
}

interface PostProps {
  post: Post;
}

export function NoteItem({ post }: PostProps) {
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
