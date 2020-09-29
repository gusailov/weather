import React, { useContext } from "react";
import { Context } from "./Context";

function Switchlang() {
  const { setLan } = useContext(Context);
 
  return (
    <div className="mr-5 ml-3">
      <select
        onChange={(e) => {
          setLan(e.target.value);
        }}
        className="custom-select"
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
      </select>
    </div>
  );
}

export default Switchlang;
