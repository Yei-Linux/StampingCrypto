import React from "react";
import { labelCSS, textareaCSS, inputFileCSS } from "../styles/components";

const TextField = ({
  value = "",
  onChange,
  placeholder,
  type = "textarea",
  label,
}) => {
  const getInput = () => {
    if (type === "textarea") {
      return (
        <textarea
          className={textareaCSS}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      );
    }

    if (type === "input") {
      return (
        <input
          type="text"
          className={textareaCSS}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    }

    return (
      <input className={inputFileCSS} type="file" onChange={onChange}></input>
    );
  };

  return (
    <div>
      <label className={labelCSS} htmlFor="message">
        {label}
      </label>
      {getInput()}
    </div>
  );
};

export default TextField;
