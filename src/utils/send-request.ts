import { GQLOperations, fetchResponse } from "@/utils/gql-operations";

export const sendRequest = async (
  request: unknown,
  requestBody: { [key: string]: string },
  cb: (isFetching: boolean, data: any) => void
) => {
  switch (request) {
    case "logout":
      cb(true, null);
      await fetchResponse(GQLOperations.LogoutMutation());
      cb(false, { data: { user: null } });
      break;
    case "login":
      if (requestBody["email"].length > 0 && requestBody["password"].length > 0) {
        cb(true, null);
        let response;

        response = await fetchResponse(
          GQLOperations.LoginMutation(requestBody["email"], requestBody["password"])
        );

        if (!response.data.login) {
          response = await fetchResponse(GQLOperations.UserQuery());
        }

        cb(false, response);
      }
      break;
    case "register":
      if (requestBody["email"].length > 0) {
        cb(true, null);

        const response = await fetchResponse(GQLOperations.RegisterMutation(requestBody["email"]));

        cb(false, response);
      }
      break;
    case "forgot_password":
      if (requestBody["email"].length > 0) {
        cb(true, null);

        const response = await fetchResponse(
          GQLOperations.ForgotPasswordMutation(requestBody["email"])
        );

        cb(false, response);
      }
      break;
    case "change_password":
      if (requestBody["new_password"].length > 0 && requestBody["key"].length > 0) {
        cb(true, null);

        const response = await fetchResponse(
          GQLOperations.ChangePasswordMutation(requestBody["new_password"], requestBody["key"])
        );

        cb(false, response);
      }
      break;
  }
};
