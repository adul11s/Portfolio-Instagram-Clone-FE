const initialState = {
  id: "",
  full_name: "",
  username: "",
  password: "",
  email: "",
  internal: "",
  isLoading: true,
};
export default function postReducer(stateCategories = initialState, action) {
  switch (action.type) {
    case "SUCCESS_ADD_POST":
      return {
        ...stateCategories,
        isLoading: false,
        data: action.payload,
      };
    case "SUCCESS_DELETE_POST":
      return {
        ...stateCategories,
        isLoading: false,
        data: action.payload,
      };
    case "SUCCESS_PATCH_POST":
      return {
        ...stateCategories,
        isLoading: false,
        data: action.payload,
      };
    case "CHANGE_INPUT_POST":
      return {
        ...stateCategories,
        [action.payload.target.name]: action.payload.target.value,
      };
    default:
      return stateCategories;
  }
}
