import { ProjectDocument } from "@/types/index";

const content: ProjectDocument = {
  Spotify: {
    title: "Spotify Music Clone",
    caption: "Search for Artists and stream music on your iphone device",
    flipBook: ["React Native", "Redux", "Typescript"],
    sections: [
      {
        title: "Getting Started",
        caption: "Test on your device via install or use the Expo go app",
        description: `A clone of Spotify build with React Native and Expo. Motivation behind it was the UI the Spotify team build. 
         The background video that veered away from traditional music players album covers. Approach at first was to recreate the music player. Utilizing tools like React Native Reanimated made recreating the UI easier to achieve.
         For music, Downloaded mp3 files. As for the background videos, went with Apple's quicktime player to record pre-cut sized music video from youtube.`,
        body: [],
      },
      {
        title: "Tech Stack",
        caption: "Tools used that helped make this app",
        body: [],
      },
    ],
  },
  Server: {
    title: "Simple Auth Server",
    caption: "Basic user authentication so it's one less thing to worry about",
    flipBook: ["GraphQL", "Typeorm", "Typescript"],
    sections: [
      {
        title: "Getting Ahead",
        caption: "Test on your device via install or use the Expo go app",
        description: `Register and authenticate users with the power of Graphql and Rest. With Redis and express-sessions keep users signed in.
         Connected to an emailing delivery system to send confirmation emails and reset password emails. Simple to add other email services to meet
         project needs such as email receipts or promotions.`,
        body: [],
      },
      {
        title: "Tech Stack",
        caption: "Tools used that helped make this server",
        body: [],
      },
      {
        title: "Examples",
        caption: "Quick interactive way to test the server",
        body: [
          {
            link: {
              href: "https://10minemail.com/en/",
              text: "To keep things simple suggest use this neat",
              link_text: "10 min email generator",
              description: `10minemail does what the name implies and helps test receiving mail from an API
               without using your actual email address. The given email is open for 10 minutes, great
               for this use case.`,
            },
          },
          {
            type: "response",
            title: "Error Handling",
            description: `For all abnormal requests, the API will return non-2xx status code, with a response body in JSON format to explain the error. The response will follow a format like:`,
            codeBlock: { path: "error-path-here", message: "error-msg-here" },
          },
          {
            type: "response",
            description: `Using an invalid register request, all in all, a complete error response from the server would like:`,
            codeBlock: { register: [{ path: "error-path-here", message: "error-msg-here" }] },
          },
          {
            type: "request",
            codeBlock: {
              request: "register",
              description: `To try out the query, go ahead and enter an email. In this case, the email entered will be used as the password.`,
              operation: `mutation  RegisterUser($email: String!, $password: String!) {\n    register(email: $email, password: $password)\n}`,
              fields: [{ fieldName: "email", type: "email" }],
              response: { data: { register: null } },
            },
          },
          {
            type: "request",
            codeBlock: {
              request: "login",
              description: `The login section requires you to use the email address which was registered. Enter both the email and password below to log in. 
               For this purpose, the response will not be the expected 200 response from the mutation itself. But from a query that retrieves the email of the user logged in. 
               Null as the response if the login was unsuccessful and user data otherwise.`,
              operation: `mutation  LoginUser($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n}`,
              fields: [
                { fieldName: "email", type: "email" },
                { fieldName: "password", type: "password" },
              ],
              response: { data: { login: null } },
            },
          },
          {
            type: "request",
            codeBlock: {
              request: "forgot_password",
              description: `Creates an email containing a link to reset/change your password. For this particular case, there is no client-side.
               A way around this is to copy the link address in the email. Go ahead and add it to the field named "key" in the change password section below`,
              operation: `mutation  SendForgotPwdEmail($email: String!) {\n    sendForgotPasswordEmail(email: $email)\n}`,
              fields: [{ fieldName: "email", type: "email" }],
              response: { data: { sendForgotPasswordEmail: true } },
            },
          },
          {
            type: "request",
            codeBlock: {
              request: "change_password",
              description: `Here you will need to use the key taken from the pathname. If you need the key follow the steps above to get it from the email. 
               Once completed, enter both the key and new password to the fields below.`,
              operation: `mutation  ChangePassword($newPassword: String!, $key: String!) {\n    changeForgottenPassword(newPassword: $newPassword, key: $key)\n}`,
              fields: [
                { fieldName: "new_password", type: "password" },
                { fieldName: "key", type: "text" },
              ],
              response: { data: { changeForgottenPassword: null } },
            },
          },
        ],
      },
    ],
  },
};

export default content;
