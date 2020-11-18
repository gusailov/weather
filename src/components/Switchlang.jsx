import React, { useContext } from "react";
import { Context } from "./Context";

function Switchlang() {
  const { setLan } = useContext(Context);

  return (
    <div >
      <select
        onChange={(e) => {
          setLan(e.target.value);
        }}
        className="custom-select"
      >
        <option value="en">ENG</option>
        <option value="uk">UKR</option>
      </select>
    </div>
  );
}

export default Switchlang;
