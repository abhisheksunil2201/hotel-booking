import { createContext, useContext, useReducer } from "react";
import { reducerUtil } from "./reducerUtil";

const HotelsContext = createContext();

export const HotelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerUtil, {
    hotels: [],
    cart: {
      hotel: "",
      noOfGuests: 1,
      checkIn: new Date().toDateString(),
      checkOut: new Date().toDateString(),
      price: 0,
    },
    sort: {
      lowToHigh: false,
      highToLow: false,
      rating: false,
    },
  });

  return (
    <HotelsContext.Provider value={{ state, dispatch }}>
      {children}
    </HotelsContext.Provider>
  );
};

export const UseHotels = () => {
  return useContext(HotelsContext);
};
