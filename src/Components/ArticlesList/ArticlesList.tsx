import React from "react";
import { ArticlesListProps } from "../../Types/types";

function ArticlesList({ children }: ArticlesListProps): React.ReactElement {
  return <div className="ArticlesList">{children}</div>;
}

export default ArticlesList;
