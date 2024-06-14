import { Container, BlogContent, TagsBar, NewPostBtn } from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { NoteItem } from "../../components/NoteItem";
import { Header } from "../../components/Header";
// import { Input } from "../../components/Input";
import { Paginate } from "../../components/Paginate";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  // const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();

  async function handleFilterTags(tagId) {
    if (tagId === "all") {
      const response = await api.get(`/posts?page=${page}`);
      const { data } = response.data;
      return setPosts(data);
    }

    const filteredTags = tags.filter((tag) => tag.id === tagId);

    setPosts(filteredTags);
  }

  useEffect(() => {
    async function handleGetPosts() {
      const response = await api.get(`/posts?page=${page}`);
      const { data, current_page, last_page } = response.data;

      setPosts(data);
      setTags(data);

      setPage(current_page);
      setPages(last_page);

      return data;
    }
    handleGetPosts();
  }, [page, pages]);

  return (
    <Container>
      <Header />
      <BlogContent>
        <NewPostBtn to="/new-post">+ Criar Post</NewPostBtn>
        {/* <TagsBar>
          <ul>
            <li onClick={() => handleFilterTags("all")}>{"TODOS"}</li>
            {tags.map((tag) => {
              if (tag.tags.length === 0) {
                return null;
              }
              return (
                <li
                  key={String(tag.id)}
                  onClick={() => handleFilterTags(tag.id)}
                >
                  {tag.tags[0]?.name ? <div>{tag.tags[0].name}</div> : null}
                </li>
              );
            })}
          </ul>
        </TagsBar> */}
        <main>
          {/* <Input
            type="text"
            placeholder="Buscar..."
            lightInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> */}
          <ul>
            {posts.map((post) => {
              return <NoteItem key={String(post.id)} post={post} />;
            })}
          </ul>
        </main>
      </BlogContent>
      <Paginate page={page} pages={pages} setPage={setPage} />
    </Container>
  );
}
