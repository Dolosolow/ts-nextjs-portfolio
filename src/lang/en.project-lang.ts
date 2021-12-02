export default {
  genDesc: `Register and authenticate users with the power of Graphql and Rest. With Redis and
    express-sessions keep users signed in. Connected to an emailing delivery system to send
    confirmation emails and reset password emails. Simple to add other email services to meet
    project needs such as email receipts or promotions.`,
  emailGeneratorDesc: `10minemail does what the name implies and helps test receiving mail from an API
    without using your actual email address. The given email is open for 10 minutes, great
    for this use case.`,
  errorHandling: {
    info: `For all abnormal requests, the API will return non-2xx status code, with a response body in JSON format to explain the error. The response will follow a format like:`,
    response: `Using an invalid register request, all in all, a complete error response from the
    server would like:`,
  },
  register: {
    info: `To try out the query, go ahead and enter an email. In this case, the email entered will be used as the password.`,
  },
  header: {
    caption: "Email registration, email sign-in, stay logged in, and more.",
    flipBook: ["GraphQL", "Typeorm", "Typescript"],
  },
  headline: {
    intro: {
      title: "Getting Ahead",
      caption: "Basic user authentication so it's one less thing to worry about.",
    },
    techStacks: {
      title: "Tech Stack",
      caption: "Tools used that helped make this server.",
    },
    examples: {
      title: "Examples",
      caption: "Quick interactive way to test the server.",
    },
  },
};
