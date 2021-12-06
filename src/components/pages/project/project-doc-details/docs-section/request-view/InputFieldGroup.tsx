import type { HTMLInputTypeAttribute } from "react";

import { InputField } from "@/components/common/input-field";
import { InputGroup } from "./styled";
import { StyledButton } from "@/components/common/styled-button";

import { capitalize } from "@/utils/capitalize";

interface IGProps {
  isFetching: boolean;
  fields: Array<{ fieldName: string; type: HTMLInputTypeAttribute }>;
  handleOnChange: (value: string, fieldName: string) => void;
  handleSubmit: () => void;
}

export const InputFieldGroup = ({ fields, isFetching, handleOnChange, handleSubmit }: IGProps) => (
  <InputGroup className="f-column">
    {fields.map((field, idx) => (
      <div key={idx} className="inputgroup__fieldwrapper f-align">
        <p>Enter a {capitalize(field.fieldName, "_").toLowerCase()}</p>
        <InputField
          type={field.type}
          name={field.fieldName}
          placeholder={capitalize(field.fieldName, "_")}
          resetField={isFetching}
          handleOnChange={(value) => handleOnChange(value, field.fieldName)}
        />
        {idx === fields.length - 1 && <StyledButton onClick={handleSubmit}>Send</StyledButton>}
      </div>
    ))}
  </InputGroup>
);
