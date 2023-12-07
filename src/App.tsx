import React, { useState, useEffect } from "react";
import ArticleTile from "./Components/ArticlesTile/ArticleTile";
import ArticlesList from "./Components/ArticlesList/ArticlesList";
import DatePicker from "./Components/DatePicker/DatePicker";
import SearchButton from "./Components/SearchButton/SearchButton";
import { WikipediaArticles } from "./Types/types";
import { yesterdaysDate } from "./Util/util";
import "./App.css";
import NumResultsDropdown from "./Components/NumResultsDropdown/NumResultsDropdown";

function App(): JSX.Element {
  const [wikiArticles, setWikiArticles] = useState<WikipediaArticles[]>([]);
  const [dateValue, setDateValue] = useState<string>(yesterdaysDate());
  const [numResults, setNumResults] = useState<number>(100);

  async function fetchArticles() {
    try {
      const [year, month, date] = dateValue.split("-");
      const fetchedData = await fetch(
        `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${year}/${month}/${date}`
      );
      const jsonData = await fetchedData.json();
      const allArticles = jsonData.items[0].articles;
      allArticles.length = numResults;

      setWikiArticles(allArticles);
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
          {wikiArticles.map(({ article, views, rank }, i) => {
            return (
              <ArticleTile
                key={i}
                article={article}
                views={views}
                rank={rank}
              />
            );
          })}
        </ArticlesList>
      </main>
    </div>
  );
}

export default App;
