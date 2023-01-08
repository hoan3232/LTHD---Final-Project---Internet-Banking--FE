import React, { useContext } from "react";
import TodoAppContext from "../todoAppContext.js";
import { data } from "../constant/temp-data.jsx";
import { useState } from "react";
import DialogTransfer from "./Modeltransfer.jsx";

function ListCK(props) {
  const { store } = useContext(TodoAppContext);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  //   const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div className="option">
        {/* <button type="button" onClick={handleClickOpen}>
          Transfer
        </button> */}
        <button type="button">Chuyển khoản</button>
        <button type="button">Chuyển khoản liên ngân hàng</button>
        <button type="button">Nhắc nợ</button>
        <button type="button">Lịch sử giao dịch</button>
      </div>
      {/* {open && <DialogTransfer open={open} setOpen={setOpen}/>} */}

      <div className="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Số tài khoản</th>
            <th>Tên</th>
            <th>Ngân hàng</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.stk}</td>
                <td>{val.name}</td>
                <td>{val.bank}</td>
              </tr>
            );
          })}
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

export default ListCK;
