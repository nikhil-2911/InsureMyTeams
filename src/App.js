import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import AppBar from "./component/AppBar";
import Posts from "./component/Posts";
import SearchProvider from "./context/searchContext";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <SearchProvider value={search}>
        <AppBar fillSearch={fillSearch} />
        <Posts />
      </SearchProvider>
    </>
  );
};

export default App;
