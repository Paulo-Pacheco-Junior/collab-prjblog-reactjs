import { Container } from "./styles";

export function LinkBtn({ title, ...props }) {
  return <Container {...props}>{title}</Container>;
}
