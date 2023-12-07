import React from "react";
import { ArticleTileProps } from "../../Types/types";
import "../ArticlesTile/ArticleTile.css";
import favoritedPin from "../../Images/favoritedPin.svg";
import unFavoritedPin from "../../Images/unFavoritedPin.svg";

function ArticleTile({
  article,
  views,
  rank,
  favWikiArticles,
  setFavWikiArticles,
  showRank,
  isFavorite,
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
      <div className="LeftSide">
        <div className="Rank">{!showRank && <p>{rank}</p>}</div>
        <div className="Article">
          <p>{article}</p>
        </div>
      </div>
      <div className="RightSide">
        <div className="Views">
          <p>{views} views</p>
        </div>
        <div className="FavoriteButtonContainer">
          <button onClick={clickHandler} className="FavoriteButton">
            <img
              src={isFavorite ? favoritedPin : unFavoritedPin}
              alt="favoritedPin"
              className="src"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleTile;
