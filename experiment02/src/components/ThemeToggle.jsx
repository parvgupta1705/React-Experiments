import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ThemeToggle = () => {
  const { state, dispatch } = useContext(AppContext);

console.log(state.theme);
  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      className="btn"
    >
      {state.theme === "light" ? "Dark" : "Light"}
    </button>
  );
};
export default ThemeToggle;