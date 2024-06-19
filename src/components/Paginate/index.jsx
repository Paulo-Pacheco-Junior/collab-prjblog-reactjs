import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Container, PageIcon } from "./styles";

export function Paginate({ page, pages, setPage }) {
  return (
    <Container>
      {pages > 1 && (
        <div className="pages-counter">
          Página {page} de {pages}
        </div>
      )}
      {pages > 1 && (
        <div className="pages-container">
          <PageIcon
            onClick={() => setPage((page) => page - 1)}
            disabled={page <= 1}
          >
            <MdNavigateBefore size={15} />
          </PageIcon>
          <PageIcon>{page}</PageIcon>
          <PageIcon
            className="pagination-icon"
            onClick={() => setPage((page) => page + 1)}
            disabled={page === pages}
          >
            <MdNavigateNext size={15} />
          </PageIcon>
        </div>
      )}
    </Container>
  );
}
