import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import GlobalStyle from "./styles/GlobalStyle";
import React from "react";

function App() {
  return (
    //<ErrorBoundary FallbackComponent={Error}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id/*" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    //</ErrorBoundary>
  );
}

export default App;
