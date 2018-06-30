import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select disabled={ (props.allowEdit) === "false" }  onClick={ (e) => props.update(e.target.value) } className="dropDownContainer">
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}