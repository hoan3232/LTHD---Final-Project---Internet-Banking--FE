import React, { useContext } from "react";
import TodoAppContext from "../todoAppContext.js";

function ListNN(props) {
  const { store } = useContext(TodoAppContext);

  return (
    <div>
      <div className="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Ngày giờ</th>
            <th>Số tài khoản</th>
            <th>Tên người nợ</th>
            <th>Số tiền</th>
            <th>Nội dung</th>
            <th>Trạng thái</th>
          </tr>
        </table>
      </div>
      <ul>
        {store.items.map(function (item) {
          return <TodoItem key={item.id} task={item} />;
        })}
      </ul>
    </div>
  );
}

export default ListNN;
