import { Container, BlogContent, TagsBar } from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { NoteItem } from "../../components/NoteItem";
import { Header } from "../../components/Header";

const tags = [
  "ReactJs",
  "Laravel",
  "Web",
  "Front End",
  "Back End",
  "Full Stack",
  "Collab",
  "PHP",
  "JavaScript",
  "Raspberry",
  "Server",
  "Deploy",
  "Integration",
  "API Restful",
];

export function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function handleGetPosts() {
      const response = await api.get("/posts");
      const data = response.data;
      setPosts(data);
      return data;
    }
    handleGetPosts();
  }, []);

  return (
    <Container>
      <Header />
      <BlogContent>
        <TagsBar>
          <ul>
            {tags.map((tag, index) => {
              return <li key={String(index)}>{tag}</li>;
            })}
          </ul>
        </TagsBar>
        <main>
          <input type="email" placeholder="Buscar..." />
          <ul>
            {posts.map((post) => {
              return <NoteItem key={String(post.id)} post={post} />;
            })}
          </ul>
        </main>
      </BlogContent>
    </Container>
  );
}
