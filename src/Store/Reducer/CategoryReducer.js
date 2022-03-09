export const CategoryReducer = (state, action) => {
  switch (action.type) {
    case "POST_CATEGORY_SUCCESS":
      return {
        ...state,
        // success: action.category.success,
        success: true,
        error: false,
      };
    case "GET_CATEGORY_SUCCESS":
      return {
        ...state,
        data: action.category.data,
        success: true,
        error: false,
      };
    case "PASSING_UPDATE_CATEGORY_SUCCESS":
      return {
        ...state,
        checkUpdate: true,
        updatedData: action.category.data,
        success: true,
        error: false,
      };
    case "UPDATE_CATEGORY_SUCCESS":
      return {
        ...state,
        checkUpdate: false,
        success: true,
        error: false,
      };
    case "DELETE_CATEGORY_SUCCESS":
      return {
        ...state,

        success: action.category.success,
      };

    default:
      return state;
  }
};
