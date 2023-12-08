import React from "react";
import { getByAltText, render, screen } from "@testing-library/react";
import ArticleTile from "./ArticleTile";

describe("NumResultsDropdown Component", () => {
  const setFavWikiArticles = jest.fn();
  it("should properly display article Title, Views, and Rank information for non favorited articles", () => {
    render(
      <ArticleTile
        article="Wikipedia Article"
        views={100}
        rank={23}
        favWikiArticles={[]}
        setFavWikiArticles={setFavWikiArticles}
        showRank={false}
        isFavorite={true}
      />
    );
    const Title = screen.getByText("Wikipedia Article");
    expect(Title).toBeInTheDocument();
    const Views = screen.getByText("100 views");
    expect(Views).toBeInTheDocument();
    const Rank = screen.getByText(23);
    expect(Rank).toBeInTheDocument();
  });
  it("should show a golden pin next to favorited articles", () => {
    const { getByAltText } = render(
      <ArticleTile
        article="Wikipedia Article"
        views={100}
        rank={23}
        favWikiArticles={[]}
        setFavWikiArticles={setFavWikiArticles}
        showRank={true}
        isFavorite={true}
      />
    );
    getByAltText("Favorited Pin");
  });
  it("should show a clear pin next to non favorited articles", () => {
    const { getByAltText } = render(
      <ArticleTile
        article="Wikipedia Article"
        views={100}
        rank={23}
        favWikiArticles={[]}
        setFavWikiArticles={setFavWikiArticles}
        showRank={true}
        isFavorite={false}
      />
    );
    getByAltText("Non Favorited Pin");
  });

  //click pin
});
