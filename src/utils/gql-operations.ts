import axios from "axios";

const defaultGqlUri = "https://api.jrmunz.com/graphql";

export const fetchResponse = async (
  query: string,
  variables?: { [key: string]: any },
  uri: string = defaultGqlUri
) => {
  const response = await await axios({
    url: uri,
    withCredentials: true,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({
      query,
      variables,
    }),
  });

  return response.data;
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

  static RegisterMutation = () => {
    return `
       mutation register($email: String!, $password: String!) {
         register(email: $email, password: $password) {
           path
           message
         }
       }
     `;
  };

  static LoginMutation = () => {
    return `
       mutation login($email: String!, $password: String!) {
         login(email: $email, password: $password) {
           path
           message
         }
       }
     `;
  };

  static ForgotPasswordMutation = () => {
    return `
       mutation sendForgotPasswordEmail($email: String!){
         sendForgotPasswordEmail(email: $email)
       }
     `;
  };

  static ChangePasswordMutation = () => {
    return `
       mutation changeForgottenPassword($newPassword: String!, $key: String!){
         changeForgottenPassword(newPassword: $newPassword, key: $key) {
           path
           message
         }
       }
     `;
  };
}
