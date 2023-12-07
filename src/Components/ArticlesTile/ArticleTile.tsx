import React from "react";
import { ArticleTileProps } from "../../Types/types";
import "../ArticlesTile/ArticleTile.css";

function ArticleTile({
  article,
  views,
  rank,
  favWikiArticles,
  setFavWikiArticles,
  isFavList,
}: ArticleTileProps): React.ReactElement {
  function clickHandler() {
    if (favWikiArticles.some((favArticle) => favArticle.article === article)) {
      setFavWikiArticles((prevState) => {
        return prevState.filter((favArticle) => favArticle.article !== article);
      });
    } else {
      setFavWikiArticles((prevState) => {
        return [
          ...prevState,
          { article, views, rank, favWikiArticles, setFavWikiArticles },
        ];
      });
    }
  }
  return (
    <div className="ArticleTile">
      {!isFavList && <p>{rank}</p>}
      <p>{views}</p>
      <p>{article}</p>
      <button onClick={clickHandler}>Favorite</button>
    </div>
  );
}

export default ArticleTile;
