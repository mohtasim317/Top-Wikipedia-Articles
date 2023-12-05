import React, { useState, useEffect } from "react";
import ArticleTile from "./Components/ArticlesTile/ArticleTile";
import { WikipediaArticles } from "./Types/types";
import "./App.css";

function App(): React.ReactElement {
  const [wikiArticles, setWikiArticles] = useState<WikipediaArticles[]>([]);

  useEffect(() => {
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
    fetchArticles();
  }, []);

  return (
    <div className="App">
      <h1>Top Wikipedia Articles</h1>
      <div>
        {wikiArticles.map(({ article, views, rank }) => {
          return <ArticleTile article={article} views={views} rank={rank} />;
        })}
      </div>
    </div>
  );
}

export default App;
