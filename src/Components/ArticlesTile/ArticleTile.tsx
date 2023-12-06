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
      <p>{rank}</p>
      <p>{article}</p>
      <p className="Views">{views}</p>
    </div>
  );
}

export default ArticleTile;
