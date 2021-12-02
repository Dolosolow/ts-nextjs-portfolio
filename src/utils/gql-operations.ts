/**
|--------------------------------------------------
| GQL Operations for the client-side for the documentation section.
|--------------------------------------------------
*/
const defaultGqlUri = "http://localhost:4000/graphql";

export const fetchResponse = async (query: string, uri: string = defaultGqlUri) => {
  const response = await (
    await fetch(uri, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
  ).json();

  return response;
};

export class GQLOperations {
  static UserQuery = () => {
    return `
      query {
        user {
          email
        }
      }
    `;
  };

  static LogoutMutation = () => {
    return `
      mutation {
        logout
      }
    `;
  };

  static RegisterMutation = (email: string) => {
    return `
      mutation {
        register(email: "${email}", password: "${email}") {
          path
          message
        }
      }
    `;
  };

  static LoginMutation = (email: string, password: string) => {
    return `
      mutation {
        login(email: "${email}", password: "${password}") {
          path
          message
        }
      }
    `;
  };

  static ForgotPasswordMutation = (email: string) => {
    return `
      mutation {
        sendForgotPasswordEmail(email: "${email}")
      }
    `;
  };

  static ChangePasswordMutation = (newPassword: string, key: string) => {
    return `
      mutation {
        changeForgottenPassword(newPassword: "${newPassword}", key: "${key}") {
          path
          message
        }
      }
    `;
  };
}
