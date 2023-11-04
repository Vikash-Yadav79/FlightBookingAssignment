// FlightBody.js
import React from 'react';
import './FlightBody.css'; // You can create a CSS file for styling

function FlightBody() {
  return (
    <div className="flight-body">
      <div className="flight-image">
        <img
          src="https://th.bing.com/th/id/R.fb81365b797ac55a6c31a905ada7c372?rik=vc7PriLySSkh9A&riu=http%3a%2f%2fdreamicus.com%2fdata%2fflight%2fflight-06.jpg&ehk=WkKi4iwZHA89GTc7Q1ir26ROubQsZuw4gyAefo6oCp8%3d&risl=&pid=ImgRaw&r=0"
          alt="Flight to Switzerland"
        />
      </div>
      <div className="flight-description">
        <h2>Amazing Flight to Switzerland</h2>
        <p>Ritten above the Swiss Alps and enjoy breathtaking views of the majestic mountains.</p>
      </div>
    </div>
  );
}

export default FlightBody;
