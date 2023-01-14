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

function ListEmployee(props) {
  const { store } = useContext(TodoAppContext);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  return (
    <div className="container2">
      <h2>Danh sách nhân viên</h2>
      <div className="option flex">
        <div onClick={() => handleOpen()}>
          <button type="button">Thêm</button>
        </div>
        <div onClick={() => handleOpen1()}>
          <button type="button">Xóa</button>
        </div>
        <div onClick={() => handleOpen2()}>
          <button type="button">Sửa</button>
        </div>
      </div>
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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="popup"
      >
        <DialogTitle id="alert-dialog-title">
          Thêm tài khoản nhân viên
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="bg-dialog"
          >
            <div className="conntainer1">
              <input
                type="text1"
                placeholder="Tên đăng nhập"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
              <input
                type="password1"
                placeholder="Mật khẩu"
                value={pass}
                onChange={(event) => setPass(event.target.value)}
              />
              <input
                type="text1"
                placeholder="Tên nhân viên"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Thêm</Button>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Xóa tài khoản nhân viên
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="bg-dialog"
          >
            <div>
              <input
                type="text1"
                placeholder="Tên đăng nhập"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Xóa</Button>
          <Button onClick={handleClose1}>Đóng</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Sửa thông tin tài khoản
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="bg-dialog"
          >
            <div>
              <input
                type="text1"
                placeholder="Tên đăng nhập"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
              <input
                type="password1"
                placeholder="Mật khẩu"
                value={pass}
                onChange={(event) => setPass(event.target.value)}
              />
              <input
                type="text1"
                placeholder="Tên nhân viên"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="text1"
                placeholder="Mail nhân viên"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="text1"
                placeholder="Số điện thoại nhân viên"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Lưu thay đổi</Button>
          <Button onClick={handleClose2}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ListEmployee;
