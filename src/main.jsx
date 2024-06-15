import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContextProvider>
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
