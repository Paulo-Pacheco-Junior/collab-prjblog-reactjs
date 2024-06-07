import { Container } from "./styles";

export function Input({ lightInput = false, ...props }) {
  return <Container {...props} $light={lightInput} />;
}
