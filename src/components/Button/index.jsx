import { Container } from "./styles";

export function Button({ title, ...props }) {
  return <Container {...props}>{title}</Container>;
}
