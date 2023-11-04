// BestPlacesSearch.js
import React from 'react';
import './BestPlaceSearch.css'; 

function BestPlacesSearch() {
  const countries = [
    { name: 'France', imageUrl: 'https://th.bing.com/th/id/OIP.VSVcdJU2AeTFSrTvyWnX6AHaFL?pid=ImgDet&rs=1' },
    { name: 'Italy', imageUrl: 'https://cdn.getyourguide.com/img/tour/6184158f6f973.png/132.webp' },
    { name: 'Japan', imageUrl: 'https://cdn.getyourguide.com/img/tour/ed1036a8849f5055.jpeg/145.jpg' },
    { name: 'Spain', imageUrl: 'https://cdn.getyourguide.com/img/tour/3cf4b5dea392eb55.jpeg/132.webp' },
    { name: 'Greece', imageUrl: 'https://cdn.getyourguide.com/img/tour/d38fa559ee0cfb46.jpeg/132.webp' },
    { name: 'Thailand', imageUrl: 'https://cdn.getyourguide.com/img/tour/07b9d4ce3c6f5f28.jpeg/132.webp' },
    { name: 'Canada', imageUrl: 'https://cdn.getyourguide.com/img/tour/5d5a5e6c9a2bf.jpeg/132.webp' },
    { name: 'Australia', imageUrl: 'https://cdn.getyourguide.com/img/tour/c046d631d45185ef.jpeg/132.webp' },
    { name: 'Brazil', imageUrl: 'https://cdn.getyourguide.com/img/tour/944248a2361fcbdd.jpeg/132.webp' },
    { name: 'India', imageUrl: 'https://cdn.getyourguide.com/tf/assets/static/newsletter-signup/newsletter-background.jpg' },
  ];

  return (
    <div className="best-places-search">
      <h2>Search Best Places in the World</h2>
      <h3> Whether eou are looking for prices for a vacction .we can here to guide about the details you need in and ease your tris in advance</h3>
      <div className="countries-grid">
        {countries.map((country, index) => (
          <div key={index} className="country-card">
            <img src={country.imageUrl} alt={country.name} />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestPlacesSearch;
