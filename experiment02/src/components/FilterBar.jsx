import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const FilterBar = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <input
      placeholder="Search tasks..."
      onChange={(e) =>
        dispatch({ type: "SET_SEARCH", payload: e.target.value })
      }
    />
  );
};

export default FilterBar;