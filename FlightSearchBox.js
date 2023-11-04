// FlightSearchBox.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLeavingFrom, setGoingTo } from './flightSearchSlice';
import { setCheckIn, setCheckOut } from './flightSearchSlice';

function FlightSearchBox() {
  const dispatch = useDispatch();
  const { leavingFrom, goingTo } = useSelector((state) => state.flightSearch);
  const{checkIn, checkOut} = useSelector((state)=> state.flightSearch)

  const handleLeavingFromChange = (e) => {
    dispatch(setLeavingFrom(e.target.value));
  };

  const handleGoingToChange = (e) => {
    dispatch(setGoingTo(e.target.value));
  };
  const handleCheckIN=(e) => {
    dispatch(setCheckIn(e.target.value))
  };
  const handleCheckOut=(e)=>{
    dispatch(setCheckOut(e.target.value))
  }

  return (
    <div className="flight-search-box">
          <div className='carRental'>
       <div> flight</div> 
       <div>car Rent</div> 
       <div>Hotel</div> 
       </div>
      <select
        className="country-dropdown"
        value={leavingFrom}
        onChange={handleLeavingFromChange}
      >
       <option value="leavingFrom">Leaving From</option>
        <option value="new-york">New York</option>
        <option value="paris">Paris</option>
        <option value="tokyo">Tokyo</option>
      </select>
      <select
        className="country-dropdown"
        value={goingTo}
        onChange={handleGoingToChange}
      >
       
       <option value="goingTo">Going To</option>
        <option value="london">London</option>
        <option value="sydney">Sydney</option>
        <option value="beijing">Beijing</option>
      </select>
      <input type="date" className="date-input" placeholder="Check-In"
      value={checkIn}
      onChange={handleCheckIN}
      />
      <input type="date" className="date-input" placeholder="Check-Out" 
      value={checkOut}
      onChange={handleCheckOut}
      />
      <button className="search-button">Search</button>
    </div>
  );
}

export default FlightSearchBox;
