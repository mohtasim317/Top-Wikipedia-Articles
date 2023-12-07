import React, { useState, useEffect } from "react";
import ArticleTile from "./Components/ArticlesTile/ArticleTile";
import ArticlesList from "./Components/ArticlesList/ArticlesList";
import DatePicker from "./Components/DatePicker/DatePicker";
import SearchButton from "./Components/SearchButton/SearchButton";
import NumResultsDropdown from "./Components/NumResultsDropdown/NumResultsDropdown";
import PaginationComponent from "./Components/Pagination/Pagination";
import { WikipediaArticles } from "./Types/types";
import { yesterdaysDate } from "./Util/util";
import "./App.css";

function App(): JSX.Element {
  const [wikiArticles, setWikiArticles] = useState<WikipediaArticles[]>([]);
  const [favWikiArticles, setFavWikiArticles] = useState<WikipediaArticles[]>(
    () => {
      const savedData = localStorage.getItem("favWikiArticles") || "[]";
      const initialValue = JSON.parse(savedData);
      return initialValue || [];
    }
  );
  const [dateValue, setDateValue] = useState<string>(yesterdaysDate());
  const [numResults, setNumResults] = useState<number>(100);
  const [itemOffset, setItemOffset] = useState<number>(0);

  const endOffset = itemOffset + numResults;
  const pageCount = Math.ceil(wikiArticles.length / numResults);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * numResults) % wikiArticles.length;
    setItemOffset(newOffset);
  };

  async function fetchArticles() {
    try {
      const [year, month, date] = dateValue.split("-");
      const fetchedData = await fetch(
        `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${year}/${month}/${date}`
      );
      const jsonData = await fetchedData.json();
      const allArticles = jsonData.items[0].articles;
      setWikiArticles(allArticles);
      setItemOffset(0);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="App">
      <nav></nav>
      <main className="MainSection">
        <h1>Top Wikipedia Articles</h1>
        <div>
          <DatePicker dateValue={dateValue} setDateValue={setDateValue} />
          <NumResultsDropdown
            numResults={numResults}
            setNumResults={setNumResults}
          />
          <SearchButton fetchArticles={fetchArticles}></SearchButton>
        </div>
        <ArticlesList>
          {favWikiArticles.map(({ article, views, rank }, i) => {
            return (
              <ArticleTile
                key={i}
                article={article}
                views={views}
                rank={rank}
                favWikiArticles={favWikiArticles}
                setFavWikiArticles={setFavWikiArticles}
                isFavList={true}
              />
            );
          })}
        </ArticlesList>
        <ArticlesList>
          {wikiArticles
            .slice(itemOffset, endOffset)
            .map(({ article, views, rank }, i) => {
              return (
                <ArticleTile
                  key={i}
                  article={article}
                  views={views}
                  rank={rank}
                  favWikiArticles={favWikiArticles}
                  setFavWikiArticles={setFavWikiArticles}
                  isFavList={false}
                />
              );
            })}
        </ArticlesList>
        <PaginationComponent
          pageCount={pageCount}
          handlePageChange={handlePageClick}
        />
      </main>
    </div>
  );
}

export default App;
