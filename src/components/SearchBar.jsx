import React, { useEffect, useState, useContext } from "react";
import TodoAppContext from "../todoAppContext.js";

function SearchBar(props) {
  const [term, setTerm] = useState("");
  // const { setQuery } = useContext(todoAppContext);
  const { dispatch } = useContext(TodoAppContext);

  useEffect(
    function () {
      // props.onTermChanged(term);
      // setQuery(term);
      dispatch({
        type: "update_filter",
        payload: term,
      });
    },
    [term]
  );

  const txtTerm_Changed = function (e) {
    setTerm(e.target.value);
    // props.onTermChanged(e.target.value);
  };

  const btnClear_Clicked = function (e) {
    setTerm("");
  };

  const txtTerm_KeyUp = function (e) {
    if (e.keyCode === 27) {
      btnClear_Clicked();
    }
  };

  return (
    <div>
      <label>
        <div className="titlesearch">Tìm kiếm</div>
        <div className="bodysearch">
          <input
            type="text"
            value={term}
            onChange={txtTerm_Changed}
            onKeyUp={txtTerm_KeyUp}
          />
          <button type="button" onClick={btnClear_Clicked}>
            Clear
          </button>
        </div>
      </label>
    </div>
  );
}

export default SearchBar;
