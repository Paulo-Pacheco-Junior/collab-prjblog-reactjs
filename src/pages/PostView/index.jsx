import { Container, Post } from "./styles";
import { LinkBtn } from "../../components/LinkBtn";

const post = {
  title: "O que aprendi desenvolvendo um Blog em equipe?",
  content:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatum fuga fugit quisquam enim laudantium cumque aperiam eum nisi laboriosam earum, ducimus porro, quam ipsa tempore vitae harum aliquid. Sunt, iure. Cum quam assumenda sapiente? Itaque culpa atque modi magni sit in commodi minima maiores officia, corporis molestiae tempora pariatur dolorum voluptate vitae! Minus optio eligendi illo beatae officia sed tempora distinctio voluptates pariatur! Ut qui sit dolorem quidem iusto porro suscipit illo corporis, consequatur voluptate ab et dicta labore. Dignissimos aut molestiae accusamus modi at repellendus beatae soluta et atque tenetur! Eaque beatae porro voluptate nobis laboriosam nam perspiciatis.",
  user: "Dev Full Stack",
};

export function PostView() {
  return (
    <Container>
      <div>
        <LinkBtn to="/home" title="Voltar" />
        <Post>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <footer>
            <span>{post.user}</span>
          </footer>
        </Post>
      </div>
    </Container>
  );
}
