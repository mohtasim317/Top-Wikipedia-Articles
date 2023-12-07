import React from "react";
import { NumResultsDropdownProps } from "../../Types/types";
import "../NumResultsDropdown/NumResultsDropdown.css";

function NumResultsDropdown({
  numResults,
  setNumResults,
}: NumResultsDropdownProps): React.ReactElement {
  return (
    <select
      value={numResults}
      onChange={(e) => setNumResults(Number(e.target.value))}
    >
      <option>25</option>
      <option>50</option>
      <option>75</option>
      <option>100</option>
      <option>200</option>
    </select>
  );
}

export default NumResultsDropdown;
