import React, { useEffect, useState } from "react";
import { data } from "../constant/temp-data.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function HisCK(props) {
  // const { store } = useContext(TodoAppContext);

  return (
    <div className="container2">
      <div className="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Ngày giờ</th>
            <th>Số tài khoản</th>
            <th>Tên người nhận</th>
            <th>Số tiền</th>
            <th>Nội dung</th>
          </tr>
        </table>
      </div>
      {/* <ul>
        {store.items.map(function (item) {
          return <TodoItem key={item.id} task={item} />;
        })}
      </ul> */}
    </div>
  );
}

export default HisCK;
