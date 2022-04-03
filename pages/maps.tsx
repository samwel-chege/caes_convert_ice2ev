import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const Maps = () => {
  return (
    <iframe
      className="mx-auto"
      src="https://www.google.com/maps/embed/v1/place?q=wendani&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      width="900"
      height="450"
      style={{ border: 0 }}
      aria-hidden="false"
    ></iframe>
  );
}

export default Maps