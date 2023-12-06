import React from "react";
import "../DatePicker/DatePicker.css";
import { DatePickerProps } from "../../Types/types";
import { todaysDate } from "../../Util/util";

function DatePicker({
  dateValue,
  setDateValue,
}: DatePickerProps): React.ReactElement {
  return (
    <input
      type="date"
      value={dateValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setDateValue(e.target.value)
      }
      max={todaysDate()}
    ></input>
  );
}

export default DatePicker;
