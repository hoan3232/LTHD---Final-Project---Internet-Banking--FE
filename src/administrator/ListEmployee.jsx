import React, { useContext } from "react";
import TodoAppContext from "../todoAppContext.js";
import { Link } from "react-router-dom";

function ListEmployee(props) {
  const { store } = useContext(TodoAppContext);

  return (
    <div className="container2">
      <h2>Danh sách nhân viên</h2>
      <div className="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
          </tr>
        </table>
      </div>
      <Link to="/administrator">
        <button type="button1-ck">Back</button>
      </Link>
      {/* <ul>
        {store.items.map(function (item) {
          return <TodoItem key={item.id} task={item} />;
        })}
      </ul> */}
    </div>
  );
}

export default ListEmployee;
