export const reducerUtil = (state, { type, payload }) => {
  switch (type) {
    case "SET_HOTELS":
      return { ...state, hotels: payload };
    case "SET_CHECKIN":
      return { ...state, cart: { ...state.cart, checkIn: payload } };
    case "SET_CHECKOUT":
      return { ...state, cart: { ...state.cart, checkOut: payload } };
    case "SET_GUESTS":
      return { ...state, cart: { ...state.cart, noOfGuests: payload } };
    case "SET_CURRENTHOTEL":
      return { ...state, cart: { ...state.cart, hotel: payload } };
    case "SORT":
      return {
        ...state,
        sort: {
          lowToHigh: false,
          highToLow: false,
          rating: false,
          [payload]: true,
        },
      };
    default:
      return state;
  }
};
