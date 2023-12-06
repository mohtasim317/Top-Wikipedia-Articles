import React from "react";
import "../SearchButton/SearchButton.css";
import { SearchButtonProps } from "../../Types/types";

function SearchButton({
  fetchArticles,
}: SearchButtonProps): React.ReactElement {
  return (
    <button onClick={(e) => fetchArticles()} className="SearchButton">
      Search
    </button>
  );
}

export default SearchButton;
