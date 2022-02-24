// const initalState = {
//   email: "",
//   password: "",
//   loggedIn: false,
//   error: false,
// };

export const LoginReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        token: action.login.token,
        name: action.login.name,
        error: false,
        email: action.login.email,
        hello: "hello",
      };
    case "SIGN_IN_FAIL":
      return {
        ...state, 
        error: true,
        errorMessage: action.login.errorMessage,
      };
    case "HELLO":
      return {
        ...state,
        error: true,
        hello: "hello",
      };

    default:
      return state;
  }
};
