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

        response = await fetchResponse(GQLOperations.LoginMutation(), {
          email: requestBody["email"],
          password: requestBody["password"],
        });

        if (!response.data.login) {
          response = await fetchResponse(GQLOperations.UserQuery());
        }

        cb(false, response);
      }
      break;
    case "register":
      if (requestBody["email"].length > 0) {
        cb(true, null);

        const response = await fetchResponse(GQLOperations.RegisterMutation(), {
          email: requestBody["email"],
          password: requestBody["email"],
        });

        cb(false, response);
      }
      break;
    case "forgot_password":
      if (requestBody["email"].length > 0) {
        cb(true, null);

        const response = await fetchResponse(GQLOperations.ForgotPasswordMutation(), {
          email: requestBody["email"],
        });

        cb(false, response);
      }
      break;
    case "change_password":
      if (requestBody["new_password"].length > 0 && requestBody["key"].length > 0) {
        cb(true, null);

        const response = await fetchResponse(GQLOperations.ChangePasswordMutation(), {
          newPassword: requestBody["new_password"],
          key: requestBody["key"],
        });

        cb(false, response);
      }
      break;
  }
};
