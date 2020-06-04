import React from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const { Component } = require("react");

class Search extends Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;
    this.onLoad = this.onLoad.bind(this);
    this.onPlaceChanged = this.onPlaceChanged.bind(this);
  }

  onLoad(autocomplete) {
    console.log("autocomplete: ", autocomplete);
    this.autocomplete = autocomplete;
  }

  onPlaceChanged() {
    if (this.autocomplete !== null) {
      console.log(this.autocomplete.getPlace().geometry.location.lat());
      console.log(this.autocomplete.getPlace().geometry.location.lng());
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  }

  render() {
    return (
      <LoadScript
        libraries={["places"]}
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      >
        <Autocomplete onLoad={this.onLoad} onPlaceChanged={this.onPlaceChanged}>
          <div className="container form-group">
            <input
              className="form-control"
              type="text"
              placeholder="enter location"
            />
          </div>
        </Autocomplete>
      </LoadScript>
    );
  }
}

export default Search;
