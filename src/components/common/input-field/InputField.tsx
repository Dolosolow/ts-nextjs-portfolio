import { useState, useEffect } from "react";
import type { InputHTMLAttributes } from "react";

import { VisibilityIcon } from "@/components/common/icons";
import { StyledInputWrapper, StyledInput } from "./styled";

interface IFProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  handleOnChange: (value: string) => void;
  resetField?: boolean;
}

export const InputField = (props: IFProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { resetField = false } = props;

  const handleChange = (value: string) => {
    setInputValue(value);
    props.handleOnChange(value);
  };

  const toggleTextVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (resetField) setInputValue("");
  }, [resetField]);

  return (
    <StyledInputWrapper>
      <StyledInput
        type={props.type === "password" && passwordVisible ? "text" : props.type}
        style={props.style}
        value={inputValue}
        placeholder={props.placeholder}
        onChange={(e) => handleChange(e.target.value.trim())}
      />
      {props.type === "password" && (
        <div onClick={toggleTextVisibility}>
          <VisibilityIcon className={`visibility-toggler${!passwordVisible ? "" : " visible"}`} />
        </div>
      )}
    </StyledInputWrapper>
  );
};
