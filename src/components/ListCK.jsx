import React, { useEffect, useState, useContext } from "react";
import { data } from "../constant/temp-data.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TodoAppContext from "../todoAppContext.js";
import reducer, { initializer } from "../todoAppReducer.js";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function ListCK(props) {
  const { store } = useContext(TodoAppContext);
  const [userSelect, setUserSelect] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleInfo = (val) => {
    setOpen(true);
    setUserSelect(val);
  };
  const handleBank = () => {
    navigate("/transferorder", { state: { user: userSelect } });
  };
  const handleDebt = () => {
    navigate("/debtreminder", { state: { user: userSelect } });
  };
  const handleNavi = () => {
    navigate("/transferorder", { state: { user: {} } });
  };
  const handleNavi2 = () => {
    navigate("/debtreminder", { state: { user: {} } });
  };

  useEffect(() => {
    console.log("data", userSelect);
  }, [userSelect]);
  let count = 0;
  console.log(store.items);
  return (
    <div>
      <div className="option flex">
        <Link to="/submitemailck">
          <button type="button">Chuyển khoản</button>
        </Link>
        <div onClick={handleNavi}>
          <button type="button">Chuyển khoản liên ngân hàng</button>
        </div>
        <div onClick={handleNavi2}>
          <button type="button">Nhắc nợ</button>
        </div>
        <Link to="/history">
          <button type="button">Lịch sử giao dịch</button>
        </Link>
      </div>

      <div className="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Số tài khoản</th>
            <th>Tên</th>
            <th>Ngân hàng</th>
            <th></th>
          </tr>
          {store.items.map((val, key) => {
            return (
              <tr key={key}>
                <td>{++count}</td>
                <td>{val.Id2}</td>
                <td>{val.TenGN}</td>
                <td>{val.NganHang}</td>
                <td>
                  <button onClick={() => handleInfo(val)}>Chi tiết</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Thông tin tài khoản</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="bg-dialog"
          >
            <div>
              {" "}
              Tên người dùng : {userSelect?.TK_TT_DS_GN_Id2ToTK_TT.DS_TK.Id}
            </div>
            <div>
              {" "}
              Số tài khoản : {userSelect?.TK_TT_DS_GN_Id2ToTK_TT.DS_TK.Ten_DK}
            </div>
            <div> Email : {userSelect?.TK_TT_DS_GN_Id2ToTK_TT.DS_TK.Email}</div>
            <div>
              {" "}
              Số điện thoại: {userSelect?.TK_TT_DS_GN_Id2ToTK_TT.DS_TK.Phone}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBank}>Chuyển khoản</Button>
          <Button onClick={handleDebt}>Nhắc nợ</Button>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>
      {/* <ul>
        {store.items.map(function (item) {
          return <TodoItem key={item.id} task={item} />;
        })}
      </ul> */}
    </div>
  );
}

export default ListCK;
