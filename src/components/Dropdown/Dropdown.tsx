import React from "react";

// These are the acceptted params for this component
export type DropdownProps = {
  options: Array<string>;
};

export const Dropdown = ({ options }): DropdownProps => {
  return (
    <select>
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};
