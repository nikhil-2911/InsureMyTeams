import React, { createContext } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children, value }) => {
  return <SearchContext.Provider value={value} children={children} />;
};

export default SearchProvider;
export { SearchContext };
