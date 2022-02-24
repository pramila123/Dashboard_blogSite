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
      console.log(action.category.data);
      return {
        ...state,
        data: action.category.data,
        success: true,
        error: false,
      };

    default:
      return state;
  }
};
