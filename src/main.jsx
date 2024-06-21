import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import { UserContextProvider } from "./contexts/UserContext";
import { PaginateContextProvider } from "./contexts/PaginateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PaginateContextProvider>
        <UserContextProvider>
          <HashRouter>
            <AppRoutes />
          </HashRouter>
        </UserContextProvider>
      </PaginateContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
