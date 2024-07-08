import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Container, PageIcon } from "./styles";

interface PaginateProps {
  page: number;
  pages: number;
  setPage: (page: number) => void;
}

export function Paginate({ page, pages, setPage }: PaginateProps) {
  return (
    <Container>
      {pages > 1 && (
        <div className="pages-counter">
          Página {page} de {pages}
        </div>
      )}
      {pages > 1 && (
        <div className="pages-container">
          <PageIcon onClick={() => setPage(page - 1)} disabled={page <= 1}>
            <MdNavigateBefore size={15} />
          </PageIcon>
          <PageIcon>{page}</PageIcon>
          <PageIcon onClick={() => setPage(page + 1)} disabled={page === pages}>
            <MdNavigateNext size={15} />
          </PageIcon>
        </div>
      )}
    </Container>
  );
}
