import React, { useState, useEffect } from "react";

function Switchlang(props) {
  const [lang , setLang] = useState('en')
   useEffect(() => {
    props.getLang(lang)
}, [lang]);
  
  return(
  <div>    
    <select onChange={e => {
               setLang(e.target.value)
      }} className="custom-select" >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
    </select>
 
 </div>
 )}

export default Switchlang;
