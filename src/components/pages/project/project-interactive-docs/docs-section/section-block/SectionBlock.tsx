import { useState } from "react";
import { atomOneDark } from "react-code-blocks";
import type { HTMLInputTypeAttribute } from "react";

import { CodeView } from "@/components/common/code-view";
import { StyledButton } from "@/components/common/styled-button";
import { Spinner } from "@/components/common/spinner";
import { InputFieldGroup } from "./InputFieldGroup";
import { StyledBlock } from "./styled";

import { capitalize } from "@/utils/capitalize";
import { sendRequest } from "@/utils/send-request";

import operations from "src/lang/en.gql-operations-lang";

interface SBProps {
  fields: Array<{ fieldName: string; type: HTMLInputTypeAttribute }>;
  request: "register" | "login" | "forgot_password" | "change_password";
}

export const SectionBlock = (props: SBProps) => {
  const [requestBody, setRequestBody] = useState<{ [key: string]: string }>({});
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [response, setResponse] = useState<any>(null);

  const handleFieldChange = (field: string, value: string) => {
    const updatedFields = Object.assign(requestBody, {});
    const formattedField = field.split(" ").join("_");

    updatedFields[formattedField] = value;
    setRequestBody(updatedFields);
  };

  const handleSubmit = async () => {
    await sendRequest(props.request, requestBody, (isFetching, data) => {
      setIsFetching(isFetching);
      if (data !== null) {
        setResponse(data);
      }
    });

    setRequestBody({});
  };

  const handleLogout = async () => {
    await sendRequest("logout", {}, (isFetching, data) => {
      setIsFetching(isFetching);
      setResponse(data);
    });
  };

  return (
    <StyledBlock>
      <CodeView
        title={capitalize(props.request, "_")}
        desc={operations[props.request].desc}
        codeBlock={operations[props.request].operation}
      />
      <div className="f-column">
        <CodeView desc="Response - 200" codeBlock={operations[props.request].response} />
        <InputFieldGroup
          fields={props.fields}
          isFetching={isFetching}
          handleOnChange={(value, fieldName) => handleFieldChange(fieldName, value)}
          handleSubmit={handleSubmit}
        />
        <div
          className="styledblock__resloader"
          style={{ backgroundColor: response ? atomOneDark.backgroundColor : "#ebebeb" }}
        >
          <Spinner runAnimation={isFetching} />
          {response && (
            <div style={{ opacity: response && isFetching ? 0.25 : 1 }}>
              <CodeView codeBlock={response} />
            </div>
          )}
          {response && response.data.user && (
            <StyledButton className="styledblock__resloader-floatBtn" onClick={handleLogout}>
              Logout
            </StyledButton>
          )}
        </div>
      </div>
    </StyledBlock>
  );
};
