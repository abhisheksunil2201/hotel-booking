import { Star } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { UseHotels } from "../../context/HotelsContext";
import { getHotelById } from "../CommonFunctions";
import "./HotelDetails.css";

export const HotelDetails = () => {
  const [hotelDetails, setHotelDetails] = useState({});
  const hotelId = useParams();
  const { state, dispatch } = UseHotels();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.hotels.length === 0) {
      navigate("/");
    }
    setHotelDetails(getHotelById(state.hotels, hotelId.hotelId));
    dispatch({
      type: "SET_CURRENTHOTEL",
      payload: getHotelById(state.hotels, hotelId.hotelId),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="hotelDetails">
      <h2>{hotelDetails?.name}</h2>
      <p style={{ display: "flex", alignItems: "center" }}>
        {hotelDetails.rating}
        <Star style={{ fontSize: "1.1rem", marginLeft: "0.3rem" }} />
      </p>
      <p>{hotelDetails?.address}</p>
      <div className="hotelDetails__images">
        {hotelDetails.image &&
          JSON.parse(hotelDetails?.image).map((img) => (
            <img key={img.id} src={img.url} alt="hotelImg" />
          ))}
      </div>
      <div className="hotelDetails__para">
        <h4>Property Highlights</h4>
        <p>150+ guests like you rated their stay Very Good</p>
        <p>Relax with therapeutic treatments at Salon & Spa</p>
      </div>
      <div className="hotelDetails__para">
        <h4>About {hotelDetails.name}</h4>
        <p>
          {hotelDetails.name} is a star-studded property, offering memorable
          holidays with state-of-the-art services and luxurious accommodations.
        </p>
      </div>
      <div className="hotelDetails__price">
        <div className="hotelDetailsPrice__options">
          <h3>Options</h3>
          <p className="green-text">Room With Free Cancellation</p>
          <p>Free Cancellation only till before 5 days from actual stay</p>
        </div>
        <div className="hotelDetailsPrice__price">
          <h3>Price</h3>
          <p>Per Night</p>
          <h4>{`Rs.${hotelDetails.price}`}</h4>
          <h4>{`+ Rs.${(hotelDetails.price * 18) / 100} taxes & fees`}</h4>
          <button onClick={() => navigate("/checkout")}>SELECT ROOM</button>
        </div>
      </div>
    </div>
  );
};
