import { Container, BlogContent, TagsBar, NewPostBtn } from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { NoteItem } from "../../components/NoteItem";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

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
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function handleGetPosts() {
      const response = await api.get("/posts?page=2");
      const { data } = response.data;

      setPosts(data);

      return data;
    }
    handleGetPosts();
  }, []);

  return (
    <Container>
      <Header />
      <BlogContent>
        <NewPostBtn to="/new-post">+ Criar Post</NewPostBtn>
        <TagsBar>
          <ul>
            {tags.map((tag, index) => {
              return <li key={String(index)}>{tag}</li>;
            })}
          </ul>
        </TagsBar>
        <main>
          <Input
            type="text"
            placeholder="Buscar..."
            lightInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
