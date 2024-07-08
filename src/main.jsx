import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import { UserProvider } from "./contexts/UserContext";
import { PaginateProvider } from "./contexts/PaginateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PaginateProvider>
        <UserProvider>
          <HashRouter>
            <AppRoutes />
          </HashRouter>
        </UserProvider>
      </PaginateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
