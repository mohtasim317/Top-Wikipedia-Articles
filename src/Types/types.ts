import React from "react";

export interface WikipediaArticles {
  article: string;
  views: number;
  rank: number;
}

export interface ArticlesListProps {
  children: React.ReactNode;
}

export interface SearchButtonProps {
  fetchArticles: () => void;
}

export interface DatePickerProps {
  dateValue: string;
  setDateValue: (string: string) => void;
}
