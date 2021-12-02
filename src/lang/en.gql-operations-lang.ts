export default {
  register: {
    operation: `mutation  RegisterUser($email: String!, $password: String!) {\n    register(email: $email, password: $password)\n}`,
    desc: "To try out the query, go ahead and enter an email. In this case, the email entered will be used as the password.",
    response: { data: { register: null } },
  },
  login: {
    operation: `mutation  LoginUser($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n}`,
    desc: `The login section requires you to use the email address which was registered. Enter both the email and password below to log in. 
    For this purpose, the response will not be the expected 200 response from the mutation itself. But from a query that retrieves the email of the user logged in. 
    Null as the response if the login was unsuccessful and user data otherwise.`,
    response: { data: { login: null } },
  },
  forgot_password: {
    operation: `mutation  SendForgotPwdEmail($email: String!) {\n    sendForgotPasswordEmail(email: $email)\n}`,
    desc: `Creates an email containing a link to reset/change your password. For this particular case, there is no client-side.
     A way around this is to copy the link address in the email. Go ahead and add it to the field named "key" in the change password section below`,
    response: { data: { sendForgotPasswordEmail: true } },
  },
  change_password: {
    operation: `mutation  ChangePassword($newPassword: String!, $key: String!) {\n    changeForgottenPassword(newPassword: $newPassword, key: $key)\n}`,
    desc: `Here you will need to use the key taken from the pathname. If you need the key follow the steps above to get it from the email. 
    Once completed, enter both the key and new password to the fields below.`,
    response: { data: { changeForgottenPassword: null } },
  },
};
