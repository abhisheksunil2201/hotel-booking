import React from "react";
import { useNavigate } from "react-router";
import "./Home.css";

export const Home = () => {
  const destinations = [
    {
      dest: "Goa",
      img: "https://promos.makemytrip.com/store/GoaDT.JPG",
      desc: "Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas",
    },
    {
      dest: "Delhi",
      img: "https://promos.makemytrip.com/store/DelhiDT.JPG",
      desc: "Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport",
    },
    {
      dest: "Bangalore",
      img: "https://promos.makemytrip.com/store/BangaloreDT.JPG",
      desc: "Hotels, Budget Hotels, Resorts,Near Airport, Guhantara Resort",
    },
    {
      dest: "Jaipur",
      img: "https://promos.makemytrip.com/store/JaipurDT.JPG",
      desc: "Hotels, Resorts, Budget Hotels, Best Hotels, Near Railway Station",
    },
    {
      dest: "Manali",
      img: "https://promos.makemytrip.com/images/50x50-Manali-23052019.png",
      desc: "Hotels, Resorts, Budget Hotels, Best Hotels, Near Mall Road",
    },
    {
      dest: "Mumbai",
      img: "https://promos.makemytrip.com/store/MumbaiDT.JPG",
      desc: "Hotels, Budget Hotels, Resorts, Near Mumbai Airport",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="home">
      <h2>Discover by Themes and Brands</h2>
      <div className="home__explore">
        <div className="home__imgContainer">
          <img
            src="https://promos.makemytrip.com/Hotels_product/Luxe/brands.png"
            alt="Hotel"
          />
          <p>Explore Luxury Stays based on your interest</p>
        </div>
        <div className="home__imgContainer">
          <img
            src="https://promos.makemytrip.com/Hotels_product/Luxe/themes.png"
            alt="Hotel"
          />
          <p>Taj, Marriott, Oberoi, Hyatt & More</p>
        </div>
      </div>
      <h2>Discover by Locations</h2>
      <div className="home__destinations">
        {destinations.map((item) => (
          <div
            onClick={() => navigate(`/hotels/${item.dest}`)}
            key={item.dest}
            className="home__destination"
          >
            <img src={item.img} alt={item.dest} />
            <div className="destination__details">
              <h3>{item.dest}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
