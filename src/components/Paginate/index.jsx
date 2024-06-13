import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Container, PageIcon } from "./styles";

export function Paginate({ page, pages, setPage }) {
  return (
    <Container>
      <div className="pages-counter">
        Página {page} de {pages}
      </div>
      <div className="pages-container">
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
      </div>
    </Container>
  );
}
