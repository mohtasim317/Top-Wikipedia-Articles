import React, { useState, useEffect } from "react";
import ArticleTile from "./Components/ArticlesTile/ArticleTile";
import ArticlesList from "./Components/ArticlesList/ArticlesList";
import { WikipediaArticles } from "./Types/types";
import "./App.css";
import SearchButton from "./Components/SearchButton/SearchButton";

function App(): JSX.Element {
  const [wikiArticles, setWikiArticles] = useState<WikipediaArticles[]>([]);

  async function fetchArticles() {
    try {
      const fetchedData = await fetch(
        "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10"
      );
      const jsonData = await fetchedData.json();
      const allArticles = jsonData.items[0].articles;

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
          <SearchButton fetchArticles={fetchArticles}></SearchButton>
        </div>
        <ArticlesList>
          {wikiArticles.map(({ article, views, rank }) => {
            return <ArticleTile article={article} views={views} rank={rank} />;
          })}
        </ArticlesList>
      </main>
    </div>
  );
}

export default App;
