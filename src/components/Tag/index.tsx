import { Container } from "./styles";

interface ChildrenProps {
  children: string;
}

export function Tag({ children }: ChildrenProps) {
  return <Container>{children}</Container>;
}
