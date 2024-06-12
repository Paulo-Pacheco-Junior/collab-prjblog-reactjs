import {
  Container,
  BlogContent,
  TagsBar,
  NewPostBtn,
  Paginate,
  PageIcon,
  PaginateContainer,
} from "./styles";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { NoteItem } from "../../components/NoteItem";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();

  useEffect(() => {
    async function handleGetPosts() {
      const response = await api.get(`/posts?page=${page}`);
      const { data, current_page, last_page } = response.data;

      setPosts(data);

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
        <TagsBar>
          <ul>
            {posts.map((post) => {
              if (post.tags.length === 0) {
                return null;
              }
              return (
                <li key={String(post.id)}>
                  {post.tags[0]?.name ? <div>{post.tags[0].name}</div> : null}
                </li>
              );
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
      <PaginateContainer>
        <div className="pages">
          Página {page} de {pages}
        </div>
        <Paginate>
          <PageIcon
            onClick={() => setPage((page) => page - 1)}
            disabled={page <= 1}
          >
            <MdNavigateBefore size={20} />
          </PageIcon>
          <PageIcon>{page}</PageIcon>
          <PageIcon
            onClick={() => setPage((page) => page + 1)}
            disabled={page === pages}
          >
            <MdNavigateNext size={20} />
          </PageIcon>
        </Paginate>
      </PaginateContainer>
    </Container>
  );
}
