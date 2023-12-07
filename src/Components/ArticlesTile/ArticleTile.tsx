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
        const filtered = prevState.filter(
          (favArticle) => favArticle.article !== article
        );
        localStorage.setItem("favWikiArticles", JSON.stringify(filtered));
        return filtered;
      });
    } else {
      setFavWikiArticles((prevState) => {
        const updatedState = [
          ...prevState,
          { article, views, rank, favWikiArticles, setFavWikiArticles },
        ];
        localStorage.setItem("favWikiArticles", JSON.stringify(updatedState));
        return updatedState;
      });
    }
  }

  return (
    <div className="ArticleTile">
      {!isFavList && <p>{rank}</p>}
      <p>{article}</p>
      <p>{views}</p>
      <button onClick={clickHandler}>Favorite</button>
    </div>
  );
}

export default ArticleTile;
