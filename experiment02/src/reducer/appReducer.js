export const appReducer = (state, action) => {
  switch (action.type) {

    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((t, i) => i !== action.payload)
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload
      };

    default:
      return state;
  }
};