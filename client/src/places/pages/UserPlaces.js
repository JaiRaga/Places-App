import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Marina beach",
    description: "2nd largest beach on the planet",
    imageUrl:
      "https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "Chennai, Tamil nadu, India",
    location: {
      lng: 80.2663439,
      lat: 13.0437224
    },
    creator: "u1"
  },
  {
    id: "p1",
    title: "Marina beach",
    description: "2nd largest beach on the planet",
    imageUrl:
      "https://images.pexels.com/photos/1544880/pexels-photo-1544880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "Chennai, Tamil nadu, India",
    location: {
      lng: 80.2663439,
      lat: 13.0437224
    },
    creator: "u1"
  }
];

function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;
