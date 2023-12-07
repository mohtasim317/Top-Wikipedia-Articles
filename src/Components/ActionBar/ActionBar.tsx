import React from "react";
import "../ActionBar/ActionBar.css";
import { ActionBarProps } from "../../Types/types";
import DatePicker from "../DatePicker/DatePicker";
import NumResultsDropdown from "../NumResultsDropdown/NumResultsDropdown";
import SearchButton from "../SearchButton/SearchButton";
// import "./"

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
        <div>
          <DatePicker dateValue={dateValue} setDateValue={setDateValue} />
        </div>
        <div>
          <NumResultsDropdown
            numResults={numResults}
            setNumResults={setNumResults}
          />
        </div>
      </div>
      <div>
        <SearchButton fetchArticles={fetchArticles}></SearchButton>
      </div>
    </div>
  );
}

export default ActionBar;
