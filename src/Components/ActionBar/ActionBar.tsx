import React from "react";
import { ActionBarProps } from "../../Types/types";
import DatePicker from "../DatePicker/DatePicker";
import NumResultsDropdown from "../NumResultsDropdown/NumResultsDropdown";
import SearchButton from "../SearchButton/SearchButton";
import calendar from "../../Images/calendar.svg";
import results from "../../Images/results.svg";
import "./ActionBar.css";

function ActionBar({
  dateValue,
  setDateValue,
  numResults,
  setNumResults,
  fetchArticles,
}: ActionBarProps): React.ReactElement {
  return (
    <div className="ActionBar">
      <div className="ActionBarLeft">
        <div className="DatePicker">
          <img src={calendar} alt="calendar icon" className="src" />
          <DatePicker dateValue={dateValue} setDateValue={setDateValue} />
        </div>
        <div className="Dropdown">
          <img src={results} alt="results icon" className="src" />
          <NumResultsDropdown
            numResults={numResults}
            setNumResults={setNumResults}
          />
        </div>
      </div>
      <div className="ActionBarRight">
        <SearchButton fetchArticles={fetchArticles}></SearchButton>
      </div>
    </div>
  );
}

export default ActionBar;
