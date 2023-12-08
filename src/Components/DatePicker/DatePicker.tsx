import React from "react";
import { DatePickerProps } from "../../Types/types";
import { yesterdaysDate } from "../../Util/util";
import "./DatePicker.css";

function DatePicker({
  dateValue,
  setDateValue,
}: DatePickerProps): React.ReactElement {
  return (
    <div className="DatePicker">
      <label htmlFor="datepicker">Date </label>
      <input
        name="datepicker"
        type="date"
        value={dateValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDateValue(e.target.value)
        }
        max={yesterdaysDate()}
      ></input>
    </div>
  );
}

export default DatePicker;
