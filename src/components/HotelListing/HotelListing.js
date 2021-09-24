import React, { useState } from "react";
import { useParams } from "react-router";
import { UseHotels } from "../../context/HotelsContext";
import "./HotelListing.css";
import { HotelCard } from "../HotelCard/HotelCard";
import { FormHelperText, NativeSelect } from "@material-ui/core";
import { sortFunction } from "../CommonFunctions";

export const HotelListing = () => {
  const destination = useParams();
  const { state, dispatch } = UseHotels();
  const [sort, setSort] = useState("");
  window.scrollTo(0, 0);

  const handleChange = (e) => {
    setSort(e.target.value);
    dispatch({ type: "SORT", payload: e.target.value });
  };

  const FilterHotels = (hotels) => {
    let filteredProducts = hotels;
    //sort
    const keysForSorting = Object.keys(state.sort);
    const currentSortByType = keysForSorting.filter(
      (type) => state.sort[type] === true
    );
    if (currentSortByType.length !== 0) {
      filteredProducts = sortFunction(filteredProducts, currentSortByType[0]);
    }
    return filteredProducts;
  };

  return (
    <div className="hotels">
      <h3>Hotels</h3>
      <NativeSelect value={sort} onChange={handleChange}>
        <option value="">None</option>
        <option value="lowToHigh">Price - Low to High</option>
        <option value="highToLow">Price - High to Low</option>
        <option value="rating">Ratings</option>
      </NativeSelect>
      <FormHelperText>Sort By</FormHelperText>
      {state.hotels.length > 0 ? (
        FilterHotels(state?.hotels).map((hotel) => {
          if (hotel.location === destination.destination.toLowerCase()) {
            return <HotelCard key={hotel.id} hotel={hotel} />;
          }
          return null;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
