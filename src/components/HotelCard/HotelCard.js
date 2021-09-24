import React, { useEffect, useState } from "react";
import "./HotelCard.css";
import { Star } from "@material-ui/icons";
import { useNavigate } from "react-router";

export const HotelCard = ({ hotel }) => {
  const [hotelImg, setHotelImg] = useState([]);
  const [landmarks, setLandmarks] = useState([]);
  const [currentImg, setCurrentImg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let images = JSON.parse(hotel.image);
    setCurrentImg(images[0].url);
    setLandmarks(JSON.parse(hotel.landmark));
    setHotelImg(images);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      onClick={() => navigate(`/hotels/hotel-details/${hotel.id}`)}
      className="hotelCard"
      key={hotel.id}
    >
      <div className="hotelCard__imgContainer">
        <img
          className="hotelCard__currentImg"
          src={currentImg}
          alt="selectedImg"
        />
        <div className="image__thumbs">
          {hotelImg.map((image) => (
            <img
              onClick={() => setCurrentImg(image.url)}
              key={image.id}
              src={image.url}
              alt={hotel.name}
            />
          ))}
        </div>
      </div>
      <div className="hotelCard__details">
        <h3>{hotel.name}</h3>
        <div className="hotelCard__starRating">
          {hotel.rating}
          <Star />
        </div>
        <p style={{ fontSize: "14px", color: "gray", fontWeight: "500" }}>
          {`${hotel.address}`}
        </p>
        {landmarks.map((landmark) => (
          <p className="hotelCard__landamark" key={landmark.label}>
            {landmark.distance} from {landmark.label}
          </p>
        ))}
      </div>
      <div className="hotelCard__price">
        <h4>Rs.{hotel.price}/night</h4>
      </div>
    </div>
  );
};
