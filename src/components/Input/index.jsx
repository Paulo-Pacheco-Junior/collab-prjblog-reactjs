import React from "react";
import { Container } from "./styles";

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef(
  ({ lightInput = false, ...props }, ref) => {
    return <Container {...props} $light={lightInput} ref={ref} />;
  }
);
