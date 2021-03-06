import React, { useContext } from "react";
import { Context } from "./Context";
import { FormControl, Select, MenuItem } from "@material-ui/core";




function Switchlang() {

  const { setLan } = useContext(Context);
  return (
    <div >
      <FormControl size='small' variant="outlined" >
        <Select
          autoWidth={true}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={(e) => {
            setLan(e.target.value);
          }}
          defaultValue={"en"}

        >
          <MenuItem value={"en"}>EN</MenuItem>
          <MenuItem value={"uk"}>UA</MenuItem>
          <MenuItem value={"ru"}>RU</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Switchlang;
