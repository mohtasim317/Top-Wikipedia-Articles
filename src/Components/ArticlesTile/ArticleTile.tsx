import React from "react";
import { WikipediaArticles } from "../../Types/types";
import "../ArticlesTile/ArticleTile.css";

function ArticleTile({
  article,
  views,
  rank,
}: WikipediaArticles): React.ReactElement {
  return (
    <div className="ArticleTile">
      <p>{article}</p>
      <p>{views}</p>
      <p>{rank}</p>
    </div>
  );
}

export default ArticleTile;
