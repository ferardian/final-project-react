import React from 'react';

// function untuk menampilkan peta

const Map = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Map Location</h1>
        <h4>
          <a target="_blank"
            rel="noopener noreferrer"
            href={"https://www.google.com/maps/search/" + encodeURIComponent(props.gLocation)}
            onClick="alert('Are you sure you want to leave?')">
            'Klik' Ke GoogleMap</a>
        </h4>
    </div>
  )
};

Map.defaultProps = {
  gLocation: "Location"
};

export default Map;

