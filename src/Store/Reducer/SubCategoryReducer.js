export const SubCategoryReducer = (state, action) => {
  switch (action.type) {
    case "GET_SUBCATEGORY":
      return {
        ...state,
        data: action.subCategory.data,
        success: true,
        error: false,
      };
    case "PASSING_UPDATE_SUBCATEGORY":
      return {
        ...state,
        checkUpdate: true,
        updatedData: action.subCategory.data,
        success: true,
        error: false,
      };
    case "UPDATE_SUCCESS":
      return {
        ...state,
        checkUpdate: false,
        success: true,
        error: false,
      };
    case "DELETE_SUBCATEGORY":
      return {
        ...state,
        success: action.subCategory.success,
        error: false,
      };

    default:
      return state;
  }
};
