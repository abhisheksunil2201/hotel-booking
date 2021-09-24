import "./App.css";
import { useEffect } from "react";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router";
import { HotelListing } from "./components/HotelListing/HotelListing";
import { HotelDetails } from "./components/HotelMainPage/HotelDetails";
import { API } from "aws-amplify";
import { UseHotels } from "./context/HotelsContext";
import { listHotels } from "./components/CommonFunctions";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  const { dispatch } = UseHotels();

  useEffect(() => {
    async function fetchHotels() {
      const apiData = await API.graphql({ query: listHotels });
      dispatch({ type: "SET_HOTELS", payload: apiData.data.listHotels.items });
    }
    fetchHotels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/hotels/:destination">
          <HotelListing />
        </Route>
        <Route exact path="/hotels/hotel-details/:hotelId">
          <HotelDetails />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
