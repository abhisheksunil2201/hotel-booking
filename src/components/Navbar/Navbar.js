import { CalendarToday, People } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import logo from "../../assets/ImperialLogo.png";
import "./Navbar.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { UseHotels } from "../../context/HotelsContext";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { dispatch } = UseHotels();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const navigate = useNavigate();
  const handleDateSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    dispatch({ type: "SET_CHECKIN", payload: ranges.selection.startDate });
    setEndDate(ranges.selection.endDate);
    dispatch({ type: "SET_CHECKOUT", payload: ranges.selection.endDate });
  };
  const resetInput = () => {
    setCalendarOpen(false);
  };
  useEffect(() => {
    dispatch({ type: "SET_GUESTS", payload: noOfGuests });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noOfGuests]);
  return (
    <>
      <nav className="navbar">
        <div onClick={() => navigate("/")} className="navbar__logo">
          <img src={logo} alt="Imperial Universe" />
        </div>
        <div className="navbar__search">
          <Button
            onClick={() => setCalendarOpen(!calendarOpen)}
            style={{ color: "white" }}
            startIcon={<CalendarToday />}
          >
            Select Dates
          </Button>
        </div>
      </nav>
      {calendarOpen && (
        <div className="navbar__calendar">
          <div>
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleDateSelect}
            />
          </div>
          <div className="numberOfGuests">
            <h2>Number of Guests</h2>
            <People />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
            />
          </div>
          <div className="navbar__buttons">
            <button onClick={resetInput}>Cancel</button>
            <button onClick={resetInput} className="navbar__searchBtn">
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
};
