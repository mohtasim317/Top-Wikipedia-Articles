import React, { Dispatch, SetStateAction } from "react";

export interface WikipediaArticles {
  article: string;
  views: number;
  rank: number;
}

export interface ArticleTileProps {
  article: string;
  views: number;
  rank: number;
  favWikiArticles: WikipediaArticles[];
  setFavWikiArticles: Dispatch<SetStateAction<WikipediaArticles[]>>;
  isFavList: boolean;
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

export interface NumResultsDropdownProps {
  numResults: number;
  setNumResults: (number: number) => void;
}

export interface PaginationComponentProps {
  pageCount: number;
  handlePageChange: any;
}
