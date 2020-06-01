const initialState = {
  id: "",
  full_name: "",
  username: "",
  password: "",
  email: "",
  internal: "",
  isLogin: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...state,
        token: action.payload.token,
        isLogin: true,
      };
    case "LOG_OUT":
      return {
        isLogin: false,
      };
    case "SUCCESS_REGISTER":
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
}
