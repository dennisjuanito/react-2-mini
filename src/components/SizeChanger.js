import React from 'react';

export default function SizeChanger(props) {
  return (
    <select disabled={ (props.allowEdit === "true") ? false : true }  
            onClick={ (e) => props.update(parseInt(e.target.value, 10)) } 
            className="dropDownContainer">
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}