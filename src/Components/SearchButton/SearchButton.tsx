import React from "react";
import { SearchButtonProps } from "../../Types/types";
import "./SearchButton.css";

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
