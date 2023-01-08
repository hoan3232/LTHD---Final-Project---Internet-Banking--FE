import { useEffect, useReducer } from "react";

import TodoAppContext from "../todoAppContext.js";
import reducer, { initializer } from "../todoAppReducer.js";
import { instance } from "../utils.js";

function Todo() {
  const [store, dispatch] = useReducer(reducer, {}, initializer);

  return (
    <div className="container">
      <div className="title">Giao dịch viên</div>
    </div>
  );
}

export default Todo;
