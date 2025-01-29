import React from "react";
import { Subtitle } from "../../components/Subtitle/Subtitle.tsx";
import { Dropdown, DropdownProps } from "../../components/Dropdown/Dropdown.tsx";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage.tsx";

// These are the acceptted params for this container
type QuestionProps = {
  text: string;
  options: DropdownProps;
};

export const Question = ({ text, options }): QuestionProps => {
    
  return (
    <div>
      <Subtitle children={text} />
      {
        //check if options is an arrray and that the array isnt empty, if not, show the dropdown else show the error message 
        Array.isArray(options) && options.length > 0 ? <Dropdown options={options}/> : <ErrorMessage/>
      }
    </div>
  );
};
