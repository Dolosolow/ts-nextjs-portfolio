import { useState } from "react";
import { atomOneDark } from "react-code-blocks";

import { StyledButton } from "@/components/common/styled-button";
import { Spinner } from "@/components/common/spinner";
import { ResponseView } from "../response-view";
import { InputFieldGroup } from "./InputFieldGroup";
import type { RequestBlock } from "@/types/index";

import { capitalize } from "@/utils/capitalize";
import { sendRequest } from "@/utils/send-request";

import { StyledBlock } from "./styled";

export const RequestView = (props: { requestData: RequestBlock }) => {
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
    await sendRequest(props.requestData.request, requestBody, (isFetching, data) => {
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
      <ResponseView
        title={capitalize(props.requestData.request, "_")}
        desc={props.requestData.description}
        codeBlock={props.requestData.operation}
      />
      <div className="f-column">
        <ResponseView desc="Response - 200" codeBlock={props.requestData.response} />
        <InputFieldGroup
          fields={props.requestData.fields}
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
              <ResponseView codeBlock={response} />
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
