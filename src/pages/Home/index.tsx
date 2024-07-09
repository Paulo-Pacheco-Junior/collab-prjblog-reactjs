import { Container, BlogContent, /*TagsBar,*/ NewPostBtn } from "./styles";
import api from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { NoteItem } from "../../components/NoteItem";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Paginate } from "../../components/Paginate";
import { PaginateContext } from "../../contexts/PaginateContext";

export function Home() {
  const { page, setPage } = useContext(PaginateContext);

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const [pages, setPages] = useState(1);

  // const [tags, setTags] = useState([]);

  // async function handleFilterTags(tagId) {
  //   if (tagId === "all") {
  //     const response = await api.get(`/posts?page=${page}`);
  //     const { data } = response.data;
  //     return setPosts(data);
  //   }

  //   const filteredTags = tags.filter((tag) => tag.id === tagId);

  //   setPosts(filteredTags);
  // }

  useEffect(() => {
    async function handleGetPosts() {
      const response = await api.get(`/posts?search=${search}&page=${page}`);
      const { data, current_page, last_page } = await response.data;

      if (search === "" || search.trim() === "") {
        setPosts(data);
        setPage(current_page);
        setPages(last_page);
      } else {
        setPosts(data);
        setPage(1);
        setPages(1);
      }
    }
    handleGetPosts();
  }, [search, page]);

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
          <Input
            type="text"
            placeholder="Buscar por título ou autor..."
            lightInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul>
            {posts.map((post) => {
              return <NoteItem key={String(post.id)} post={post} />;
            })}

            {posts.length === 0 && (
              <p>Nenhum resultado encontrado pela busca.</p>
            )}
          </ul>
        </main>
      </BlogContent>
      <Paginate page={page} pages={pages} setPage={setPage} />
    </Container>
  );
}
