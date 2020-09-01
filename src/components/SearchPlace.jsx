import React, { useState, useEffect } from "react";
import GetCoords from "./GetCoords";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const libraries = ["places"];

export default function SearchPlace(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries,
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <Search pos={props.position} searchPosition={props.searchPosition} />
    </div>
  );
}

const Search = (props) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();
  const [position, setCoords] = useState({});
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const latitude = GetCoords().position.latitude;
  const longitude = GetCoords().position.longitude;
  useEffect(() => {
    setCoords({
      latitude: latitude,
      longitude: longitude,
    });
  }, [latitude, longitude]);

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const position = await getLatLng(results[0]);
      setCoords({
        latitude: position.lat,
        longitude: position.lng,
      });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };
  useEffect(() => {
    if (position.latitude && position.longitude) {
      props.searchPosition(position);
    }
  }, [position]);

  return (
    <Combobox onSelect={handleSelect} aria-labelledby="demo">
      <ComboboxInput value={value} onChange={handleInput} disabled={!ready} />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
