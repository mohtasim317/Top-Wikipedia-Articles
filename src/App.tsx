import React, { useState, useEffect } from "react";
import "./App.css";

interface WikipediaArticles {
  articles: string;
  views: number;
  rank: number;
}

function App(): React.ReactElement {
  const [wikiArticles, setWikiArticles] = useState<WikipediaArticles[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      const fetchedData = await fetch(
        "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10"
      );
      const jsonData = await fetchedData.json();
      const allArticles = jsonData.items[0].articles;

      setWikiArticles(allArticles);
    }
    fetchArticles();
  }, []);

  return (
    <div className="App">
      <h1>Top Wikipedia Articles</h1>
      <p>{JSON.stringify(wikiArticles)}</p>
    </div>
  );
}

export default App;
