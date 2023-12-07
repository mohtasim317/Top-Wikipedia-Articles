import React from "react";
import "../DatePicker/DatePicker.css";
import { DatePickerProps } from "../../Types/types";
import { yesterdaysDate } from "../../Util/util";

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
      max={yesterdaysDate()}
    ></input>
  );
}

export default DatePicker;
