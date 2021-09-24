import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { UseHotels } from "../../context/HotelsContext";
import "./Checkout.css";

export const Checkout = () => {
  const { state } = UseHotels();
  const navigate = useNavigate();
  const diff =
    new Date(state.cart.checkOut).getTime() -
    new Date(state.cart.checkIn).getTime();
  const days =
    diff / (1000 * 60 * 60 * 24) === 0 ? 1 : diff / (1000 * 60 * 60 * 24);
  const rooms =
    Math.floor(state.cart.noOfGuests / 2) < 1
      ? 1
      : Math.floor(state.cart.noOfGuests / 2);
  const totalAmount = Math.floor(rooms * days * state.cart.hotel.price);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (state.cart.checkIn === "" || state.cart.checkOut === "") {
      navigate("/");
    }
    if (isNaN(totalAmount)) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="checkout__container">
      <div className="checkout">
        <div className="checkout__details">
          <h3>Novotel Mumbai Juhu Beach Hotel</h3>
          <div className="checkout__date">
            <p>{new Date(state.cart.checkIn).toDateString()}</p>
            <small className="smallHide">-------{days} nights-------</small>
            <small className="smallShow">--{days} nights--</small>
            <p>{new Date(state.cart.checkOut).toDateString()}</p>
          </div>
          <div className="checkout__room">
            <h3>Options</h3>
            <p className="green-text">Room With Free Cancellation</p>
            <p>Free Cancellation only till before 5 days from actual stay</p>
          </div>
        </div>
        <div className="checkout__price">
          <h4>PRICE BREAK-UP</h4>
          <div>
            <p>
              {rooms} room * {days} nights
            </p>
            <p>Rs.{totalAmount}</p>
          </div>
          <div>
            <p>Hotel Taxes</p>
            <p>Rs.{Math.floor((totalAmount * 18) / 100)}</p>
          </div>
          <div className="green-text totalAmtCheckout">
            <p>Total Amount to be paid</p>
            <p>
              Rs.
              {Math.floor(totalAmount + Math.floor((totalAmount * 18) / 100))}
            </p>
          </div>
          <button className="payNow">PAY NOW</button>
        </div>
      </div>
      <div className="checkout__guestDetails">
        <h3>GUEST DETAILS</h3>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="email" />
        <h4>Any other request?</h4>
        <textarea placeholder="Enter your special request"></textarea>
      </div>
    </div>
  );
};
