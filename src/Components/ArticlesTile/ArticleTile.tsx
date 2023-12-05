import React from "react";
import { WikipediaArticles } from "../../Types/types";

function ArticleTile({
  article,
  views,
  rank,
}: WikipediaArticles): React.ReactElement {
  return (
    <div>
      <p>{article}</p>
      <p>{views}</p>
      <p>{rank}</p>
    </div>
  );
}

export default ArticleTile;
