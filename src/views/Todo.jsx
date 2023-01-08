import { useEffect, useReducer } from "react";
import AuthInfo from "../components/AuthInfo.jsx";
import SearchBar from "../components/SearchBar.jsx";
import List from "../components/List.jsx";

import TodoAppContext from "../todoAppContext.js";
import reducer, { initializer } from "../todoAppReducer.js";
import { instance } from "../utils.js";

function Todo() {
  const [store, dispatch] = useReducer(reducer, {}, initializer);

  useEffect(function () {
    async function loadTasks() {
      const userId = 1;
      const res = await instance.get(`tasks/${userId}`);
      dispatch({
        type: "init",
        payload: {
          items: res.data,
          query: "",
        },
      });
    }

    loadTasks();
  }, []);

  return (
    <div className="container2">
      <TodoAppContext.Provider value={{ store, dispatch }}>
        <AuthInfo />
        <SearchBar />
        <List />
      </TodoAppContext.Provider>
    </div>
  );
}

export default Todo;
